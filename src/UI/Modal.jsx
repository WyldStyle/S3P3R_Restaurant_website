import { Fragment } from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = ({})=> {
  return <div>{classes.backdrop}</div>
}

const ModalOverlay = ({children}) =>{
  return (
    <div>
      <div>
        {children}
      </div>
    </div>
  )
}

const portalAddress = document.querySelector('.overlays')
console.log(portalAddress);
const Modal = (props)=>{
  return <Fragment>
    {/* <Backdrop></Backdrop>
    <ModalOverlay>{props.children}</ModalOverlay> 
    */
    }
    {ReactDOM.createPortal(<Backdrop></Backdrop>,portalAddress)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalAddress)}
  </Fragment>
}

export default Modal