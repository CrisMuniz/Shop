// import React from 'react';
import ReactDOM from "react-dom";

const Modal = ({children}) => {
    return ReactDOM.createPortal(
        <div className=" bg-slate-400 flex justify-center items-center fixed top-20 bootom-0 inset-x-0">
            {children}
        </div>,
        document.getElementById('modal')

    )
}

export default Modal;
