import { Component } from "react";
import Header from "../components/header";
import ScrollableFooter from "../components/scrollablefooter";
import NavigationGraph from "../components/navigationgraph";
import FixedFooter from "../components/fixedfooter";
import contentStyles from "./styles/pagecontent.module.css";

export default class Visit extends Component {

    render() {

        return (
            <div>
                <Header />
                <div className={contentStyles.contentContainer}>
                    <div className={contentStyles.titleContainer}>
                        <span className={contentStyles.title}> Visit </span>
                    </div>
                    <NavigationGraph />
                    <div className={contentStyles.mainContent} />
                </div>
                <ScrollableFooter />
                <FixedFooter />
            </div >
        );
    }
}