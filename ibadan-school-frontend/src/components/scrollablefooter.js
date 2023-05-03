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

export default class ScrollableFooter extends Component {

    render() {
        return (
            <div className={scrollableFooterStyles.footer}>
                <div className={scrollableFooterStyles.block1}>
                    <img src={SchoolLogo} alt="School Logo" className={scrollableFooterStyles.schoolLogo} />
                    <div className={scrollableFooterStyles.schoolName}> IBADAN SCHOOL FOR THE DEAF </div>
                    <div className={scrollableFooterStyles.address1}> 3141 Chestnut Street </div>
                    <div className={scrollableFooterStyles.locatMap}>
                        <span className={scrollableFooterStyles.location}> <LocationIcon /> </span>
                        <span className={scrollableFooterStyles.viewMap}> View on Map </span>
                    </div>
                    <div className={scrollableFooterStyles.address2}> Philadelphia, PA 19104 </div>
                    <div className={scrollableFooterStyles.teleNum}>
                        <span> <TelephoneIcon /></span>
                        <span> 215.895.2000 </span>
                    </div>
                </div>
                <div className={scrollableFooterStyles.block2}>
                    <div className={scrollableFooterStyles.emergency}> Emergency </div>
                    <div className={scrollableFooterStyles.contact}> Contact </div>
                    <div className={scrollableFooterStyles.press}> Press </div>
                    <div className={scrollableFooterStyles.careers}> Careers </div>
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
                    <span>Copyright © 2023 Jaroy Ltd. All rights reserved. </span>
                    <a href="https://www.google.com" target="_blank" rel="noreferrer"> Privacy & Legal </a>
                </div>
                <div className={scrollableFooterStyles.block5}>
                    <span className={scrollableFooterStyles.motto}> Education For All Children </span>
                </div>
            </div >
        );
    }
}