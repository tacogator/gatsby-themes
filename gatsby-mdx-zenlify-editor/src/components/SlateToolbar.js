import React, { useCallback, useMemo, useState, useEffect } from "react"
import { useSlate } from "slate-react"
import { Editor, Transforms } from "slate"

import { Divider, Button } from "@material-ui/core"
import { makeStyles, withStyles } from "@material-ui/core/styles"

import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab"

import {
  InsertLink,
  FormatBoldRounded,
  FormatItalic,
  FormatListNumbered,
  FormatListBulleted,
  FormatQuote,
} from "@material-ui/icons"

import { insertLink, isLinkActive, move_cursor } from "../utils/LinkHelpers"
import LinkEditorPopup from "./LinkEditorPopup"
import LinkAddPopup from "./LinkAddPopup"
import MainMenu from "./MainMenu"
import BearAppBar, { SlimToolbar } from "../components/widgets/BearAppBar"

export default function SlateToolbar({ linkState, setOpenLink }) {
  const editor = useSlate()
  const [addLinkPopup, setAddLinkPopup] = useState([false, []])
  const classes = useStyles()

  return (
    <div>
      <BearAppBar rightMenu={<MainMenu />}>
        <SlimToolbar>
          <StyledToggleButtonGroup size="small">
            <MarkButton2 format="strong" icon={<FormatBoldRounded />} />
            <MarkButton2 format="italic" icon={<FormatItalic />} />
            <BlockButton editor={editor} format="subheader" icon="Header" />
            <BlockButton
              editor={editor}
              format="blockquote"
              icon={<FormatQuote />}
            />
          </StyledToggleButtonGroup>
          <Divider orientation="vertical" className={classes.divider} />
          <StyledToggleButtonGroup size="small">
            <MarkButton2 format="numbered-list" icon={<FormatListNumbered />} />
            <MarkButton2 format="bulleted-list" icon={<FormatListBulleted />} />
          </StyledToggleButtonGroup>
          <Divider orientation="vertical" className={classes.divider} />
          <StyledToggleButtonGroup size="small">
            <LinkButton editor={editor} setAddLinkPopup={setAddLinkPopup} />
          </StyledToggleButtonGroup>
        </SlimToolbar>
        <SlimToolbar>
          <Button size="small" color="primary" variant="contained">
            Publish
          </Button>
        </SlimToolbar>
      </BearAppBar>
      <LinkAddPopup
        open={addLinkPopup[0]}
        path={addLinkPopup[1]}
        onSave={url => {
          if (!url) {
            setAddLinkPopup([false, []])
            return
          }
          move_cursor(editor, addLinkPopup[1].focus)
          Transforms.setSelection(editor, addLinkPopup[1])
          insertLink(editor, url)
          setAddLinkPopup([false, []])
        }}
      />
      <LinkEditorPopup
        editor={editor}
        linkState={linkState}
        setOpen={e => {
          setOpenLink(e)
        }}
      />
    </div>
  )
}

const LIST_TYPES = ["numbered-list", "bulleted-list"]

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format)
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: n => LIST_TYPES.includes(n.type),
    split: true,
  })

  Transforms.setNodes(editor, {
    type: isActive ? "paragraph" : isList ? "list-item" : format,
  })

  // Transforms.setNodes(editor, {
  //   type: isActive ? "paragraph" : format,
  // })
  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

export const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

const isBlockActive = (editor, format) => {
  const foo = Array.from(
    Editor.nodes(editor, {
      match: n => {
        //console.log(" ---", n)
        return n.type === format
      },
    })
  )

  const [match] = foo
  return !!match
}

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

const LinkButton = ({ editor, setAddLinkPopup }) => {
  const hasLink = isLinkActive(editor)
  return (
    <StyledToggleButton
      size="small"
      variant={hasLink ? "contained" : "outlined"}
      onClick={event => {
        setAddLinkPopup([true, editor.selection])
      }}
      value=""
    >
      <InsertLink />
    </StyledToggleButton>
  )
}

const BlockButton = ({ editor, format, icon }) => {
  return (
    <StyledToggleButton
      size="small"
      selected={isBlockActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
      value=""
    >
      {icon}
    </StyledToggleButton>
  )
}

const MarkButton2 = ({ format, icon, text }) => {
  const editor = useSlate()
  return (
    <StyledToggleButton
      size="small"
      value="left"
      aria-label="left aligned"
      selected={isMarkActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      {icon ? icon : <strong>{text}</strong>}
    </StyledToggleButton>
  )
}

const StyledToggleButton = withStyles(theme => ({
  root: {
    margin: theme.spacing(0.5),
    border: "none",
    padding: theme.spacing(0, 1),
  },
}))(ToggleButton)

const StyledToggleButtonGroup = withStyles(theme => ({
  grouped: {
    margin: theme.spacing(0.5),
    border: "none",
    padding: theme.spacing(0, 1),
    "&:not(:first-child)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-child": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}))(ToggleButtonGroup)

const useStyles = makeStyles(theme => ({
  formatToolbar: {
    display: "flex",
    border: `1px solid ${theme.palette.divider}`,
    flexWrap: "wrap",
  },
  divider: {
    alignSelf: "stretch",
    height: "auto",
    margin: theme.spacing(1, 0.5),
  },
}))
