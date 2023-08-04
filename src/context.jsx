import { useState, useContext, createContext } from "react";

const GlobalContext = createContext();

export const AppContext = ({children}) => {
    const [isShowSidebar, setisShowSidebar] = useState(false)
    const [isShowModal, setisShowModal] = useState(false)

    const sidebarOpen = () => {
        setisShowSidebar(true)
    }

    const sidebarClose = () => {
        setisShowSidebar(false)
    }

    const modalOpen = () => {
        setisShowModal(true)
    }

    const modalClose = () => {
        setisShowModal(false)
    }

    const value = {
        isShowSidebar,
        isShowModal,
        sidebarOpen,
        sidebarClose,
        modalOpen,
        modalClose
    }

    return <GlobalContext.Provider value={value}>
        {children}
    </GlobalContext.Provider>
}

export const useAppContext = () => {
    return useContext(GlobalContext);
}