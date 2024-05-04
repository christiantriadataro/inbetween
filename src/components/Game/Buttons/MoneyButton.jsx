import {useState, useEffect} from 'react'
const MoneyButton = ({label}) => {
    const [isPressed, setIsPressed] = useState(false);
    const handleClick = () => {
        setIsPressed(!isPressed);
    }
    return (
        <div onClick={handleClick} className={`w-[49px] h-[28px] rounded-[48px] flex justify-center items-center ${isPressed ? 'yellow-linear-button' : 'bg-[#3B3B46]'}`}>
            <div className={`w-[45px] h-[24px] rounded-[48px] flex justify-center items-center ${isPressed ? 'bg-[#0F0E13]' : 'shadow-button black-linear'}`}>
                <div className={`font-['Roboto'] text-[8.5px] ${isPressed ? "bg-clip-text text-transparent yellow-linear-button font-black" : "text-[#818085] font-bold"}`}>{label}</div>
            </div>
        </div>
    )
}

export default MoneyButton