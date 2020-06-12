import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import BearEmailSubscription from "./bear/BearEmailSubscription"

export default function Mailchimp(props) {
  const [{ sending, subscribed, error }, setSendingState] = useState({
    sending: false,
    subscribed: false,
    error: false,
  })

  const submitHandler = async ({ email }) => {
    setSendingState({ sending: true })
    try {
      const response = await addToMailchimp(email)
      const success = response.result && response.result === "success"
      setSendingState({ sending: false, subscribed: success, error: !success })
    } catch (e) {
      setSendingState({ sending: false, subscribed: false, error: true })
    }
  }

  return (
    <BearEmailSubscription
      message={
        <>
          Get time-saving <em>Dev notes</em> in your inbox.
        </>
      }
      postSubscribeMessage={<>Thank you for subscribing.</>}
      errorMessage={<>Oops, we can't receive your email. Please try again.</>}
      subscribed={subscribed}
      error={error}
      sending={sending}
      onSubmit={submitHandler}
    />
  )
}
