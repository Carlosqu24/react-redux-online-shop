import React from 'react'
import ReactDOM from 'react-dom';
import './Modal.css'

export const Modal = ({ isOpen, closeModal, title, children }) => {

 return ReactDOM.createPortal(
  <div className={`modal ${isOpen && 'is-open'}`}>
   <div className="modal-container">
    <div className="modal-header">
     <h3>{title}</h3>
    </div>
    <button 
     className="close-button"
     onClick={() => closeModal()}
    >X</button>
    <div className="modal-body">
     {children}
    </div>
   </div>
  </div>,
  document.getElementById('modal'))
}
