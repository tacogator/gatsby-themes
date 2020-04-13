import React, { useEffect, useState } from "react"
import { ReactEditor, useSlate } from "slate-react"
import { Editor, Range } from "slate"

import { TextField, withStyles } from "@material-ui/core"

import ModalDialog from "./ModalDialog"
import {
  insertLink,
  get_link_node,
  update_link,
  unwrapLink,
  move_cursor,
} from "../utils/LinkHelpers"

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})

export default function LinkAddPopup({ open, onSave }) {
  const actions = {
    primary: {
      label: "Save",
      action: () => {
        handleClose()
        // move_cursor(editor, linkNode)
        // unwrapLink(editor)
        // handleClose()
      },
    },
  }

  const [link, setLink] = useState()

  useEffect(() => {
    open && setLink("")
  }, [open])

  const handleClose = () => {
    onSave(link)
  }

  return (
    <ModalDialog
      title="Add link"
      open={open}
      setOpen={handleClose}
      actions={actions}
    >
      <TextField
        autoFocus
        fullWidth={true}
        id="link-new"
        label="Link"
        variant="outlined"
        value={link}
        onChange={e => setLink(e.target.value)}
      />
    </ModalDialog>
  )
}
