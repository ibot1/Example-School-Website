import { Component } from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "./icons/search";
import SchoolLogo from "../assets/images/school-logo.png";
import headerStyles from "./styles/header.module.css";


export default class Header extends Component {

    render() {
        return <div>
            <div className={headerStyles.header1}>
                <NavLink to="/home"> <img src={SchoolLogo} alt="School Logo" height="60.375em" /></NavLink>
                <div> <NavLink to=""> Coronavirus Response </NavLink> </div>
                <div> <NavLink to="/news"> News </NavLink> </div>
                <div> <NavLink to="/events"> Events </NavLink> </div>
                <div> <NavLink to="/donation"> Donation </NavLink> </div>
                <NavLink className={headerStyles.header1last} to="/search"> <SearchIcon /> Search </NavLink>
            </div>
            <div className={headerStyles.header2}>
                <span> ACADEMICS & COOPERATIVE EDUCATION </span>
                <span> ADMISSIONS</span>
                <NavLink to="/school-life"> LIFE AT SCHOOL </NavLink>
                <NavLink to=""> RESEARCH & INNOVATION </NavLink>
                <NavLink to="/about"> ABOUT </NavLink>
            </div>
        </div >
    }
}