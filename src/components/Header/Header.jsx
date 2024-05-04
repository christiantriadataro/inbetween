import ChipIcon from "../../assets/svg/header/chipIcon.svg";
import TempLogo from "../../assets/svg/header/TempLogo.svg";
import UserIcon from "../../assets/svg/header/userIcon.svg";

const Header = () => {
    return (
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
            <div className="w-[80.91px] bg-[#18171C] rounded-[32px] flex justify-between px-1">
                <div className="flex flex-col justify-center">
                    <div className="text-[#5E5D62] text-[7px]">Account ID</div>
                    <div className="text-[#E6E5E8] text-[8px]">2300</div>
                </div>
                <img src={UserIcon} alt=""/>
            </div>
        </div>
    )
}

export default Header