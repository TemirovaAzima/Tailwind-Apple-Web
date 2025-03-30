import React from 'react'
import {navItems} from "../data/index.js";

const Navbar = ({activePage,handleNavClick}) => {
    return (
        <div className="2xl:w-80 xl:w-52 w-44 h-full bg-blue-600 flex flex-col justify-between pt-5 pl-6 pb-14 md:pb-0">
            <a href={"#"} className={"2xl:text-2xl xl:text-xl font-bold text-white tracking-wider"}>
                Apple Products
            </a>
            <div className={"flex flex-col grow"}>
                {navItems.map((item,index)=>(
                    <a href={"#"} key={Math.random()} className={"xl:w-36 lg:w-34 w-30 flex items-center justify-between my-3.5 text-left cursor-pointer"}
                    onClick={()=>handleNavClick(index)}>
                    <i className={`${item.icon} text-xl text-white`}></i>
                    <span className={"text-sm text-gray-50 mr-auto mx-2.5 tracking-wider"}>{item.label}</span>
                    <i className={`text-lg text-yellow-400 ${activePage===index ? item.activeIcon : item.inactiveIcon}`}></i>
                </a>
                    ))}
            </div>
            <div className={'flex justify-between pr-6 pb-2'}>
                <a href={"#"}>
                    <i className='bx bxl-instagram text-2xl text-white'></i>
                </a>
                <a href={"#"}>
                    <i className='bx bxl-telegram text-2xl text-white'></i>
                </a>
                <a href={"#"}>
                    <i className='bx bxl-youtube text-2xl text-white'></i>
                </a>
            </div>
        </div>
    )
}
export default Navbar
