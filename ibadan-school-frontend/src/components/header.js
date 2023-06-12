import { Component } from "react";
import DropDownCard from "./cards/dropdown";
import { NavLink } from "react-router-dom";
import SearchIcon from "./icons/search";
import SchoolLogo from "../assets/images/school-logo.png";
import headerStyles from "./styles/header.module.css";

const options = {
    academics: [
        {
            title: "Pre-School",
            linkTo: "/academics"
        },
        {
            title: "Primary School",
            linkTo: "/academics"
        },
        {
            title: "Secondary School",
            linkTo: "/academics"
        },
        {
            title: "Vocational Training Center",
            linkTo: "/academics"
        },
    ],
    admissions: [
        {
            title: "Pre-School",
            linkTo: "/admissions"
        },
        {
            title: "Primary School",
            linkTo: "/admissions"
        },
        {
            title: "Secondary School",
            linkTo: "/admissions"
        },
        {
            title: "Vocational Training Center",
            linkTo: "/admissions"
        },
    ],
    aboutUs: [
        {
            title: "Mission & Vision",
            linkTo: "/about"
        },
        {
            title: "Strategic Plan",
            linkTo: "/about"
        },
        {
            title: "Management Team",
            linkTo: "/about"
        },
        {
            title: "Core Values",
            linkTo: "/about"
        },
    ]
}

export default class Header extends Component {

    constructor() {
        super();

        this.state = {
            academics: null,
            admissions: null,
            aboutUs: null,
            currentId: null
        }
    }

    onClick = (event) => {
        const wasSelected = this.state.currentId === event.target.id;
        this.setState({
            currentId: wasSelected ? null : event.target.id,
            [this.state.currentId]: null,
            [event.target.id]: wasSelected ? null : <DropDownCard options={options[event.target.id]} />
        });
    }

    render() {
        return <div>
            <div className={headerStyles.header1}>
                <NavLink to="/home"> <img src={SchoolLogo} alt="School Logo" height="8%" /></NavLink>
                <div> <NavLink to="/news"> News </NavLink> </div>
                <div> <NavLink to="/events"> Events </NavLink> </div>
                <div> <NavLink to="/donation"> Donation </NavLink> </div>
                <NavLink className={headerStyles.header1last} to="/search"> <SearchIcon /> Search </NavLink>
            </div>
            <div className={headerStyles.header2}>
                <span onClick={this.onClick} id="academics"> LEARN WITH US </span>
                <NavLink to="/school-life"> LIFE AT SCHOOL </NavLink>
                <span onClick={this.onClick} id="admissions"> ADMISSIONS </span>
                <NavLink to="/tuition-and-financial-aid"> TUITION & FINANCIAL AID </NavLink>
                <span onClick={this.onClick} id="aboutUs"> ABOUT US </span>
                <NavLink to="/careers"> CAREERS </NavLink>

                <div className={headerStyles.academicsOptions}> {this.state.academics} </div>
                <div className={headerStyles.admissionsOptions}> {this.state.admissions} </div>
                <div className={headerStyles.aboutUs}> {this.state.aboutUs} </div>
            </div>
        </div >
    }
}