import NavbarIcon from "./NavbarIcon.jsx";
import TableIcon from "../../assets/svg/navbar/table-icon.svg";
import ProfileIcon from "../../assets/svg/navbar/profile.svg";
import NotifyIcon from "../../assets/svg/navbar/notify.svg";
import HistoryIcon from "../../assets/svg/navbar/history.svg";

const Navbar = () => {
    return (
        <div
            className="absolute bg-[#18171C] w-[290px] h-[56.69px] bottom-0  flex items-center justify-between px-[34px] ">
            <NavbarIcon icon={TableIcon} label="Tables" isPressed={true}/>
            <NavbarIcon icon={ProfileIcon} label="Profile" isPressed={false}/>
            <NavbarIcon icon={NotifyIcon} label="Notify" isPressed={false}/>
            <NavbarIcon icon={HistoryIcon} label="History" isPressed={false}/>
        </div>
    )
}

export default Navbar