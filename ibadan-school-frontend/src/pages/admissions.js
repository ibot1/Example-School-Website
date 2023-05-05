import { Component } from "react";
import Header from "../components/header";
import sideMenuApi from "../utils/sidemenuapi.json";
import ScrollableFooter from "../components/scrollablefooter";
import NavigationGraph from "../components/navigationgraph";
import FixedFooter from "../components/fixedfooter";

export default class Admissions extends Component {

    render() {
        return (
            <div>
                <Header />
                <div style={{ minHeight: "20em" }}>
                    Admissions Page Contents
                    <NavigationGraph sideMenu={sideMenuApi.admissions} />
                </div>
                <ScrollableFooter />
                <FixedFooter />
            </div>
        );
    }
}