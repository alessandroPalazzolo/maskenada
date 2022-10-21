import React from "react";
import ReactDOM from "react-dom";

import './Backdrop.scss';

const Backdrop = props => {
    const content = (
        <div className="backdrop__wrapper" onClick={props.click}>
            <div className="modal__wrapper">
                    
            </div>
        </div>
    );

    return (
        props.onShow && ReactDOM.createPortal(content, document.getElementById("backdrop-hook"))
    );
}

export default Backdrop;