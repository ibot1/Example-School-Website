import { Component } from "react";
import Header from "../components/header";
import ScrollableFooter from "../components/scrollablefooter";
import NavigationGraph from "../components/navigationgraph";
import FixedFooter from "../components/fixedfooter";

export default class Contact extends Component {

    render() {
        return (
            <div>
                <Header />
                <div style={{ minHeight: "20em" }}>
                    Contact Page Contents
                    <NavigationGraph />
                </div>
                <ScrollableFooter />
                <FixedFooter />
            </div>
        );
    }
}