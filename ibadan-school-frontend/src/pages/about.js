import { Component } from "react";
import Header from "../components/header";
import sideMenuApi from "../utils/sidemenuapi.json";
import ScrollableFooter from "../components/scrollablefooter";
import NavigationGraph from "../components/navigationgraph";
import FixedFooter from "../components/fixedfooter";

export default class About extends Component {

    render() {
        return (
            <div>
                <Header />
                <div style={{ minHeight: "20em" }}>
                    About Page Contents
                    <NavigationGraph sideMenu={sideMenuApi.aboutUs} />
                </div>

                <ScrollableFooter />
                <FixedFooter />
            </div>
        );
    }
}