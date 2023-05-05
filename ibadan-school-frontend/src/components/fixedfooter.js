import { Component } from "react";
import ConnectIcon from "./icons/connect";
import InfoIcon from "./icons/info";
import DocumentIcon from "./icons/document";
import SchdeduleIcon from "./icons/schedule";
import GiftIcon from "./icons/gift";
import fixedFooterStyles from "./styles/fixedfooter.module.css";
import { NavLink } from "react-router-dom";


export default class FixedFooter extends Component {

    render() {
        return <div className={fixedFooterStyles.footer}>
            <NavLink to="/contact"> <div className={fixedFooterStyles.connectbox}> <ConnectIcon /> Connect </div> </NavLink>
            <div className={fixedFooterStyles.inforbox}>
                <div> <NavLink to="/student"> Students </NavLink> </div>
                <div> <NavLink to="/family"> Families </NavLink> </div>
                <div> <NavLink to="/alumni"> Alumni </NavLink> </div>
                <NavLink to="/staff" className={fixedFooterStyles.inforboxlast}> Faculty & Professional Staff </NavLink>
            </div>
            <div className={fixedFooterStyles.otherbox}>
                <NavLink to="/info"> <div> <InfoIcon /> Request Info  </div> </NavLink>
                <NavLink to="/apply"> <div> <DocumentIcon /> Apply  </div></NavLink>
                <NavLink to="/visit"> <div> <SchdeduleIcon /> Visit </div></NavLink>
                <NavLink to="/donation"> <div> <GiftIcon /> Donation </div> </NavLink>
            </div>
        </div>;
    }
}