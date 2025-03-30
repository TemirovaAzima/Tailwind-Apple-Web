import Controls from "./components/Controls.jsx";
import {useState} from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";

export const App = () => {
    const [frameZoom, setFrameZoom] = useState(false);
    const [activePage, setActivePage] = useState(0);

    const toggleZoom = () => {
        setFrameZoom(!frameZoom);
    };

    const handleNavClick = (pageIndex) =>{
        setActivePage(pageIndex)
    };

    return (
        <div className="w-full h-screen grid place-items-center">
            <div className={`${frameZoom ? 'min-w-[97vw] min-h-[97vh]' : 'min-w-[70vw] min-h-[85vh]'}
            w-[70vw] h-[85vh]  max-w-[90vw] max-h-[90vh] 
            border border-gray-300 rounded-2xl resize overflow-auto relative
            transition-all duration-300 flex 
                "`}
            >
                <Controls toggleZoom={toggleZoom} frameZoom={frameZoom}/>
                <Navbar activePage={activePage} handleNavClick={handleNavClick}/>
                <div className={'grow'}>
                    <Home/>
                </div>
            </div>
        </div>
    )
}