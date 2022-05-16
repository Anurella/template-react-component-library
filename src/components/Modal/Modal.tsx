import React from "react";
import Form from "../Form/Form";
import ModalStyle from "./Modal.styles";

export default function Modal () {
    return (
        <ModalStyle>
        <div className="modal-container">
            <div className="modal-body">
                <Form />
            </div>
        </div>
        </ModalStyle>
    )
}