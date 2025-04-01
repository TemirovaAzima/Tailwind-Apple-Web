import React, {useState} from 'react'
import {macbookModels} from "../data/index.js";

const Macbook = () => {
    const [selectedChip, setSelectedChip] = useState(0);
    const [selectedColor, setSelectedColor] = useState(0);

    const currentMb = macbookModels[selectedChip];
    const currentColor = currentMb.colors[selectedColor];

    const handleSelectedChip = (chip) => {
        setSelectedChip(chip);
        setSelectedColor(0);
    }

    return (
        <div className={'flex flex-col justify-around items-center bg-white p-8'}>
            <h1 className={'font-semibold 2xl:text-4xl xl:text-3xl md:text-2xl text-sm text-gray-800 mb-5'}>
                Choose your new MacBook Air
            </h1>
            <div className={`flex`}>
                {macbookModels.map((macbook, index) => (
                    <button
                        className={`2xl:w-36 xl:w-26 w-28 2xl:h-18 md:h-12 h-12 flex flex-col items-center justify-between border ${
                            index === 0 ? 'rounded-l-xl' : 'rounded-r-xl'
                        } 
                        ${selectedChip === index ? 'border-2 border-blue-400' : 'border-gray-800'}`}
                        onClick={() => handleSelectedChip(index)}>
                    <span className={`font-bold  2xl:text-lg xl:text-sm text-sm text-gray-800`}>
                     With {macbook.chip} chip
                    </span>
                        <span className={`2xl:text-base xl:text-sm text-xs text-gray-600`}>
                    {macbook.price}
                    </span>
                    </button>
                ))}
            </div>
            <div className={`flex flex-col items-center md:items-start`}>
                <div className={`w-80 h-auto  2xl:mb-0`}>
                    <img
                        src={currentColor.img}
                        alt={`Macbook Air with ${currentMb.chip}`}
                        className={`2xl:w-72 xl:w-52 w-48 2xl:mt-0 sm:mt-6  h-full object-contain`}/>
                </div>
                <span className={`2xl:text-lg xl:text-sm font-medium text-gray-800  text-center md:text-left`}>
                        {currentColor.label}
                    </span>
                <div className={`flex space-x-2 mb-3 md:text-left justify-center md:justify-start`}>
                    {currentMb.colors.map((color, index) => (
                        <button
                            key={Math.random()}
                            style={{backgroundColor: color.bg}}
                            className={`2xl:w-6 sm:w-5 border w-4 2xl:h-6 sm:h-5 h-4 bg-[${color.bg}] rounded-full hover:border-blue-500
                              ${selectedColor === index ? 'border-2 border-blue-400' : 'border-transparent'}
                              `}
                            onClick={() => setSelectedColor(index)}
                        ></button>
                    ))}
                </div>
                <img
                    src={currentMb.icon} alt={`Apple ${currentMb.chip} Chip`} className={`w-12 h-12 2xl:mb-2 xl:mb-2`}
                />
                <div className={`2xl:mb-4  xl:mb-2 text-center md:text-left`}>
                    {currentMb.specs.map((spec) => (
                        <p
                            key={Math.random()}
                            className={`2xl:text-lg xl:text-base font-semibold text-gray-800 mb-0.5`}>
                            {spec}
                        </p>
                    ))}
                </div>
                <button className={`min-w-min text-sm py-1  px-3 bg-blue-400 rounded-full text-white mt-4 md:mt-0`}>
                    Buy
                </button>
            </div>

        </div>
    )
}
export default Macbook
