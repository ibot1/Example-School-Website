import { Component } from "react";
import Header from "../components/header";
import ScrollableFooter from "../components/scrollablefooter";
import NavigationGraph from "../components/navigationgraph";
import FixedFooter from "../components/fixedfooter";

export default class Emergency extends Component {

    render() {
        return (
            <div>
                <Header />
                <div style={{ minHeight: "20em" }}>
                    Emergency Page Contents
                    <NavigationGraph />
                </div>
                <ScrollableFooter />
                <FixedFooter />
            </div>
        );
    }
}