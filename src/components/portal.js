"use client";
import React, { useState } from "react";
import {
  Button,
  Header,
  Segment,
  TransitionablePortal,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
export const TrPortal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <TransitionablePortal
      closeOnTriggerClick
      onOpen={handleOpen}
      onClose={handleClose}
      openOnTriggerClick
      trigger={
        <Button
          content={open ? "Close Portal" : "Open Portal"}
          negative={open}
          positive={!open}
        />
      }
    >
      <Segment
        style={{ left: "40%", position: "fixed", top: "50%", zIndex: 1000 }}
      >
        <Header>This is an example portal</Header>
        <p>Portals have tons of great callback functions to hook into.</p>
        <p>To close, simply click the close button or click away</p>
      </Segment>
    </TransitionablePortal>
  );
};
