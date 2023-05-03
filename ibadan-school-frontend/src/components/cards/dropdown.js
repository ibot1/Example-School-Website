import { Component } from "react";
import { NavLink } from "react-router-dom";

export default class DropDown extends Component {

    constructor() {
        super();
        this.state = { options: null };
    }


    componentDidMount = () => {
        const options = this.props.options || [];

        this.setState({
            options: options.map(option => {
                const borderBottom = (option === options[options.length - 1] ? "none" : "thin solid white");
                return <NavLink key={option.title} to={option.linkTo} style={{
                    position: "relative",
                    display: "block",
                    height: "2em",
                    fontSize: "0.7em",
                    fontFamily: "sans-serif",
                    color: "#35637c",
                    borderBottom: `${borderBottom}`,
                    paddingTop: "7%",
                    width: "9em",
                    left: "-20%"
                }}> {option.title} </NavLink>
            })
        });
    }

    render() {
        return (
            <div style={{ position: "relative", left: "-73%" }}>
                <div style={{ position: "relative", left: "40%", borderLeft: "0.5em solid transparent", borderRight: "0.5em solid transparent", borderBottom: "0.5em solid #00ffb8" }}></div>
                <div style={{ backgroundColor: "#00ffb8", width: "9em", borderRadius: "0.5em", paddingBottom: "20%" }}>
                    {this.state.options}
                </div>
            </div>
        );
    }
}