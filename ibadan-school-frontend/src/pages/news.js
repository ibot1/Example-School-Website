import { Component } from "react";
import Header from "../components/header";
import ScrollableFooter from "../components/scrollablefooter";
import FixedFooter from "../components/fixedfooter";

export default class News extends Component {

    render() {
        return (
            <div>
                <Header />
                News Page Contents
                <ScrollableFooter />
                <FixedFooter />
            </div>
        );
    }
}