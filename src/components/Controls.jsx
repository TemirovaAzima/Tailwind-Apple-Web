import React from 'react'

const Controls = ({frameZoom,toggleZoom,resetPage,activePage}) => {
    return (
        <div className="absolute top-3 right-3 flex space-x-2 z-1">
            <button className="text-2xl text-blue-500 cursor-pointer" onClick={toggleZoom}>
                <i className={frameZoom ? 'bx bxs-zoom-out': 'bx bxs-zoom-in'}></i>
            </button>
            <button className={`text-2xl ${activePage ===0 ? 'text-pink-200 cursor-not-allowed': 'text-blue-500 cursor-pointer'}`} onClick={resetPage}>
                <i className="bx bx-x-circle"></i>
            </button>
        </div>
    )
}
export default Controls
