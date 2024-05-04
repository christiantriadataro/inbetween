import Table from "../../assets/svg/tableSVG.svg";
import {useNavigate} from "react-router-dom";

const TableCard = ({pots, seats, tableName, path}) => {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate(path)}
            className="w-[112px] h-[143px] px-[10px] py-[9px] rounded-[11px] bg-cover bg-center flex flex-col justify-between"
            style={{backgroundImage: `url(${Table})`}}>
            <div className="text-left">
                <div className="text-[#E6E5E8] font-medium text-[16px]">{tableName}</div>
                <div className="bg-clip-text text-transparent gray-linear font-bold text-[8.5px]">{pots} Pot</div>
            </div>
            <div
                className="relative rounded-[32px] black-linear w-[70px] h-[13.49px] text-[8px] flex justify-center items-center gap-1">
                <div className="bg-clip-text text-transparent yellow-linear">
                    {seats} seats online
                </div>
                <div>
                    <div className="absolute rounded-full w-1 h-1 green-linear mb-1 animate-ping"></div>
                    <div className="rounded-full w-1 h-1 green-linear mb-1"></div>
                </div>
            </div>
        </button>
    )
}

export default TableCard