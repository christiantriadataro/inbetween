import DiamondIcon from "../assets/svg/card/diamond-filled.svg"
import SpadeIcon from "../assets/svg/card/spade-filled.svg"
import HeartIcon from "../assets/svg/card/heart-filled.svg"
import ClubIcon from "../assets/svg/card/club-filled.svg"
import Blur from "../assets/svg/blur/blur.png"
import CardDiamond from "../components/Card/CardDiamond.jsx";
import CardSpade from "../components/Card/CardSpade.jsx";
import CardHeart from "../components/Card/CardHeart.jsx";
import CardClub from "../components/Card/CardClub.jsx";
import {useEffect} from "react";
const Login = () => {

    useEffect(() => {
        setTimeout(() => {

        }, )
    }, []);

    return (
        <div className="bg-[#000] flex flex-row justify-center w-full h-screen items-center">
            <div className="relative bg-[#131217] w-[291.59px] h-[632px] overflow-hidden flex items-center justify-center rounded-[11px]">
                <div
                    className="absolute left-[55.37px] top-[503.97px] w-[208.75px] h-[194.81px] rotate-[50.13deg]">
                    <img src={Blur} alt="" className="w-[208.75px] h-[194.81px]"/>
                </div>
                <div
                    className="relative w-[281.42px] h-[623.19px] border border-[#25242A] rounded-[11px] flex justify-center">
                    <div className="mt-[410px] flex flex-col gap-[16px] items-center">
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
                            className="w-[114px] h-[36px] rounded-[48px] bg-gradient-180 from-[#B2B2BC] to-[#91909E] flex justify-center items-center">
                            <div
                                className="w-[112px] h-[34px] rounded-[48px] bg-gradient-180 from-[#24242E] to-[#131217] flex justify-center items-center">
                                <button
                                    className="w-[108px] h-[30px] yellow-linear font-bold rounded-[48px] text-[11px] text-[#131217]">
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute w-[89px] top-[50px] left-[101px] bg-clip-text text-transparent yellow-linear [font-family:'Inter'] font-bold text-[16px] tracking-[0] leading-[24px]">
                        In Between
                    </div>
                    <CardDiamond canTransition={true} className={`absolute w-[77.3px] h-[120.7px] left-[100.86px] top-[242.76px] transition duration-1000  translate-x-[-55.77px] translate-y-[5.84px] rotate-[-23.69deg]`}/>
                    <CardSpade  canTransition={true}  className={`absolute w-[77.3px] h-[120.7px] left-[92.22px] top-[243.78px] rotate-[-8.22deg] transition duration-[1000ms] translate-x-[-5.52px] translate-y-[-8.62px] rotate-[-13.27deg]`}/>
                    <CardHeart  canTransition={true}  className={`absolute w-[77.3px] h-[120.7px] left-[107.87px] top-[242.29px] rotate-[9.86deg] transition duration-[1000ms] translate-x-[16.22px] translate-y-[-7.12px]`}/>
                <CardClub  canTransition={true}  className={`absolute w-[77.3px] h-[120.7px] left-[101.54px] top-[238.7px] transition duration-[1000ms] translate-x-[63.62px] translate-y-[8.13px] rotate-[22.77deg]`}/>
                </div>
            </div>
        </div>
    )
}

export default Login