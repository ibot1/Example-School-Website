import PageComponent from "../utils/pagecomponent";
import Header from "../components/header";
import ScrollableFooter from "../components/scrollablefooter";
import NavigationGraph from "../components/navigationgraph";
import contentStyles from "./styles/pagecontent.module.css";
import FixedFooter from "../components/fixedfooter";

export default class Contact extends PageComponent {

    render() {

        return (
            <div>
                <Header />
                <div className={contentStyles.contentContainer}>
                    <div className={contentStyles.titleContainer}>
                        <span className={contentStyles.title}> Contact </span>
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