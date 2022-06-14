import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useAuth0 } from "@auth0/auth0-react";

export const Contact = () => {
  const { user } = useAuth0();
  const [state, handleSubmit] = useForm("xgedqroy");
  if (state.succeeded) {
    return <h4>Thanks for your feedback!</h4>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        autoFocus
        required
        id="email"
        type="email"
        name="email"
        placeholder="YourEmail@host.com"
        defaultValue={user ? user.email : ""}
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Message</label>
      <textarea
        required
        rows="10"
        cols="30"
        id="message"
        name="message"
        placeholder="Your Message Here..."
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
};
