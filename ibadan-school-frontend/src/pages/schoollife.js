import { Component } from "react";
import Header from "../components/header";
import ScrollableFooter from "../components/scrollablefooter";
import FixedFooter from "../components/fixedfooter";

export default class SchoolLife extends Component {

    render() {
        return (
            <div>
                <Header />
                School-life Page Contents
                <ScrollableFooter />
                <FixedFooter />
            </div>
        );
    }
}