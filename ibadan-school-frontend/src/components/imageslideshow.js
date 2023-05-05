import { Component } from "react";
import SchoolHomeImg1 from "../assets/images/school-home-img-1.jpg";
import SchoolHomeImg2 from "../assets/images/school-home-img-2.jpg";
import SchoolHomeImg3 from "../assets/images/school-home-img-3.jpg";
import imageSlideShowStyles from "./styles/imageslideshow.module.css"

const activeColor = "#808080";
const passiveColor = "#C0C0C0";
const images = [SchoolHomeImg1, SchoolHomeImg2, SchoolHomeImg3];
const DELAY_INTERVAL = 3000; // 3 seconds

export default class ImageSlideShow extends Component {

    constructor() {
        super();
        this.state = {
            dotColors: [
                activeColor,
                passiveColor,
                passiveColor
            ],
            currentId: 0,
            timer: null
        }
    }

    componentDidMount() {
        this.createTimedSwitch();
    }

    doSwitch = (id) => {
        if (id !== this.state.currentId) {
            const updatedColors = [...this.state.dotColors];
            updatedColors[id] = activeColor;
            updatedColors[this.state.currentId] = passiveColor;
            this.setState({ currentId: id, dotColors: updatedColors });
        }
    }

    onClick = (id) => {
        this.doSwitch(id);
        this.createTimedSwitch();
    }

    createTimedSwitch = () => {
        clearInterval(this.state.timer);
        const timer = setInterval(() => {
            const nextId = (this.state.currentId + 1) % images.length;
            this.doSwitch(nextId);
        }, DELAY_INTERVAL);
        this.setState({ timer: timer });
    }


    render() {
        return (
            <div>
                <img src={images[this.state.currentId]} alt="School Home Pictures" width="100%" height="750em" />
                <div className={imageSlideShowStyles.dots} style={{ position: "relative", left: "50%" }}>
                    <div style={{ backgroundColor: [this.state.dotColors[0]] }} onClick={() => this.onClick(0)}></div>
                    <div style={{ left: "5%", backgroundColor: [this.state.dotColors[1]] }} onClick={() => this.onClick(1)}></div>
                    <div style={{ left: "10%", backgroundColor: [this.state.dotColors[2]] }} onClick={() => this.onClick(2)}></div>
                </div >
            </div>
        );
    }
}