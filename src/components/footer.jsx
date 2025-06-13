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
        <footer className='bg-black text-white grid grid-cols-3 gap-y-8 px-4'>

            <div className='footer__nav col-span-3 grid grid-cols-2 mt-10 px-10'>
                <ul>
                    <li className='mb-2'><NavLink to='/'>Home</NavLink></li>
                    <li className='mb-2'> Shop</li>
                    <li className='mb-2'><NavLink to='/about'>About Us</NavLink></li>
                </ul>

                <ul>
                    <li className='mb-2'><NavLink to='/faq'> Returns & Refunds</NavLink></li>
                    <li className='mb-2'><NavLink to='/faq'>Delivery</NavLink></li>
                    <li className='mb-2'><NavLink to='/faq'>Privacy Policy</NavLink></li>
                    <li className='mb-2'><NavLink to='/faq'>Terms & Conditions</NavLink></li>
                </ul>


                <div className='col-3'>
                    <h2 className='mb-2  text-xl'>Contact</h2>
                    <p className='leading-10'>2 Joppa Rd, Edinburgh, EH15 2EU</p>
                    <p className='flex gap-4 mb-4'><FaPhone /> 0131 556 7901</p>

                    <p className='leading-10'>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</p>
                    <p className='flex gap-4'><FaPhone /> 01324 629 011</p>

                    <ul className='flex gap-2 mb-4 mt-4'>
                        <li className='text-2xl'><FaFacebookSquare /></li>
                        <li className='text-2xl'><FaTwitterSquare /></li>
                        <li className='text-2xl'><FaSquareInstagram /></li>
                        <li className='text-2xl'><IoLogoYoutube /></li>
                    </ul>
                </div>
            </div>

            <div className='row-2 col-span-3 border-t px-10 mb-4'>
                <ul className='flex gap-2 mt-2 mb-2'>
                    <li className='text-4xl'><FaCcStripe /></li>
                    <li className='text-4xl'><FaCcVisa /></li>
                    <li className='text-4xl'><FaCcMastercard /></li>
                </ul>
                <small className='col-span-2'>HiFi Horizon (Edinburgh) Ltd is registered in Scotland. No: SC049298. Registered office: 2 Joppa Rd, Edinburgh EH15 2EU</small>
                <small className='col-3'>Designed by WU07</small>
            </div>
        </footer>
    )
}