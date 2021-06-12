import React from "react";
import { Modal as MaterialUiModal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { Close } from "@material-ui/icons";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#008CD0",
    border: "5px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "400px",
    height: "450px",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

import { IconButton } from "@material-ui/core";

const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ModalHeading = styled.h2`
  color: #222;
  font-weight: 800;
  font-size: 16px;
`;

interface IModalProps {
  isOpen: boolean;
  heading: string;
  close: () => void;
  children: React.ReactElement;
}

const Modal = ({ isOpen, close, heading, children }: IModalProps) => {
  const classes = useStyles();

  return (
    <Dialog
      onClose={close}
      aria-labelledby="customized-dialog-title"
      open={isOpen}
    >
      <ModalWrapper>
        <DialogTitle id="customized-dialog-title">{heading}</DialogTitle>
        <IconButton>
          <Close onClick={close} />
        </IconButton>
      </ModalWrapper>

      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
