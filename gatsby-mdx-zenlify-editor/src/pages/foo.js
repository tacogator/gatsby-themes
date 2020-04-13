import React from "react"


export default ({ data, location, ...rest }) => {
  console.log(location, rest)
return <div>hello {rest['*']}</div>
}
