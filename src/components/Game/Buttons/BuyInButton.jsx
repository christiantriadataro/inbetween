import {useState} from "react";

const BuyInButton = () => {
    const [isPressed, setIsPressed] = useState(false);

    const handleClick = () => {
        setIsPressed(!isPressed)
    }
    return (
        <div className="w-[70px] h-[34px] bg-[#818085] rounded-[48px] flex justify-center items-center">
            <div className="w-[68px] h-[32px] black-linear rounded-[48px] flex justify-center items-center">
                <div className="w-[66px] h-[30px] yellow-linear rounded-[48px] flex justify-center items-center shadow-button">
                    <div className="font-bold text-[9px] text-[#AD7D35]">BUY IN</div>
                </div>
            </div>
        </div>
    )
}

export default BuyInButton