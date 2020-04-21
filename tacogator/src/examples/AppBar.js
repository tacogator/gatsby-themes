import React from "react"
import {
  Toolbar,
  Button,
  MenuItem,
  Divider,
  Paper,
  Box,
} from "@material-ui/core"
import { Menu } from "@material-ui/icons"
import { Skeleton } from "@material-ui/lab"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"

import BearAppBar, { SlimToolbar } from "../components/widgets/BearAppBar"
import BearMenuList from "../components/widgets/BearMenuList"

const scope = { Paper, Button, MenuItem, Divider, BearAppBar, BearMenuList }

// export const Mobile = () => (
//   <LiveProvider code={mobile_code} scope={scope}>
//     <LivePreview />
//     <LiveEditor />
//     <LiveError />
//   </LiveProvider>
// )

export const DesktopBasicEx = () => (
  <div
    style={{
      border: "1px solid #9E9E9E",
      //   display: "flex",
      //   alignItems: "flex-start",
      width: "80%",
      paddingBottom: "30%",
    }}
  >
    <Box display="flex" justifyContent="space-between" width>
      <Toolbar>
        <Skeleton
          width={32}
          height={32}
          variant="circle"
          style={{ background: "#e53935" }}
        />
        &nbsp;
        <Skeleton
          width={72}
          height={32}
          variant="text"
          animation="wave"
          style={{ background: "#26C6DA" }}
        />
      </Toolbar>
      <Toolbar>
        <Skeleton
          width={32}
          height={24}
          variant="text"
          animation="false"
          style={{ background: "#78909C" }}
        />
        &nbsp;
        <Skeleton
          width={32}
          height={24}
          variant="text"
          animation="false"
          style={{ background: "#78909C" }}
        />
        &nbsp;
        <Skeleton
          width={32}
          height={24}
          variant="text"
          animation="false"
          style={{ background: "#78909C" }}
        />
        &nbsp;
        <Skeleton
          width={32}
          height={24}
          variant="text"
          style={{ background: "#e53935" }}
        />
      </Toolbar>
    </Box>
  </div>
)

export const MobileBasicEx = () => (
  <div
    style={{
      border: "1px solid #9E9E9E",
      //   display: "flex",
      //   alignItems: "flex-start",
      width: "350px",
      height: "450px",
    }}
  >
    <Box display="flex" justifyContent="space-between" width>
      <Toolbar>
        <Skeleton
          width={32}
          height={32}
          variant="circle"
          style={{ background: "#e53935" }}
        />
      </Toolbar>
      <Toolbar>
        <Skeleton
          width={32}
          height={24}
          variant="text"
          style={{ background: "#e53935" }}
        />
        <Menu fontSize="default" />
      </Toolbar>
    </Box>
  </div>
)

const mobile_code = `const mobileHamburger = (
    <BearMenuList label="[=]">
      <MenuItem href="/login">Login</MenuItem>
      <Divider />
      <MenuItem href="/services">Services</MenuItem>
      <MenuItem href="/about">About</MenuItem>
    </BearMenuList>
  );
  
  const mobileMenu = (
    <>
      <Button variant="contained" color="primary">
        Signup
      </Button>
      {mobileHamburger}
    </>
  );
  
  const desktopMenu = (
    <>
      <Button>About</Button>
      <Button>Login</Button>
      <Button variant="contained" color="primary">
        Sign up
      </Button>
    </>
  );

function AppBarMobile() {
  return (
    <BearAppBar
      position="static"
      brandingLogo={<div>Z</div>}
      brandingText={<div>CoolApp</div>}
      mobileMenu={mobileMenu}
      desktopMenu={desktopMenu}
      />
  )
}
render(<Paper height="300px"><AppBarMobile/></Paper>)
`

export const AppBarMobile = () => (
  <LiveProvider
    code={mobile_code}
    scope={scope}
    noInline={true}
    style={{ background: "#212121" }}
  >
    <LivePreview />
    <LiveEditor />
    <LiveError />
  </LiveProvider>
)
