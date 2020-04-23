import React from "react"
import {
  Toolbar,
  Button,
  MenuItem,
  Divider,
  Paper,
  Box,
} from "@material-ui/core"
import { Menu, AcUnit as Logo, Menu as Burger } from "@material-ui/icons"
import { Skeleton } from "@material-ui/lab"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"

import BearAppBar, { SlimToolbar } from "../components/widgets/BearAppBar"
import BearMenuList from "../components/widgets/BearMenuList"

import { DesktopScreen, AppLogo, BlockMd } from "../components/UI"

const scope = {
  Paper,
  Button,
  MenuItem,
  Divider,
  BearAppBar,
  BearMenuList,
  Logo,
  Burger,
}

// export const Mobile = () => (
//   <LiveProvider code={mobile_code} scope={scope}>
//     <LivePreview />
//     <LiveEditor />
//     <LiveError />
//   </LiveProvider>
// )

export const DesktopBasicEx = () => (
  <DesktopScreen>
    <Box display="flex" justifyContent="space-between">
      <AppLogo />
      <Toolbar>
        <BlockMd /> &nbsp;
        <BlockMd /> &nbsp; <BlockMd /> &nbsp;
        <Skeleton
          width={32}
          height={24}
          variant="text"
          style={{ background: "#e53935" }}
        />
      </Toolbar>
    </Box>
  </DesktopScreen>
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
      <AppLogo full={false}/>
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
    <BearMenuList label={<Burger/>}>
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

function AppBarDemo() {
  return (
    <BearAppBar
      position="static"
      brandingLogo={<Logo color="primary"/>}
      brandingText={<div>CoolApp</div>}
      mobileMenu={mobileMenu}
      desktopMenu={desktopMenu}
      />
  )
}
render(<AppBarDemo/>)
`

export const AppBarMobile = () => (
  <LiveProvider
    code={mobile_code}
    scope={scope}
    noInline={true}
    style={{ background: "#212121" }}
  >
    <LiveEditorContainer>
      <LiveEditor />
    </LiveEditorContainer>
    <LiveError />
    <p>Resize your browser to see changes</p>
    <DesktopScreen>
      <LivePreview />
    </DesktopScreen>
  </LiveProvider>
)

const LiveEditorContainer = ({ children }) => (
  <div style={{ marginTop: "2rem", borderRadius: "2px", background: "#000" }}>
    {children}
  </div>
)
