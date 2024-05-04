import DiamondIcon from "../assets/svg/card/diamond-filled.svg"
import SpadeIcon from "../assets/svg/card/spade-filled.svg"
import HeartIcon from "../assets/svg/card/heart-filled.svg"
import ClubIcon from "../assets/svg/card/club-filled.svg"
import Blur from "../assets/svg/blur/blur.png"

// Navbar
import TableIcon from "../assets/svg/navbar/table-icon.svg"
import HistoryIcon from "../assets/svg/navbar/history.svg"
import NotifyIcon from "../assets/svg/navbar/notify.svg"
import ProfileIcon from "../assets/svg/navbar/profile.svg"
import NavbarIcon from "../components/Navbar/NavbarIcon.jsx";

// Header
import ChipIcon from "../assets/svg/header/chipIcon.svg"
import TempLogo from "../assets/svg/header/TempLogo.svg"
import UserIcon from "../assets/svg/header/userIcon.svg"
// table
import TableCard from "../components/Table/TableCard.jsx";
import Header from "../components/Header/Header.jsx";


// sample image
import SampleImage from "../assets/sampleImage.png"
import MoneyButton from "../components/Game/Buttons/MoneyButton.jsx";
import BuyInButton from "../components/Game/Buttons/BuyInButton.jsx";
import RectangleHeader from "../components/Table/RectangleHeader.jsx";
import CardDiamond from "../components/Table/Card/CardDiamond.jsx";
import GameTable from "../components/GameTable/GameTable.jsx";

const Table = () => {
    return (
        <div className=" bg-[#000] flex flex-row justify-center w-full h-screen items-center">
            <div
                className="bg-clip-content overflow-hidden relative bg-[#131217] w-[291.59px] h-[632px]  flex items-center justify-center rounded-[11px]">
                <div
                    className="absolute left-[55.37px] top-[503.97px] w-[208.75px] h-[194.81px] rotate-[50.13deg]">
                    <img src={Blur} alt="" className="w-[208.75px] h-[194.81px]"/>
                </div>
                <div
                    className="relative w-[281.42px] h-[623.19px] border border-[#25242A] rounded-[11px] flex flex-col items-center">
                        {/*header*/}
                    <Header />
                    {/*table content*/}
                    <div
                        className="py-8 w-[276px] h-5/6 flex flex-col items-center gap-y-1.5 overflow-auto no-scrollbar">
                        {/*broadcast*/}
                        <div className="w-[235.04px] h-[161.27px] rounded-lg black-linear">
                            <div className="h-[30.81px] black-linear flex justify-center items-center rounded-[8px]">
                                <div className="bg-clip-text text-transparent yellow-linear font-medium  text-[8px]">Broadcast</div>
                            </div>
                            <div className="flex justify-center items-center  rounded-[8px] p-[3px] ">
                                <img className="" src={SampleImage} />
                            </div>
                        </div>
                        {/*total pot*/}
                        <div
                            className="w-[235.13px] h-[131px] rounded-lg py-[10px] black-linear flex flex-col items-center gap-1.5">
                            <RectangleHeader title="Total Pot">
                                <div
                                    className="bg-clip-text text-transparent font-bold font-['Roboto'] text-[22px] yellow-linear">350,000
                                </div>
                                <div className="flex justify-between items-center gap-1">
                                    <MoneyButton label="+ 50"/>
                                    <MoneyButton label="+ 75"/>
                                    <MoneyButton label="+ 100"/>
                                    <MoneyButton label="Custom"/>
                                </div>
                            </RectangleHeader>
                            <div>
                                <BuyInButton/>
                            </div>
                        </div>
                        {/*current cards*/}
                        <div className="w-[236px] h-[120.02px] black-linear rounded-lg flex justify-center pt-2">
                            <div
                                className="relative w-[216.32px] h-[70.54px] border border-[#818085] rounded-lg black-linear flex flex-col items-center">
                                <div className="absolute top-[-6px] px-1 font-bold bg-[#22222C]">
                                    <div
                                        className="text-[8px] font-bold bg-clip-text text-transparent yellow-linear uppercase">Current Cards
                                    </div>
                                </div>
                                <div className="pt-2 flex flex-row gap-2 items-center">
                                    <CardDiamond fill="#F24822" letter="10"/>
                                    <CardDiamond fill="#F24822" letter="Q"/>
                                    <CardDiamond fill="#F24822" letter="J"/>
                                    <CardDiamond fill="#F24822" letter="K"/>
                                </div>
                                <div className="mt-2 bg-clip-text text-transparent font-bold yellow-linear text-[11px] self-start">CURRENT SEAT: SEAT # 5</div>
                            </div>
                        </div>
                        {/*table*/}
                        <GameTable />

                    </div>
                </div>

                <div
                    className="absolute bg-[#18171C] w-[290px] h-[56.69px] bottom-0  flex items-center justify-between px-[34px] ">
                    <NavbarIcon icon={TableIcon} label="Tables" isPressed={true}/>
                    <NavbarIcon icon={ProfileIcon} label="Profile" isPressed={false}/>
                    <NavbarIcon icon={NotifyIcon} label="Notify" isPressed={false}/>
                    <NavbarIcon icon={HistoryIcon} label="History" isPressed={false}/>
                </div>
            </div>
        </div>
    )
}

export default Table