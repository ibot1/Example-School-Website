import { Component } from "react";
import Header from "../components/header";
import FixedFooter from "../components/fixedfooter";
import ImageSlideShow from "../components/imageslideshow";
import ScrollableFooter from "../components/scrollablefooter";
import homeStyles from "./styles/home.module.css";
import { NavLink } from "react-router-dom";

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            news: [],
            events: []
        }
    }

    componentDidMount() {
        this.setState({
            events: this.eventsCardApi(),
            news: this.newsCardApi()
        });
    }

    eventsCardApi = () => {
        const content = [];

        for (let i = 0; i < 3; ++i) {
            content.push(this.createCard(`Event ${i + 1}`, i, "/events"));
        }

        return content;
    }

    newsCardApi = () => {
        const content = [];

        for (let i = 0; i < 3; ++i) {
            content.push(this.createCard(`News ${i + 1}`, i, "/news"));
        }

        return content;
    }

    createCard = (message, key, linkTo) => {
        return (
            <NavLink to={linkTo} className={homeStyles.newsEventCard} key={key}>
                <div className={homeStyles.newsEventDateTime}>
                    <span> May 05, 2023 </span>
                    <div> 9:00 AM - 12:00 PM </div>
                </div>
                <div className={homeStyles.newsEventMessage}> {message} on on on on on on on on  ... </div>
            </NavLink>
        );
    }

    render() {
        return <div>
            <Header />
            <ImageSlideShow />
            <div className={homeStyles.storyCard}>
                <span className={homeStyles.storyMessage}> A Center Of Learning For The Hearing-Challenged </span>
            </div>
            <div className={homeStyles.newsEventSection}>
                <div className={homeStyles.newsEventTitle}> Events </div>
                {this.state.events}
                <NavLink to="/events"> <div className={homeStyles.newsEventButton}> VIEW ALL EVENTS </div> </NavLink>
            </div>
            <div className={homeStyles.newsEventSection}>
                <div className={homeStyles.newsEventTitle}> News </div>
                {this.state.news}
                <NavLink to="/news"><div className={homeStyles.newsEventButton}> VIEW ALL NEWS </div></NavLink>

            </div>
            <ScrollableFooter />
            <FixedFooter />
        </div >;
    }
}