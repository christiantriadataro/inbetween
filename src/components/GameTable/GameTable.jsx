import React from "react"
import SmallDiamondIcon from "./GameTableObjects/diamond.svg"
import SmallSpadeIcon from "./GameTableObjects/spade.svg"
import SmallHeartIcon from "./GameTableObjects/heart.svg"
import SmallClubIcon from "./GameTableObjects/club.svg"
const GameTable = () => {
    const [firstTableIsPressed, setFirstTableIsPressed] = React.useState(false);
    const [secondTableIsPressed, setSecondTableIsPressed] = React.useState(false);
    const handleFirstTable = () => {
        if (firstTableIsPressed === secondTableIsPressed) {
            setFirstTableIsPressed(!firstTableIsPressed)
        } else if (firstTableIsPressed) {
            setFirstTableIsPressed(!firstTableIsPressed)
        }
        else if (firstTableIsPressed !== secondTableIsPressed) {
            setSecondTableIsPressed(!secondTableIsPressed)
            setFirstTableIsPressed(!firstTableIsPressed)
        } else {
            setFirstTableIsPressed(!firstTableIsPressed)
        }
    }
    const handleSecondTable = () => {
        if (firstTableIsPressed === secondTableIsPressed) {
            setSecondTableIsPressed(!secondTableIsPressed)
        } else if (secondTableIsPressed) {
            setSecondTableIsPressed(!secondTableIsPressed)
        }  else if (firstTableIsPressed !== secondTableIsPressed) {
            setSecondTableIsPressed(!secondTableIsPressed)
            setFirstTableIsPressed(!firstTableIsPressed)
        } else {
            setSecondTableIsPressed(!secondTableIsPressed)
        }
    }

    return (
        <div>
            <div className={`w-[236px] h-[40px] rounded-lg black-linear flex items-center pl-[10px] ${firstTableIsPressed || secondTableIsPressed ? "mt-[25px]" : ""}`}>
                <button
                    className={`text-[8px] h-[30px] w-[54px] font-bold  rounded-xl ${firstTableIsPressed ? "bg-[#0F0E13]" : ""}`}
                    onClick={handleFirstTable}>
                    <div
                        className={`bg-clip-text text-transparent uppercase ${firstTableIsPressed ? "yellow-linear" : "gray-linear"}`}>Table
                        1
                    </div>
                </button>
                <button
                    className={`text-[8px] h-[30px] w-[54px] font-bold  rounded-xl ${secondTableIsPressed ? "bg-[#0F0E13]" : ""}`}
                    onClick={handleSecondTable}>
                    <div
                        className={`bg-clip-text text-transparent uppercase ${secondTableIsPressed ? "yellow-linear" : "gray-linear"}`}>Table
                        2
                    </div>
                </button>
            </div>
            {/*1st table*/}
            <div className={`black-linear ${firstTableIsPressed ? "" : "hidden"}`}>
                <div className="h-[32px] black-linear">
                    <div
                        className="bg-clip-text text-transparent yellow-linear h-[30px] text-[8px] font-bold flex justify-between items-center px-[10px] gap-[8px]">
                        <div className="w-[31px] text-center">GAME</div>
                        <div className="w-[27px] text-center">DEAL</div>
                        <div className="w-[48px] truncate ">INBETWEEN</div>
                        <div className="w-[52px] truncate">OUTBEYOND</div>
                        <div className="w-[25px] text-center">PAIR</div>
                    </div>
                    <div className="h-[1px] yellow-linear"></div>
                </div>
                <div className="black-linear">
                    <div className="h-[172px] overflow-y-auto no-scrollbar">
                        <div
                            className="h-[32px] flex justify-between items-center px-[10px] text-[8px] gap-[8px] bg-clip-text text-transparent gray-linear">
                            <div className="w-[31px] text-center">2</div>
                            <div className="w-[27px] text-center">1</div>
                            <div className="w-[48px] flex justify-center">
                                <div className="rounded-full w-[12px] h-[12px] green-linear"></div>
                            </div>
                            <div className="w-[48px] flex justify-center">
                                <div className="rounded-full w-[12px] h-[12px] blue-linear"></div>
                            </div>
                            <div className="w-[25px] text-[#F24822] font-bold text-center">LOW</div>
                        </div>
                        <div className="h-[1px] yellow-linear"></div>
                        <div
                            className="h-[32px] flex justify-between items-center px-[10px] text-[8px] gap-[8px] bg-clip-text text-transparent gray-linear">
                            <div className="w-[31px] text-center">2</div>
                            <div className="w-[27px] text-center">1</div>
                            <div className="w-[48px] flex justify-center">
                                <div className="rounded-full w-[12px] h-[12px] green-linear"></div>
                            </div>
                            <div className="w-[48px] flex justify-center">
                                <div className="rounded-full w-[12px] h-[12px] blue-linear"></div>
                            </div>
                            <div className="w-[25px] text-[#F24822] font-bold text-center">LOW</div>
                        </div>
                        <div className="h-[1px] yellow-linear"></div>
                        <div
                            className="h-[32px] flex justify-between items-center px-[10px] text-[8px] gap-[8px] bg-clip-text text-transparent gray-linear">
                            <div className="w-[31px] text-center">2</div>
                            <div className="w-[27px] text-center">1</div>
                            <div className="w-[48px] flex justify-center">
                                <div className="rounded-full w-[12px] h-[12px] green-linear"></div>
                            </div>
                            <div className="w-[48px] flex justify-center">
                                <div className="rounded-full w-[12px] h-[12px] blue-linear"></div>
                            </div>
                            <div className="w-[25px] text-[#F24822] font-bold text-center">LOW</div>
                        </div>
                        <div className="h-[1px] yellow-linear"></div>
                        <div
                            className="h-[32px] flex justify-between items-center px-[10px] text-[8px] gap-[8px] bg-clip-text text-transparent gray-linear">
                            <div className="w-[31px] text-center">2</div>
                            <div className="w-[27px] text-center">1</div>
                            <div className="w-[48px] flex justify-center">
                                <div className="rounded-full w-[12px] h-[12px] green-linear"></div>
                            </div>
                            <div className="w-[48px] flex justify-center">
                                <div className="rounded-full w-[12px] h-[12px] blue-linear"></div>
                            </div>
                            <div className="w-[25px] text-[#F24822] font-bold text-center">LOW</div>
                        </div>
                        <div className="h-[1px] yellow-linear"></div>
                        <div
                            className="h-[32px] flex justify-between items-center px-[10px] text-[8px] gap-[8px] bg-clip-text text-transparent gray-linear">
                            <div className="w-[31px] text-center">2</div>
                            <div className="w-[27px] text-center">1</div>
                            <div className="w-[48px] flex justify-center">
                                <div className="rounded-full w-[12px] h-[12px] green-linear"></div>
                            </div>
                            <div className="w-[48px] flex justify-center">
                                <div className="rounded-full w-[12px] h-[12px] blue-linear"></div>
                            </div>
                            <div className="w-[25px] text-[#F24822] font-bold text-center">LOW</div>
                        </div>
                        <div className="h-[1px] yellow-linear"></div>
                        <div
                            className="h-[32px] flex justify-between items-center px-[10px] text-[8px] gap-[8px] bg-clip-text text-transparent gray-linear">
                            <div className="w-[31px] text-center">2</div>
                            <div className="w-[27px] text-center">1</div>
                            <div className="w-[48px] flex justify-center">
                                <div className="rounded-full w-[12px] h-[12px] green-linear"></div>
                            </div>
                            <div className="w-[48px] flex justify-center">
                                <div className="rounded-full w-[12px] h-[12px] blue-linear"></div>
                            </div>
                            <div className="w-[25px] text-[#F24822] font-bold text-center">LOW</div>
                        </div>
                        <div className="h-[1px] yellow-linear"></div>
                        <div
                            className="h-[32px] flex justify-between items-center px-[10px] text-[8px] gap-[8px] bg-clip-text text-transparent gray-linear">
                            <div className="w-[31px] text-center">2</div>
                            <div className="w-[27px] text-center">1</div>
                            <div className="w-[48px] flex justify-center">
                                <div className="rounded-full w-[12px] h-[12px] green-linear"></div>
                            </div>
                            <div className="w-[48px] flex justify-center">
                                <div className="rounded-full w-[12px] h-[12px] blue-linear"></div>
                            </div>
                            <div className="w-[25px] text-[#F24822] font-bold text-center">LOW</div>
                        </div>
                        <div className="h-[1px] yellow-linear"></div>
                        <div
                            className="h-[32px] flex justify-between items-center px-[10px] text-[8px] gap-[8px] bg-clip-text text-transparent gray-linear">
                            <div className="w-[31px] text-center">2</div>
                            <div className="w-[27px] text-center">1</div>
                            <div className="w-[48px] flex justify-center">
                                <div className="rounded-full w-[12px] h-[12px] green-linear"></div>
                            </div>
                            <div className="w-[48px] flex justify-center">
                                <div className="rounded-full w-[12px] h-[12px] blue-linear"></div>
                            </div>
                            <div className="w-[25px] text-[#F24822] font-bold text-center">LOW</div>
                        </div>
                        <div className="h-[1px] yellow-linear"></div>
                    </div>
                </div>
            </div>
            {/*second table*/}
            <div className={`black-linear ${secondTableIsPressed ? "" : "hidden"}`}>
                <div className="h-[32px] black-linear">
                    <div
                        className="bg-clip-text text-transparent yellow-linear h-[30px] text-[8px] font-bold flex justify-between items-center px-[10px] gap-[8px]">
                        <div className="w-[31px] text-center">GAME</div>
                        <div className="w-[27px] text-center">DEAL</div>
                        <div className="w-[40px] truncate">1ST CARD</div>
                        <div className="w-[42px] truncate">2ND CARD</div>
                        <div className="w-[44px] text-center truncate">MAV CARD</div>
                    </div>
                    <div className="h-[1px] yellow-linear"></div>
                </div>
                <div className="black-linear">
                    <div className="h-[172px] overflow-y-auto no-scrollbar">
                        <div
                            className="h-[32px] flex justify-between items-center px-[10px] text-[8px] gap-[8px] bg-clip-text text-transparent gray-linear">
                            <div className="w-[31px] text-center">2</div>
                            <div className="w-[27px] text-center">1</div>
                            <div className="w-[40px] flex justify-center gap-1">
                                <div className="font-['Roboto'] font-bold">A</div>
                                <img src={SmallDiamondIcon} alt=""/>
                            </div>
                            <div className="w-[42px] flex justify-center gap-1">
                                <div className="font-['Roboto'] font-bold">K</div>
                                <img src={SmallHeartIcon} alt=""/>
                            </div>
                            <div className="w-[42px] flex justify-center gap-1">
                                <div className="font-['Roboto'] font-bold">Q</div>
                                <img src={SmallSpadeIcon} alt=""/>
                            </div>
                        </div>
                        <div className="h-[1px] yellow-linear"></div>
                        <div
                            className="h-[32px] flex justify-between items-center px-[10px] text-[8px] gap-[8px] bg-clip-text text-transparent gray-linear">
                            <div className="w-[31px] text-center">2</div>
                            <div className="w-[27px] text-center">1</div>
                            <div className="w-[40px] flex justify-center gap-1">
                                <div className="font-['Roboto'] font-bold">A</div>
                                <img src={SmallDiamondIcon} alt=""/>
                            </div>
                            <div className="w-[42px] flex justify-center gap-1">
                                <div className="font-['Roboto'] font-bold">K</div>
                                <img src={SmallHeartIcon} alt=""/>
                            </div>
                            <div className="w-[42px] flex justify-center gap-1">
                                <div className="font-['Roboto'] font-bold">Q</div>
                                <img src={SmallSpadeIcon} alt=""/>
                            </div>
                        </div>
                        <div className="h-[1px] yellow-linear"></div>
                        <div
                            className="h-[32px] flex justify-between items-center px-[10px] text-[8px] gap-[8px] bg-clip-text text-transparent gray-linear">
                            <div className="w-[31px] text-center">2</div>
                            <div className="w-[27px] text-center">1</div>
                            <div className="w-[40px] flex justify-center gap-1">
                                <div className="font-['Roboto'] font-bold">A</div>
                                <img src={SmallDiamondIcon} alt=""/>
                            </div>
                            <div className="w-[42px] flex justify-center gap-1">
                                <div className="font-['Roboto'] font-bold">K</div>
                                <img src={SmallHeartIcon} alt=""/>
                            </div>
                            <div className="w-[42px] flex justify-center gap-1">
                                <div className="font-['Roboto'] font-bold">Q</div>
                                <img src={SmallSpadeIcon} alt=""/>
                            </div>
                        </div>
                        <div className="h-[1px] yellow-linear"></div>
                        <div
                            className="h-[32px] flex justify-between items-center px-[10px] text-[8px] gap-[8px] bg-clip-text text-transparent gray-linear">
                            <div className="w-[31px] text-center">2</div>
                            <div className="w-[27px] text-center">1</div>
                            <div className="w-[40px] flex justify-center gap-1">
                                <div className="font-['Roboto'] font-bold">A</div>
                                <img src={SmallDiamondIcon} alt=""/>
                            </div>
                            <div className="w-[42px] flex justify-center gap-1">
                                <div className="font-['Roboto'] font-bold">K</div>
                                <img src={SmallHeartIcon} alt=""/>
                            </div>
                            <div className="w-[42px] flex justify-center gap-1">
                                <div className="font-['Roboto'] font-bold">Q</div>
                                <img src={SmallSpadeIcon} alt=""/>
                            </div>
                        </div>
                        <div className="h-[1px] yellow-linear"></div>
                        <div
                            className="h-[32px] flex justify-between items-center px-[10px] text-[8px] gap-[8px] bg-clip-text text-transparent gray-linear">
                            <div className="w-[31px] text-center">2</div>
                            <div className="w-[27px] text-center">1</div>
                            <div className="w-[40px] flex justify-center gap-1">
                                <div className="font-['Roboto'] font-bold">A</div>
                                <img src={SmallDiamondIcon} alt=""/>
                            </div>
                            <div className="w-[42px] flex justify-center gap-1">
                                <div className="font-['Roboto'] font-bold">K</div>
                                <img src={SmallHeartIcon} alt=""/>
                            </div>
                            <div className="w-[42px] flex justify-center gap-1">
                                <div className="font-['Roboto'] font-bold">Q</div>
                                <img src={SmallSpadeIcon} alt=""/>
                            </div>
                        </div>
                        <div className="h-[1px] yellow-linear"></div>
                        <div
                            className="h-[32px] flex justify-between items-center px-[10px] text-[8px] gap-[8px] bg-clip-text text-transparent gray-linear">
                            <div className="w-[31px] text-center">2</div>
                            <div className="w-[27px] text-center">1</div>
                            <div className="w-[40px] flex justify-center gap-1">
                                <div className="font-['Roboto'] font-bold">A</div>
                                <img src={SmallDiamondIcon} alt=""/>
                            </div>
                            <div className="w-[42px] flex justify-center gap-1">
                                <div className="font-['Roboto'] font-bold">K</div>
                                <img src={SmallHeartIcon} alt=""/>
                            </div>
                            <div className="w-[42px] flex justify-center gap-1">
                                <div className="font-['Roboto'] font-bold">Q</div>
                                <img src={SmallSpadeIcon} alt=""/>
                            </div>
                        </div>
                        <div className="h-[1px] yellow-linear"></div>
                        <div
                            className="h-[32px] flex justify-between items-center px-[10px] text-[8px] gap-[8px] bg-clip-text text-transparent gray-linear">
                            <div className="w-[31px] text-center">2</div>
                            <div className="w-[27px] text-center">1</div>
                            <div className="w-[40px] flex justify-center gap-1">
                                <div className="font-['Roboto'] font-bold">A</div>
                                <img src={SmallDiamondIcon} alt=""/>
                            </div>
                            <div className="w-[42px] flex justify-center gap-1">
                                <div className="font-['Roboto'] font-bold">K</div>
                                <img src={SmallHeartIcon} alt=""/>
                            </div>
                            <div className="w-[42px] flex justify-center gap-1">
                                <div className="font-['Roboto'] font-bold">Q</div>
                                <img src={SmallSpadeIcon} alt=""/>
                            </div>
                        </div>
                        <div className="h-[1px] yellow-linear"></div>
                        <div
                            className="h-[32px] flex justify-between items-center px-[10px] text-[8px] gap-[8px] bg-clip-text text-transparent gray-linear">
                            <div className="w-[31px] text-center">2</div>
                            <div className="w-[27px] text-center">1</div>
                            <div className="w-[40px] flex justify-center gap-1">
                                <div className="font-['Roboto'] font-bold">A</div>
                                <img src={SmallDiamondIcon} alt=""/>
                            </div>
                            <div className="w-[42px] flex justify-center gap-1">
                                <div className="font-['Roboto'] font-bold">K</div>
                                <img src={SmallHeartIcon} alt=""/>
                            </div>
                            <div className="w-[42px] flex justify-center gap-1">
                                <div className="font-['Roboto'] font-bold">Q</div>
                                <img src={SmallSpadeIcon} alt=""/>
                            </div>
                        </div>
                        <div className="h-[1px] yellow-linear"></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GameTable