import PageComponent from "../utils/pagecomponent";
import sideMenuApi from "../utils/sidemenuapi.json";
import Header from "../components/header";
import NavigationGraph from "../components/navigationgraph";
import ScrollableFooter from "../components/scrollablefooter";
import contentStyles from "./styles/pagecontent.module.css";
import FixedFooter from "../components/fixedfooter";

export default class Academics extends PageComponent {

    render() {

        return (
            <div>
                <Header />
                <div className={contentStyles.contentContainer}>
                    <div className={contentStyles.titleContainer}>
                        <span className={contentStyles.title}> Academics </span>
                    </div>
                    <NavigationGraph sideMenu={sideMenuApi.academics} />
                    <div className={contentStyles.mainContent} />
                </div>
                <ScrollableFooter />
                <FixedFooter />
            </div >
        );
    }
}