import MoneyButton from "../Game/Buttons/MoneyButton.jsx";

const RectangleHeader = ({children, title}) => {
    return (
        <div
            className="relative w-[216.32px] h-[70.54px] border border-[#818085] rounded-lg black-linear flex flex-col items-center">
            <div className="absolute top-[-6px] px-1 font-bold bg-[#22222C]">
                <div className="text-[8px] bg-clip-text text-transparent yellow-linear uppercase">{title}
                </div>
            </div>
            <div className="pt-1 flex flex-col items-center">
                {children}
            </div>
        </div>
    )
}

export default RectangleHeader