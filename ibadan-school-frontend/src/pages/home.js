import { Component } from "react";
import Header from "../components/header";
import FixedFooter from "../components/fixedfooter";
import ImageSlideShow from "../components/imageslideshow";
import ScrollableFooter from "../components/scrollablefooter";

export default class Home extends Component {

    render() {
        return <div>
            <Header />
            <ImageSlideShow />

            <div style={{
                position: "relative",
                border: "thin solid #808080", textAlign: "center", fontSize: "2em",
                width: "fit-content", left: "30%", height: "5em", borderRadius: "0.5em",
                padding: "2%",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }}>
                <span style={{ borderBottom: "thin solid #000000" }}> A Center Of Learning For The Hearing-Challenged </span>
            </div>

            <ScrollableFooter />
            <FixedFooter />
        </div >;
    }
}