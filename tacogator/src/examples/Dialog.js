import React from "react"
import { Button } from "@material-ui/core"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"

import BearDialog from "../components/widgets/BearDialog"

const scope = { Button, BearDialog }

export const DialogSimple = () => (
  <LiveProvider code={example1} scope={scope}>
    <LivePreview />
    <LiveEditor />
    <LiveError />
  </LiveProvider>
)

const example1 = `function Simple() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(!open);
  return (
    <div>
      <Button variant="outlined" onClick={handleClick}>
        Click me
      </Button>
      <BearDialog open={open} setOpen={setOpen} title="A serious dialog">
      They can't scare me, if I scare them first.”
      ― Lady Gaga
      </BearDialog>
    </div>
  )
}`

const dialog_events_code = `function DialogEvents () {
  const [open, setOpen] = React.useState(false)
  const handleClick = () => setOpen(!open)
  const handlePublish = () => {
    //TODO: publishing logic
    setOpen(false)
  }
  return (
    <div>
      <Button variant="outlined" onClick={handleClick}>Click me</Button>
      <BearDialog
        open={open}
        setOpen={setOpen}
        title="Publish confirmation"
        actions={{
          primary: {
            action: handlePublish,
            label: "Publish",
          },
          secondary: {
            action: () => setOpen(false),
            label: "Cancel",
          },
        }}
      >
        They can't scare me, if I scare them first.” ― Lady Gaga
      </BearDialog>
    </div>
  )
}`

export const DialogEvents = () => (
  <LiveProvider code={dialog_events_code} scope={scope}>
    <LivePreview />
    <LiveEditor />
    <LiveError />
  </LiveProvider>
)
