import React from "react"
import {
  Button,
  Toolbar,
  Divider,
  IconButton,
  Box,
  makeStyles,
  Container,
} from "@material-ui/core"
import { Skeleton } from "@material-ui/lab"
import { Close } from "@material-ui/icons"
export const DesktopScreen = ({ children }) => (
  <div
    style={{
      borderRadius: "2px",
      border: "1px solid #9E9E9E",
      width: "80%",
      paddingBottom: "30%",
    }}
  >
    {children}
  </div>
)

export const DialogContainer = ({ children }) => (
  <Container
    maxWidth="sm"
    style={{
      borderRadius: "2px",
      border: "1px solid #9E9E9E",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxShadow: "4px 4px 14px 0px rgba(176,176,176,1)"

    }}
  >
    <Box
      //padding="0 0"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Skeleton
        width={200}
        height={24}
        variant="text"
        animation="false"
        style={{ background: "#78909C" }}
      />
      <IconButton edge="end">
        <Close />
      </IconButton>
    </Box>
    <Divider style={{ marginBottom: "2rem" }} />
    <Skeleton
      variant="text"
      animation="false"
      style={{ background: "#CFD8DC" }}
    />
    <Skeleton
      variant="text"
      animation="false"
      style={{ background: "#CFD8DC" }}
    />
    <Skeleton
      width={120}
      variant="text"
      animation="false"
      style={{ background: "#CFD8DC" }}
    />
    <Divider style={{ marginTop: "2rem" }} />

    <Box padding="0.5rem 0" display="flex" alignItems="center" justifyContent="flex-end">
      <Button disableElevation style={{marginRight: "1rem"}}>Secondary action</Button>
      <Button disableElevation variant="contained" color="primary">
        Primary action
      </Button>
    </Box>
  </Container>
)

export const AppLogo = ({ full = true }) => (
  <Toolbar>
    <Skeleton
      width={32}
      height={32}
      variant="circle"
      animation="none"
      style={{ marginRight: "4px", background: "#e53935" }}
    />
    {full && (
      <Skeleton
        width={72}
        height={32}
        variant="text"
        animation="wave"
        style={{ background: "#26C6DA" }}
      />
    )}
  </Toolbar>
)

export const BlockMd = ({ cta }) => (
  <Skeleton
    width={32}
    height={24}
    variant="text"
    animation="false"
    style={{ background: cta ? "#e53935" : "#78909C" }}
  />
)

const useStyles = makeStyles(theme => ({
  dialogContainer: {},
}))
