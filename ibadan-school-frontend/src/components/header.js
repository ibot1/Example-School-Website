import { Component } from "react";
import SearchIcon from "./icons/search";
import SchoolLogo from "../assets/images/school-logo.png";
import headerStyles from "./styles/header.module.css";

export default class Header extends Component {

    render() {
        return <div>
            <div className={headerStyles.header1}>
                <img src={SchoolLogo} alt="School Logo" height="60.375em" />
                <div> <span> Coronavirus Response </span> </div>
                <div> <span> News </span> </div>
                <div> <span> Events </span> </div>
                <div> <span> Donation </span> </div>
                <span className={headerStyles.header1last}> <SearchIcon /> Search </span>
            </div>
            <div className={headerStyles.header2}>
                <span> ACADEMICS & COOPERATIVE EDUCATION </span>
                <span> ADMISSIONS </span>
                <span> LIFE AT SCHOOL </span>
                <span> RESEARCH & INNOVATION </span>
                <span> ABOUT </span>
            </div>
        </div >
    }
}