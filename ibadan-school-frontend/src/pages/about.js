import { Component } from "react";
import Header from "../components/header";
import ScrollableFooter from "../components/scrollablefooter";
import FixedFooter from "../components/fixedfooter";

export default class About extends Component {

    render() {
        return (
            <div>
                <Header />
                About Page Contents
                <ScrollableFooter />
                <FixedFooter />
            </div>
        );
    }
}