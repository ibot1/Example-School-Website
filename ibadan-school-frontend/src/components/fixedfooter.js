import { Component } from "react";
import ConnectIcon from "./icons/connect";
import InfoIcon from "./icons/info";
import DocumentIcon from "./icons/document";
import SchdeduleIcon from "./icons/schedule";
import GiftIcon from "./icons/gift";
import fixedFooterStyles from "./styles/fixedfooter.module.css";


export default class FixedFooter extends Component {
    render() {
        return <div className={fixedFooterStyles.footer}>
            <div className={fixedFooterStyles.connectbox}> <ConnectIcon /> Connect </div>
            <div className={fixedFooterStyles.inforbox}>
                <div> <span> Students </span> </div>
                <div> <span> Families </span> </div>
                <div> <span> Alumni </span> </div>
                <span className={fixedFooterStyles.inforboxlast}> Faculty & Professional Staff </span>
            </div>
            <div className={fixedFooterStyles.otherbox}>
                <div> <InfoIcon /> Request Info  </div>
                <div> <DocumentIcon /> Apply  </div>
                <div> <SchdeduleIcon /> Visit </div>
                <div> <GiftIcon /> Donation </div>
            </div>
        </div>;
    }
}