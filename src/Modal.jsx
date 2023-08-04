import {IoMdClose} from "react-icons/io";
import { useAppContext } from "./context";


const Modal = () => {
    const {isShowModal, modalClose} = useAppContext()

  return (
    <div className={isShowModal ? "modal-overlay show-modal" : "modal-overlay"}>
        <div className="modal-container">
            <h3>Hi! My Name Is Astro.</h3>
            <button onClick={modalClose} className="modal-close"><IoMdClose/></button>
        </div>
    </div>
  )
}
export default Modal