import { Component } from "react";
import SchoolLogo from "../assets/images/school-logo.png";
import LocationIcon from "./icons/location";
import TelephoneIcon from "./icons/telephone";
import FacebookIcon from "./icons/facebook";
import TwitterIcon from "./icons/twitter";
import InstagramIcon from "./icons/instagram";
import YoutubeIcon from "./icons/youtube";
import LinkedinIcon from "./icons/linkedin";
import scrollableFooterStyles from "./styles/scrollablefooter.module.css";

export default class ScrollableFooter extends Component {

    render() {
        return (
            <div className={scrollableFooterStyles.footer}>
                <div className={scrollableFooterStyles.block1}>
                    <img src={SchoolLogo} alt="School Logo" height="130em" className={scrollableFooterStyles.schoolLogo} />
                    <div className={scrollableFooterStyles.schoolName}> School Name </div>
                    <div className={scrollableFooterStyles.address1}> 3141 Chestnut Street </div>
                    <div className={scrollableFooterStyles.viewMap}> <LocationIcon /> View on Map </div>
                    <div className={scrollableFooterStyles.address2}> Philadelphia, PA 19104 </div>
                    <div className={scrollableFooterStyles.phoneNumber}> <TelephoneIcon /> 215.895.2000 </div>
                </div>
                <div className={scrollableFooterStyles.block2}>
                    <div className={scrollableFooterStyles.emergency}> Emergency </div>
                    <div className={scrollableFooterStyles.contact}> Contact </div>
                    <div className={scrollableFooterStyles.press}> Press </div>
                    <div className={scrollableFooterStyles.careers}> Careers </div>
                </div>
                <div className={scrollableFooterStyles.block3}>
                    <div className={scrollableFooterStyles.followUs}>
                        <div style={{ opacity: ".6" }}> FOLLOW US </div>
                        <span> <FacebookIcon /> </span>
                        <span> <TwitterIcon /></span>
                        <span> <InstagramIcon /> </span>
                        <span> <YoutubeIcon /> </span>
                        <span> <LinkedinIcon /> </span>
                    </div>
                </div>
                <div className={scrollableFooterStyles.block4}>
                    <span>Copyright © 2023 Company. All rights reserved. </span>
                    <a href="https://www.google.com" target="_blank" rel="noreferrer"> Privacy & Legal </a>
                </div>
                <div className={scrollableFooterStyles.block5}>
                    <span className={scrollableFooterStyles.motto}> Education For All Children </span>
                </div>
            </div>
        );
    }
}