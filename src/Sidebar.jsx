import {links, social} from "./data";
import {IoMdClose} from "react-icons/io";
import logo from "./logo.svg";
import { useAppContext } from "./context";

const Sidebar = () => {
    const {isShowSidebar, sidebarClose} = useAppContext();

  return (
    <div className={isShowSidebar ? "sidebar-container sidebar-show" : "sidebar-container"}>
        <div className="logo-container">
            <img className="sidebar-logo" src={logo} alt="sidebar-logo" />
            <button onClick={sidebarClose} className="sidebar-close"><IoMdClose/></button>
        </div>
        
        <ul className="links-container">
            {links.map(link => {
                const {id, url, text, icon} = link;

                return <li key={id}><a className="link" href={url}>{icon}{text}</a></li>
            })}
        </ul>

        <ul className="social-container">
            {social.map(socialIcon => {
                const {id, url, icon} = socialIcon;

                return <li key={id}><a className="social" href={url}>{icon}</a></li>
            })}
        </ul>
    </div>
  )
}
export default Sidebar