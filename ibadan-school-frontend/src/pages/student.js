import { Component } from "react";
import Header from "../components/header";
import ScrollableFooter from "../components/scrollablefooter";
import NavigationGraph from "../components/navigationgraph";
import FixedFooter from "../components/fixedfooter";
import contentStyles from "./styles/pagecontent.module.css";

export default class Student extends Component {

    render() {

        return (
            <div>
                <Header />
                <div className={contentStyles.contentContainer}>
                    <div className={contentStyles.titleContainer}>
                        <span className={contentStyles.title}> Students </span>
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