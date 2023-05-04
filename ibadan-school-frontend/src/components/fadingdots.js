import { Component } from "react";
import fadingDotsStyles from "./styles/fadingdots.module.css";


const activeColor = "#808080";
const passiveColor = "#C0C0C0";
const DEFAULT_CALLBACK = () => { };

export default class FadingDots extends Component {

    constructor() {
        super();

        this.state = {
            dot1: activeColor,
            dot2: passiveColor,
            dot3: passiveColor,
            currentId: "dot1"
        }
    }

    onClick = (event) => {
        if (event.target.id !== this.state.currentId) {
            this.setState({
                currentId: event.target.id,
                [this.state.currentId]: passiveColor,
                [event.target.id]: activeColor
            });
            const callback = this.props.onClick || DEFAULT_CALLBACK;
            callback(event.target.id);
        }
    }

    render() {
        return (
            <div className={fadingDotsStyles.dots} style={{ position: "relative", left: "50%" }}>
                <div style={{ backgroundColor: [this.state.dot1] }} id="dot1" onClick={this.onClick}></div>
                <div style={{ left: "5%", backgroundColor: [this.state.dot2] }} id="dot2" onClick={this.onClick}></div>
                <div style={{ left: "10%", backgroundColor: [this.state.dot3] }} id="dot3" onClick={this.onClick}></div>
            </div >

        );
    }
}