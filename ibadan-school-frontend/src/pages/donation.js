import { Component } from "react";
import Header from "../components/header";
import ScrollableFooter from "../components/scrollablefooter";
import FixedFooter from "../components/fixedfooter";

export default class Donation extends Component {

    render() {
        return (
            <div>
                <Header />
                <div style={{ minHeight: "20em" }}>
                    Donation Page Contents
                </div>
                <ScrollableFooter />
                <FixedFooter />
            </div>
        );
    }
}