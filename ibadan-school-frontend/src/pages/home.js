import { Component } from "react";
import Header from "../components/header";
import FixedFooter from "../components/fixedfooter";
import FadingDots from "../components/fadingdots";
import SchoolHomeImg1 from "../assets/images/school-home-img-1.jpg";
import SchoolHomeImg2 from "../assets/images/school-home-img-2.jpg";
import SchoolHomeImg3 from "../assets/images/school-home-img-3.jpg";
import ScrollableFooter from "../components/scrollablefooter";

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            slideshow: {
                dot1: SchoolHomeImg1,
                dot2: SchoolHomeImg2,
                dot3: SchoolHomeImg3,
                currentView: SchoolHomeImg1
            }
        }
    }

    onClickSlideShow = (id) => {
        this.setState({
            slideshow: {
                ...this.state.slideshow,
                currentView: this.state.slideshow[id]
            }
        })
    }

    render() {
        return <div>
            <Header />
            <img src={this.state.slideshow.currentView} alt="School Home Pictures" width="100%" height="750em" />
            <FadingDots onClick={this.onClickSlideShow} />

            <div style={{ minHeight: "20em" }} />
            <ScrollableFooter />
            <FixedFooter />
        </div >;
    }
}