import { Component } from "react";
import Header from "../components/header";
import ScrollableFooter from "../components/scrollablefooter";
import FixedFooter from "../components/fixedfooter";

export default class Admissions extends Component {

    render() {
        return (
            <div>
                <Header />
                <div style={{ minHeight: "20em" }}>
                    Admissions Page Contents
                </div>
                <ScrollableFooter />
                <FixedFooter />
            </div>
        );
    }
}