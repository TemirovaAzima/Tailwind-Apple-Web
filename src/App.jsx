import Controls from "./components/Controls.jsx";
import {useEffect, useState} from "react";
import Navbar from "./components/Navbar.jsx";
import Iphone from "./components/Iphone.jsx";
import Macbook from "./components/Macbook.jsx";
import Watch from "./components/Watch.jsx";
import PageTransition from "./components/PageTransition.jsx";
import IMac from "./components/IMac.jsx";
import Home from "./components/Home.jsx";

export const App = () => {
    const [frameZoom, setFrameZoom] = useState(false);
    const [activePage, setActivePage] = useState(0);
    const [isLgScreen, setIsLgScreen] = useState(window.innerWidth > 1024);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLgScreen(window.innerWidth >=1024)
            if (window.innerWidth < 1024) {
                setFrameZoom(true);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[]);

    const toggleZoom = () => {
        if(isLgScreen) {
            setFrameZoom(!frameZoom);
        }
    };

    const resetPage = () => {
        setActivePage(0);
    }

    const handleNavClick = (pageIndex) => {
        setActivePage(pageIndex);
    };

    const toggleNavbar = () =>{
        setIsNavbarOpen(!isNavbarOpen);
    }

    return (
        <div className="w-full h-screen grid place-items-center">
            <div className={`${frameZoom ? 'min-w-[97vw] min-h-[97vh]' : 'min-w-[70vw] min-h-[85vh]'}
            w-[70vw] h-[85vh]  max-w-[90vw] max-h-[90vh]
            border border-gray-300 rounded-2xl resize overflow-auto relative
            transition-all duration-300 flex
                "`}
            >
                <Controls toggleZoom={toggleZoom} frameZoom={frameZoom} resetPage={resetPage} activePage={activePage}/>
                <Navbar activePage={activePage} handleNavClick={handleNavClick} isNavbarOpen={isNavbarOpen} toggleNavbar={toggleNavbar}/>
                <div className={'grow'}>
                    <PageTransition activePage={activePage}>
                        <Home onNavigate={handleNavClick}/>
                        <Iphone/>
                        <Macbook/>
                        <Watch/>
                        <IMac/>
                    </PageTransition>
                </div>
            </div>
        </div>
    )
}

