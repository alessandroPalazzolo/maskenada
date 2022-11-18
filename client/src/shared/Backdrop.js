import React from "react";
import ReactDOM from "react-dom";

import Modal from './Modal';
import './Backdrop.scss';

const Backdrop = props => {
    const content = (
        <div className="backdrop__wrapper" onClick={props.click}>
            <Modal />
        </div>
    );

    return (
        props.onShow && ReactDOM.createPortal(content, document.getElementById("backdrop-hook"))
    );
}

export default Backdrop;