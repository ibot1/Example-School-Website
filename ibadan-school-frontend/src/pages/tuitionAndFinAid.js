import { Component } from "react";
import Header from "../components/header";
import ScrollableFooter from "../components/scrollablefooter";
import NavigationGraph from "../components/navigationgraph";
import FixedFooter from "../components/fixedfooter";
import contentStyles from "./styles/pagecontent.module.css";

export default class TuitionFinAid extends Component {

    render() {

        return (
            <div>
                <Header />
                <div className={contentStyles.contentContainer}>
                    <div className={contentStyles.titleContainer}>
                        <div className={contentStyles.title}> Tuition/Financial Aid </div>
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