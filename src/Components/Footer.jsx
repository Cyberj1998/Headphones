import React from "react";
import logo from './Assets/logo.png'
import instagram from './Assets/instagram.png'
import telegram from './Assets/telegram.png'
import apple from './Assets/sponsor-1.png'
import spotify from './Assets/sponsor-2.png'
import amazon from './Assets/sponsor-3.png'
import youtube from './Assets/sponsor-4.png'

function Footer () {
    return(
        <footer id="footer" className="h-[50vh] w-full bg-[#121212] flex justify-center items-start md:flex-row flex-col">
            <div id="left_footer" className="md:h-[100%] h-[50%] md:w-[50%] w-full">
                <img id="footer_logo" className="md:h-[50px] h-[30px] md:w-[50px] w-[30px] ml-[10px]" src={logo} alt="logo" />
                <p id="slogan" className="ml-[10px] font-sans font-semibold md:text-[12px] text-[10px] w-[200px] text-[#898989]">Get Headphones ready for the new term at your nearest JBL store. Find your perfectpair in store. Get Rewards</p>
                <div id="socials_container" className="md:h-[50px] h-[20px] w-[150px] flex justify-evenly items-center flex-row">
                    <img id="instagram" className="md:h-[20px] h-[15px] md:w-[30]px w-[15px]" src={instagram} alt="instagram" />
                    <img id="telegram" className="md:h-[20px] h-[15px] md:w-[30]px w-[15px]" src={telegram} alt="telegram" />
                </div>
                <h1 id="sponsor" className="text-[#565656] md:ml-[10px] font-sans font-semibold md:text-[30px] text-[15px]">Sponsors</h1>
                <div id="sponsors_container" className="ml-[10px] flex flex-row md:justify-between justify-around items-start md:w-full w-[300px]">
                    <img className="md:h-[40px] h-[20px] md:w-[100px] w-[50px]" src={apple} alt="sponsor" />
                    <img className="md:h-[40px] h-[20px] md:w-[100px] w-[50px]" src={spotify} alt="sponsor" />
                    <img className="md:h-[40px] h-[20px] md:w-[100px] w-[50px]" src={amazon} alt="sponsor" />
                    <img className="md:h-[40px] h-[20px] md:w-[100px] w-[50px]" src={youtube} alt="sponsor" />
                </div>
            </div>
            <div id="right_footer" className="md:h-[100%] h-[50%] md:w-[50%] w-full flex justify-evenly items-start flex-row">
                <div id="footer_products">
                    <h1 className="font-sans font-semibold text-[#898989] md:text-[20px] text-[15px]">Products</h1>
                    <ul>
                        <li className="text-[#565656] font-sans font-semibold md:text-[15px] text-[10px] cursor-pointer">Mate White model</li>
                        <li className="text-[#565656] font-sans font-semibold md:text-[15px] text-[10px] cursor-pointer">Red Scarlet model</li>
                        <li className="text-[#565656] font-sans font-semibold md:text-[15px] text-[10px] cursor-pointer">Sky Blue model</li>
                        <li className="text-[#565656] font-sans font-semibold md:text-[15px] text-[10px] cursor-pointer">Square Aqua Speaker</li>
                        <li className="text-[#565656] font-sans font-semibold md:text-[15px] text-[10px] cursor-pointer">Black Cilinder Spearker</li>
                        <li className="text-[#565656] font-sans font-semibold md:text-[15px] text-[10px] cursor-pointer">Black Spearker</li>
                    </ul>
                </div>
                <div id="footer_help">
                    <h1 className="font-sans font-semibold text-[#898989] md:text-[20px] text-[15px]">Help</h1>
                    <ul>
                        <li className="text-[#565656] font-sans font-semibold md:text-[15px] text-[10px] cursor-pointer">About us</li>
                        <li className="text-[#565656] font-sans font-semibold md:text-[15px] text-[10px] cursor-pointer">FAQs</li>
                        <li className="text-[#565656] font-sans font-semibold md:text-[15px] text-[10px] cursor-pointer">How it works</li>
                        <li className="text-[#565656] font-sans font-semibold md:text-[15px] text-[10px] cursor-pointer">Privacy policy</li>
                        <li className="text-[#565656] font-sans font-semibold md:text-[15px] text-[10px] cursor-pointer">Payment policy</li>
                    </ul>
                </div>
                <div id="footer_contact">
                    <h1 className="font-sans font-semibold text-[#898989] text-[20px]">Contact</h1>
                    <ul>
                        <li className="text-[#565656] font-sans font-semibold md:text-[15px] text-[10px] cursor-pointer">customer@jbl.com</li>
                        <li className="text-[#565656] font-sans font-semibold md:text-[15px] text-[10px] cursor-pointer">+92359456</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer