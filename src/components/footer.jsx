import { NavLink } from 'react-router';

import { FaPhone } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaCcVisa } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";

export default function footer() {

    return (
        <>
        <div className='footer__nav'>
        <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About Us</li>
        </ul>

        <ul>
            <li>Returns & Refunds</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
        </ul>

        <div>
            <h2>Contact</h2>
            <p>2 Joppa Rd, Edinburgh, EH15 2EU</p>
            <p><FaPhone /> 0131 556 7901</p>

            <p>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</p>
            <p><FaPhone /> 01324 629 011</p>

            <ul>
                <li><FaFacebookSquare /></li>
                <li><FaTwitterSquare /></li>
                <li><FaSquareInstagram /></li>
                <li><IoLogoYoutube /></li>
            </ul>
        </div>
        </div>

        <div className='footer__paymethods'>
        <ul>
            <li><FaCcStripe /></li>
            <li><FaCcVisa /></li>
            <li><FaCcMastercard /></li>
        </ul>
        <p>HiFi Horizon (Edinburgh) Ltd is registered in Scotland. No: SC049298. Registered office: 2 Joppa Rd, Edinburgh EH15 2EU</p>
        <p>Designed by WU07 :)</p>
        </div>


        </>
    )
}