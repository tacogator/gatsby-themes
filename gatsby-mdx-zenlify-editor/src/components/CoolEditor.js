import React, {
  useCallback,
  useMemo,
  useState,
  useEffect,
  useRef,
} from "react";
import isHotkey from "is-hotkey";
import { Editable, withReact, Slate, ReactEditor } from "slate-react";
import { createEditor } from "slate";
import { withHistory } from "slate-history";

import { Container, Button } from "@material-ui/core/";

import path from "path";

import { withLinks } from "../utils/LinkHelpers";
import SlateToolbar, { toggleMark } from "./SlateToolbar";
import SEO from "./SEO";
import { withImages } from "../utils/ImageHelpers";

import {
  serialize,
  to_markdown,
  html_to_slate,
  withLayout,
} from "./slate-utils";

const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+`": "code",
};

const _initialValue = [
  {
    type: "title",
    children: [{ text: "Untitled" }],
  },
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

export default function CoolEditor({ basePath, pageData, onSave }) {
  const [linkState, setOpenLink] = useState([false, ""]);

  const initialValue = pageData.body ? html_to_slate(pageData) : _initialValue;
  console.log("#initial ", initialValue);
  const [value, setValue] = useState(initialValue);
  const [localFrontmatter, setFrontmatter] = useState(pageData.frontmatter);
  const renderElement = useCallback(
    (props) => (
      <Element {...props} basePath={basePath} setOpenLink={setOpenLink} />
    ),
    []
  );
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(
    () =>
      withLayout({
        editor: withImages(withLinks(withHistory(withReact(createEditor())))),
        pageData,
      }),
    []
  );

  // Important: store DOM and local fm in ref so that
  // auto-save timer can get current vals
  const documentRef = useRef({ document: value, localFrontmatter });
  documentRef.current = { document: value, localFrontmatter };

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("autosave ...");
      onPresave(documentRef.current);
    }, 45000);
    // not really working
    !ReactEditor.isFocused() && ReactEditor.focus(editor);

    return () => clearInterval(timer);
  }, [linkState]);

  const onPresave = ({ document, localFrontmatter: _fm }) => {
    const { title, body } = serialize({ children: document });
    const frontmatter = {
      ..._fm,
      title: title || "Untitled",
      date: new Date().toISOString(),
    };

    onSave({
      frontmatter,
      body,
      whole_document: to_markdown({
        frontmatter,
        body,
      }),
    });
  };

  return (
    <Slate editor={editor} value={value} onChange={(value) => setValue(value)}>
      <SlateToolbar linkState={linkState} setOpenLink={setOpenLink} />
      <Container maxWidth="md" style={{ paddingTop: "120px" }}>
        <Button onClick={() => onPresave(documentRef.current)}>Save</Button>
        <SEO
          frontmatter={localFrontmatter}
          onUpdate={(val) => {
            console.log("#seo ", val);
            setFrontmatter(val);
          }}
        />
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Enter some rich text…"
          spellCheck
          autoFocus
          onKeyDown={(event) => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event)) {
                event.preventDefault();
                const mark = HOTKEYS[hotkey];
                toggleMark(editor, mark);
              }
            }
          }}
        />
      </Container>
    </Slate>
  );
}

const Element = ({ basePath, attributes, children, element, setOpenLink }) => {
  switch (element.type) {
    case "block-quote":
      return <blockquote {...attributes}>{children}</blockquote>;
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>;
    case "title":
      return <h1 {...attributes}>{children}</h1>;
    case "subheader":
      return <h2 {...attributes}>{children}</h2>;
    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "numbered-list":
      return <ol {...attributes}>{children}</ol>;
    case "link":
      return (
        <a
          {...attributes}
          href={element.url}
          onClick={(event) => {
            //event.preventDefault()
            setOpenLink([true, element.url]);
          }}
        >
          {children}
        </a>
      );
    case "img":
      return (
        <span {...attributes}>
          <img
            alt=""
            width="100%"
            src={path.join("___assets", path.basename(basePath), element.url)}
          />
          {children}
        </span>
      );
    case "section":
      return <section {...attributes}>{children}</section>;
    case "eof":
      return <span>¶</span>;
    default:
      return (
        <p {...attributes} className="main-editor-text">
          {children}
        </p>
      );
  }
};

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.strong) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};
