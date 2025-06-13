import { NavLink } from 'react-router';

import { FaPhone } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaCcVisa } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";

export default function Footer() {

    return (
        <footer className='bg-black text-white grid grid-cols-3 gap-y-8'>

            <div className='footer__nav col-span-3 grid grid-cols-2'>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li> Shop</li>
                    <li><NavLink to='/about'>About Us</NavLink></li>
                </ul>

                <ul>
                    <li><NavLink to='/faq'> Returns & Refunds</NavLink></li>
                    <li><NavLink to='/faq'>Delivery</NavLink></li>
                    <li><NavLink to='/faq'>Privacy Policy</NavLink></li>
                    <li><NavLink to='/faq'>Terms & Conditions</NavLink></li>
                </ul>


                <div className='col-3'>
                    <h2>Contact</h2>
                    <p>2 Joppa Rd, Edinburgh, EH15 2EU</p>
                    <p><FaPhone /> 0131 556 7901</p>

                    <p>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</p>
                    <p><FaPhone /> 01324 629 011</p>

                    <ul className='flex gap-2'>
                        <li className=''><FaFacebookSquare /></li>
                        <li><FaTwitterSquare /></li>
                        <li><FaSquareInstagram /></li>
                        <li><IoLogoYoutube /></li>
                    </ul>
                </div>
            </div>

            <div className='row-2 col-span-3 border-t'>
                <ul className='flex gap-2'>
                    <li className='text-4xl'><FaCcStripe /></li>
                    <li className='text-4xl'><FaCcVisa /></li>
                    <li className='text-4xl'><FaCcMastercard /></li>
                </ul>
                <p>HiFi Horizon (Edinburgh) Ltd is registered in Scotland. No: SC049298. Registered office: 2 Joppa Rd, Edinburgh EH15 2EU</p>
                <p>Designed by WU07 </p>
            </div>
        </footer>
    )
}