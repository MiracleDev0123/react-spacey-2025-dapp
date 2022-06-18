import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Zoom from "@mui/material/Zoom";
import { TransitionProps } from "@mui/material/transitions";
import useBreakpoint from "../lib/hooks/useBreakpoint";
import Close from "../images/market/close.png";
import "./dialog.css";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Zoom ref={ref} {...props} />;
});

interface DialogProps {
  title?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  open: boolean;
  onClose?: () => void;
}

const Modal: React.FC<DialogProps> = ({
  title,
  content,
  footer,
  open,
  onClose,
}) => {
  const breakPoint = useBreakpoint();

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
        className="popup"
        maxWidth={breakPoint === "xxl" ? "lg" : "md"}
      >
        <DialogTitle
          sx={{
            padding: 0,
            position: "relative",
            minHeight: "4rem",
          }}
          className="modal-section"
        >
          <div className="font py-4 md:px-12 px-4">{title}</div>
          <img
            src={Close}
            alt="close"
            className="modal-close"
            onClick={onClose}
          />
        </DialogTitle>
        <DialogContent className="modal-section">
          <div className="py-8 md:py-14 font">{content}</div>
        </DialogContent>
        <div className="flex justify-center py-8 modal-footer">{footer}</div>
      </Dialog>
    </div>
  );
};

export default Modal;
