import { Component } from "react";
import { NavLink } from "react-router-dom";
import DropDownCard from "./cards/dropdown";
import SearchIcon from "./icons/search";
import SchoolLogo from "../assets/images/school-logo.png";
import headerStyles from "./styles/header.module.css";


export default class Header extends Component {

    constructor() {
        super();
        this.state = {
            academics: null,
            admissions: null
        }
    }

    onMouseEnterAdmissions = () => {
        const options = ["Option B1", "Option B2", "Option B3", "Option B4"];
        this.setState({ admissions: <DropDownCard options={options} /> });
    }

    onMouseLeaveAdmissions = () => {
        // this.setState({ admissions: null });
    }

    onMouseEnterAcademics = () => {
        console.log(this)
        const options = ["Option A1", "Option A2", "Option A3", "Option A4"];
        this.setState({ academics: <DropDownCard options={options} /> });
    }

    onMouseLeaveAcademics = () => {
        console.log(this)
        this.setState({ academics: null });
    }

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
                <span onMouseEnter={this.onMouseEnterAcademics} onMouseLeave={this.onMouseLeaveAcademics}>
                    ACADEMICS & COOPERATIVE EDUCATION
                </span>
                <span onMouseEnter={this.onMouseEnterAdmissions} onMouseLeave={this.onMouseLeaveAdmissions}>
                    ADMISSIONS
                </span>
                <NavLink to="/school-life"> LIFE AT SCHOOL </NavLink>
                <NavLink to=""> RESEARCH & INNOVATION </NavLink>
                <NavLink to="/about"> ABOUT </NavLink>
                <span> {this.state.academics} </span>
                <span> {this.state.admissions} </span>
            </div>
        </div >
    }
}