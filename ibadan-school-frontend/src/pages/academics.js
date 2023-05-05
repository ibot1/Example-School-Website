import { Component } from "react";
import sideMenuApi from "../utils/sidemenuapi.json";
import Header from "../components/header";
import NavigationGraph from "../components/navigationgraph";
import ScrollableFooter from "../components/scrollablefooter";
import FixedFooter from "../components/fixedfooter";

export default class Academics extends Component {

    render() {

        return (
            <div>
                <Header />
                <div style={{ minHeight: "20em" }}>
                    Academics Page Contents
                    <NavigationGraph sideMenu={sideMenuApi.academics} />
                </div>
                <ScrollableFooter />
                <FixedFooter />
            </div>
        );
    }
}