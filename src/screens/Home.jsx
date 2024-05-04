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
import Navbar from "../components/Navbar/Navbar.jsx";
import {useNavigate} from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
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
                    <div className="w-[236.05px] h-[38.42px] flex justify-between mt-6">
                        <div className="w-[78.91px] bg-[#18171C] rounded-[32px] flex justify-between px-1">
                            <img src={ChipIcon} alt=""/>
                            <div className="flex flex-col items-center justify-center pr-2">
                                <div className="text-[#5E5D62] text-[8px]">Chips</div>
                                <div className="text-[#E6E5E8] text-[8px]">2300</div>
                            </div>
                        </div>
                        <div>
                            <img src={TempLogo}/>
                        </div>
                        <div className="w-[83.91px] bg-[#18171C] rounded-[32px] flex justify-between px-1">
                            <div className="pl-2 flex flex-col justify-center">
                                <div className="text-[#5E5D62] text-[7px]">Account ID</div>
                                <div className="text-[#E6E5E8] text-[8px]">20429281</div>
                            </div>
                            <img src={UserIcon} alt=""/>
                        </div>
                    </div>
                    {/*table content*/}
                    <div className="py-8 w-[276px] h-5/6 flex flex-wrap justify-center gap-x-[11px] gap-y-1.5 overflow-auto no-scrollbar">
                        <TableCard pots="5,015" seats="5" tableName="Classic" path="/table" />
                        <TableCard pots="1,500" seats="1" tableName="Auto Bet" />
                        <TableCard pots="4,350" seats="2" tableName="Bot System" />
                        <TableCard pots="50,115" seats="5" tableName="Table 4" />
                        <TableCard pots="1,015" seats="20" tableName="Table 5" />
                        <TableCard pots="3,915" seats="10" tableName="Table 6" />
                        <TableCard pots="3,915" seats="10" tableName="Table 6" />
                        <TableCard pots="3,915" seats="10" tableName="Table 6" />
                        <TableCard pots="3,915" seats="10" tableName="Table 6" />
                        <TableCard pots="3,915" seats="10" tableName="Table 6" />
                    </div>
                </div>
                <Navbar />
            </div>
        </div>
    )
}

export default Home