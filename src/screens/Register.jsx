import DiamondIcon from "../assets/svg/card/diamond-filled.svg"
import SpadeIcon from "../assets/svg/card/spade-filled.svg"
import HeartIcon from "../assets/svg/card/heart-filled.svg"
import ClubIcon from "../assets/svg/card/club-filled.svg"
import Blur from "../assets/svg/blur/blur.png"
const Register = () => {
    return (
        <div className="bg-[#000] flex flex-row justify-center w-full h-screen items-center">
            <div className="bg-[#131217] w-[291.59px] h-[632px]  flex items-center justify-center rounded-[11px]">
                <div
                    className="absolute left-[155.37px] top-[503.97px] w-[208.75px] h-[194.81px] rotate-[50.13deg]">
                    <img src={Blur} alt="" className="w-[208.75px] h-[194.81px]"/>
                </div>
                <div
                    className="relative w-[281.42px] h-[623.19px] border border-[#25242A] rounded-[11px] flex justify-center">
                    <div className="mt-[370px] flex flex-col gap-[16px] items-center">
                        <div
                            className="w-[237px] h-[37px] bg-[#25242A] focus:bg-gradient-180 focus:from-[#B2B2BC] focus:to-[#91909E] rounded-[11px] flex justify-center items-center">
                            <input type="text"
                                   className="bg-[#0F0E13] w-[235px] h-[35px] rounded-[11px] placeholder-[#3B3B46] text-[#E6E5E8] text-[10px] px-[10px]"
                                   placeholder="Username:"/>
                        </div>
                        <div
                            className="w-[237px] h-[37px] bg-[#25242A] focus:bg-gradient-180 focus:from-[#B2B2BC] focus:to-[#91909E]  rounded-[11px] flex justify-center items-center">
                            <input type="password"
                                   className="bg-[#0F0E13] w-[235px] h-[35px] rounded-[11px] placeholder-[#3B3B46] text-[#E6E5E8]  text-[10px] px-[10px]"
                                   placeholder="Password:"/>
                        </div>
                        <div
                            className="w-[237px] h-[37px] bg-[#25242A] focus:bg-gradient-180 focus:from-[#B2B2BC] focus:to-[#91909E]  rounded-[11px] flex justify-center items-center">
                            <input type="password"
                                   className="bg-[#0F0E13] w-[235px] h-[35px] rounded-[11px] placeholder-[#3B3B46] text-[#E6E5E8]  text-[10px] px-[10px]"
                                   placeholder="Confirm Password:"/>
                        </div>
                        <div
                            className="w-[114px] h-[36px] rounded-[48px] bg-gradient-180 from-[#B2B2BC] to-[#91909E] flex justify-center items-center">
                            <div
                                className="w-[112px] h-[34px] rounded-[48px] bg-gradient-180 from-[#24242E] to-[#131217] flex justify-center items-center">
                                <button
                                    className="w-[108px] h-[30px] yellow-linear font-bold rounded-[48px] text-[11px] text-[#131217]">
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute w-[89px] top-[50px] left-[101px] bg-clip-text text-transparent yellow-linear [font-family:'Inter'] font-bold text-[16px] tracking-[0] leading-[24px]">
                        In Between
                    </div>
                    <div
                        className="absolute w-[77.31px] h-[120.7px] left-[41.02px] top-[213.94px] rotate-[-23.69deg] rounded-[8px] bg-gradient-180 from-[#3B3B47] to-[#131217] flex justify-center items-center">
                        <div
                            className="w-[75.95px] h-[119.35px] flex justify-center items-center bg-gradient-180 rounded-[8px] from-[#24242E] to-[#131217]">
                            <img src={DiamondIcon} alt="" className=""/>
                        </div>
                    </div>
                    <div
                        className="absolute w-[77.31px] h-[120.7px] left-[78.63px] top-[197.74px] rotate-[-13.27deg] rounded-[8px] bg-gradient-180 from-[#3B3B47] to-[#131217] flex justify-center items-center">
                        <div
                            className="w-[75.95px] h-[119.35px] flex justify-center items-center bg-gradient-180 rounded-[8px] from-[#24242E] to-[#131217]">
                            <img src={SpadeIcon} alt="" className=""/>
                        </div>
                    </div>
                    <div
                        className="absolute w-[77.31px] h-[120.7px] left-[120.02px] top-[200.75px] rotate-[11.83deg] rounded-[8px] bg-gradient-180 from-[#3B3B47] to-[#131217] flex justify-center items-center">
                        <div
                            className="w-[75.95px] h-[119.35px] flex justify-center items-center bg-gradient-180 rounded-[8px] from-[#24242E] to-[#131217]">
                            <img src={HeartIcon} alt="" className=""/>
                        </div>
                    </div>
                    <div
                        className="absolute w-[77.31px] h-[120.7px] left-[161.09px] top-[217.17px] rotate-[22.77deg] rounded-[8px] bg-gradient-180 from-[#3B3B47] to-[#131217] flex justify-center items-center">
                        <div
                            className="w-[75.95px] h-[119.35px] flex justify-center items-center bg-gradient-180 rounded-[8px] from-[#24242E] to-[#131217]">
                            <img src={ClubIcon} alt="" className=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register