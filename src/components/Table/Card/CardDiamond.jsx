import {useState} from "react";


const CardDiamond = ({fill, letter}) => {
    if (fill === undefined) {
        fill = "url(#paint0_linear_203_4070)"
    }
    const includedLetters = ["A", "10", "Q"]
    return (
        <div className="w-[40.46px] h-[56.64px] bg-[#0F0E13] rounded-[4px]">
            <div className="py-[3px] px-[3px] flex flex-col items-start ">
                <div className={`text-[8px] text-[#F24822] font-bold
                 ${includedLetters.includes(fill) ? "" : "pl-[1px]"}`}>{letter}</div>
                <div className={letter === "10" ? "pl-[3px]" : (letter === "Q" || letter === "K" ? "pl-[1.5px]" : "")}>
                    <svg className="w-[6px] h-[6.74px]" viewBox="0 0 24 25" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M0.112792 12.7958L11.9433 25.0019L23.7738 12.7958L11.9433 0.589722L0.112792 12.7958Z"
                              fill={fill}/>
                        <defs>
                            <linearGradient id="paint0_linear_203_4070" x1="11.9433" y1="0.589722" x2="11.9433"
                                            y2="25.0019"
                                            gradientUnits="userSpaceOnUse">
                                <stop stopColor="#EFB155"/>
                                <stop offset="1" stopColor="#EFAB53"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

            </div>
        </div>
    )
}

export default CardDiamond