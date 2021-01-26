import React from 'react'
import '../styles/modal.scss';

const Modal = ({ open, children, handleClose }) => {
    const showHideClassName = open ? "modal display-block" : "modal display-none"

    return (
        <div className="modal display-block">
            <section className="modal-main">
                {children}
                <button className="close" onClick={handleClose}>x</button>
            </section>
        </div>
    )
}

export default Modal