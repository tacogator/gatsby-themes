import React from "react"
import MuiLink from "@material-ui/core/Link"
import { Link as GatsbyLink } from "gatsby"

// const Link = React.forwardRef(function Link(props, ref) {
//   return <MuiLink component={GatsbyLink} ref={ref} {...props} >{props.children}</MuiLink>;
// });

type Props = {
  to: string;
  [x:string]: any;
}
const Link = (props: Props) => (
  <MuiLink color="inherit" component={GatsbyLink} {...props}>
    {props.children}
  </MuiLink>
)
export default Link
