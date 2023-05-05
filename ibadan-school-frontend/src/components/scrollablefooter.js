import { Component } from "react";

import scrollableFooterStyles from "./styles/scrollablefooter.module.css";
import SchoolLogo from "../assets/images/school-logo.png";
import LocationIcon from "./icons/location";
import TelephoneIcon from "./icons/telephone";
import FacebookIcon from "./icons/facebook";
import TwitterIcon from "./icons/twitter";
import InstagramIcon from "./icons/instagram";
import YoutubeIcon from "./icons/youtube";
import LinkedinIcon from "./icons/linkedin";
import { NavLink } from "react-router-dom";

export default class ScrollableFooter extends Component {

    render() {
        return (
            <div className={scrollableFooterStyles.footer}>
                <div className={scrollableFooterStyles.block1}>
                    <NavLink to="/home"> <img src={SchoolLogo} alt="School Logo" className={scrollableFooterStyles.schoolLogo} /> </NavLink>
                    <div className={scrollableFooterStyles.schoolName}> IBADAN SCHOOL FOR THE DEAF </div>
                    <div className={scrollableFooterStyles.address1}> Polytechnic Road, Sango - Eleyele Expressway  </div>
                    <a href="https://goo.gl/maps/No69zxxq2GeMmFyQ8" target="_blank" rel="noreferrer">
                        <div className={scrollableFooterStyles.locatMap}>
                            <span className={scrollableFooterStyles.location}> <LocationIcon /> </span>
                            <span className={scrollableFooterStyles.viewMap}> View on Map </span>
                        </div>
                    </a>

                    <div className={scrollableFooterStyles.address2}> Ijokodo, Ibadan, Oyo State, Nigeria, 200283 </div>
                    <div className={scrollableFooterStyles.teleNum1}>
                        <span> <TelephoneIcon /></span>
                        <span> +234-806-006-0642 </span>
                    </div>
                    <div className={scrollableFooterStyles.teleNum2}>
                        <span> <TelephoneIcon /></span>
                        <span> +234-803-585-1464 </span>
                    </div>
                </div>
                <div className={scrollableFooterStyles.block2}>
                    <NavLink to="/emergency" className={scrollableFooterStyles.emergency}> Emergency </NavLink>
                    <NavLink to="/contact" className={scrollableFooterStyles.contact}> Contact </NavLink>
                    <NavLink to="/press" className={scrollableFooterStyles.press}> Press </NavLink>
                    <NavLink to="/careers" className={scrollableFooterStyles.careers}> Careers </NavLink>
                </div>
                <div className={scrollableFooterStyles.block3}>
                    <div className={scrollableFooterStyles.followUs}>
                        <div className={scrollableFooterStyles.followUsMsg}> FOLLOW US </div>
                        <span className={scrollableFooterStyles.facebook}> <FacebookIcon /> </span>
                        <span className={scrollableFooterStyles.twitter}> <TwitterIcon /></span>
                        <span className={scrollableFooterStyles.instagram}> <InstagramIcon /> </span>
                        <span className={scrollableFooterStyles.youtube}> <YoutubeIcon /> </span>
                        <span className={scrollableFooterStyles.linkedin}> <LinkedinIcon /> </span>
                    </div>
                </div>
                <div className={scrollableFooterStyles.block4}>
                    <span>Copyright © 2023 Jaroy. All rights reserved. </span>
                    <a href="https://www.jaroymtech.ng" target="_blank" rel="noreferrer"> Privacy & Legal </a>
                </div>
                <div className={scrollableFooterStyles.block5}>
                    <NavLink to="/about" className={scrollableFooterStyles.motto}> Education For All Children </NavLink>
                </div>
            </div >
        );
    }
}