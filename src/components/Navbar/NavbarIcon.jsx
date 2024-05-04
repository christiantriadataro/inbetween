
const NavbarIcon = ({icon, label, isPressed}) => {
    return (
        <div className="w-[30px] h-[41px]  flex flex-col justify-center items-center">
            <div className="rounded-full w-[29px] h-[29px] flex justify-center items-center">
                <img src={icon} alt="" className=""/>
            </div>
            <div className={`text-[9px] bg-clip-text text-transparent font-bold ${isPressed ? "yellow-linear" : "gray-linear"}`}>{label}</div>
        </div>

    )
}

export default NavbarIcon