import PageComponent from "../utils/pagecomponent";
import sideMenuApi from "../utils/sidemenuapi.json";
import Header from "../components/header";
import NavigationGraph from "../components/navigationgraph";
import ScrollableFooter from "../components/scrollablefooter";
import contentStyles from "./styles/pagecontent.module.css";
import FixedFooter from "../components/fixedfooter";
import Image from "../assets/images/school-home-img-2.jpg";

export default class Academics extends PageComponent {

    render() {

        return (
            <div>
                <Header />
                <div className={contentStyles.contentContainer}>
                    <NavigationGraph sideMenu={sideMenuApi.academics} />
                    <div className={contentStyles.mainContent}>
                        <img src={Image} alt="Image1" width="100%" height="500em" />
                        <div style={{ backgroundColor: "#8a00ff69", height: "10em", width: "100%", position: "relative", top: "-10.2em" }}>
                            <div style={{
                                border: "thin solid orange", height: "1em", width: "fit-content",
                                fontSize: "2.5em",
                                position: "relative",
                                fontFamily: "sans-serif",
                                backgroundColor: "white",
                                fontWeight: "bold",
                                color: "black",
                                padding: "1%",
                                left: "40%"
                            }}>
                                Academics
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ height: "30em" }} />
                <ScrollableFooter />
                <FixedFooter />
            </div >
        );
    }
}