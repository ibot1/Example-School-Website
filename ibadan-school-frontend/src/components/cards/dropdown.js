import { Component } from "react";

export default class DropDown extends Component {

    constructor() {
        super();
        this.state = { options: null };
    }


    componentDidMount = () => {
        const options = this.props.options || [];

        this.setState({
            options: options.map(option => {
                return <div key={option} style={{
                    position: "relative",
                    height: "2em",
                    textAlign: "left",
                    fontSize: "0.84em",
                    fontFamily: "sans-serif",
                    color: "#35637c",
                    borderBottom: "thin solid white",
                    paddingTop: "7%"
                }}> {option} </div>
            })
        });
    }

    render() {
        return <div style={{
            backgroundColor: "#00ffb8", width: "11em", borderRadius: "0.2em",
            textAlign: "center",
            borderWidth: "thin",
            borderStyle: "solid",
            borderCOlor: "black"
        }}>
            {this.state.options}
        </div>
    }
}