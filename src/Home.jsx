import {GiHamburgerMenu} from "react-icons/gi";
import { useAppContext } from "./context";

const Home = () => {
    const {sidebarOpen, modalOpen} = useAppContext()
  return (
    <div className="main-container">
        <button onClick={sidebarOpen} className="hamburger-button"><GiHamburgerMenu/></button>
        <button onClick={modalOpen} className="btn">Show Modal</button>
    </div>
  )
}
export default Home