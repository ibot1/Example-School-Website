import { Component } from "react";
import Header from "../components/header";
import contentStyles from "./styles/pagecontent.module.css";
import sideMenuApi from "../utils/sidemenuapi.json";
import ScrollableFooter from "../components/scrollablefooter";
import NavigationGraph from "../components/navigationgraph";
import FixedFooter from "../components/fixedfooter";

export default class About extends Component {

    render() {

        return (
            <div>
                <Header />
                <div className={contentStyles.contentContainer}>
                    <div className={contentStyles.titleContainer}>
                        <span className={contentStyles.title}> About </span>
                    </div>
                    <NavigationGraph sideMenu={sideMenuApi.aboutUs} />
                    <div className={contentStyles.mainContent} />
                </div>
                <ScrollableFooter />
                <FixedFooter />
            </div >
        );
    }
}