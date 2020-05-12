import React from "react"
import { preToCodeBlock } from "mdx-utils"
import { Typography } from "@material-ui/core"

const MarkdownStyles = {
  h2: props => <Typography variant="h2">{props.children}</Typography>,
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return (
        <div
          className="code-block"
          style={{
            borderRadius: "6px",
            background: "#ECEFF1",
            overflowX: "auto",
          }}
        >
          <pre
            style={{
              padding: "16px",
              whitepace: "pre-wrap",
              wordWrap: "break-word",
            }}
          >
            <code>{props.codeString}</code>
          </pre>
        </div>
      )
    }
    // it's possible to have a pre without a code in it
    return <pre {...preProps}>{preProps.children}</pre>
  },
  wrapper: ({ children }) => <>{children}</>,
}

// export const useStyles = makeStyles(theme => ({
//   blockquote: {
//     "&: p": {
//       fontSize: "1.5rem",
//     },
//   },
// }))

export default MarkdownStyles
