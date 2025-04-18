import React, {useState} from 'react'
import {imacModels} from "../data/index.js";

const IMac = () => {
    const [selectedColor, setSelectedColor] = useState("green");
    const [visibleLabel, setVisibleLabel] = useState("Green");

    const getCurrentModel = () => imacModels.find((model) => model.label.toLowerCase() === selectedColor);

    return (
        <div className={`h-full grid grid-cols-2 grid-rows-2 md:gap-4 gap-1 bg-white relative`}>
            <div
                className={`col-span-1 row-span-1 flex flex-col items-center justify-center  p-4 bg-gray-50`}>
                <img
                    src={getCurrentModel().images.front}
                    alt={`Imac`}
                    className={`2xl:max-w-full xl:max-w-48 max-w-48`}
                />
            </div>
            <div
                className={`h-full bg-gray-50 col-span-1 row-span-2 p-4 flex items-center pt-8 justify-start md:justify-center`}>
                <img
                    src={getCurrentModel().images.side}
                    alt={`IMac`}
                    className={`2xl:max-w-full xl:max-w-36 max-w-24`}
                />
            </div>
            <div className={`bg-gray-50 col-span-1 row-span-2 p-4 flex items-center justify-center`}>
                <img
                    src={getCurrentModel().images.back}
                    alt={`IMac`}
                    className={`2xl:max-w-full xl:max-w-36 max-w-24`}
                />
            </div>
            <div
                className={`absolute md:top-1/2 top-3/4 md:right-4 right-12 transform -translate-y-1/2 flex flex-col lg:space-y-2 space-y-1 bg-gray-50`}>
                {imacModels.map((model) => (
                    <div key={Math.random()} className={`flex items-center space-x-2`}>
                        <button
                            style={{backgroundColor: model.bg}}
                            className={`2xl:w-8 md:w-5 w-4 2xl:h-8 md:h-5 h-4 rounded-full flex items-center justify-center bg-[${model.bg}] ${
                                selectedColor === model.label.toLowerCase() && "border-2 border-blue-500"
                            }`}
                            onClick={() => {
                                setSelectedColor(model.label.toLowerCase());
                                setVisibleLabel(model.label)
                            }}
                        ></button>
                        {visibleLabel === model.label && <span className={`text-sm`}>{model.label}</span>}
                    </div>
                ))}
                <button type='button'
                        className={`text-sm mt-4 w-min py-1 px-2 bg-blue-400 text-white cursor-pointer rounded-full`}>
                    Shop
                </button>
            </div>
        </div>
    )
}
export default IMac
