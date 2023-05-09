import PageComponent from "../utils/pagecomponent";
import Header from "../components/header";
import ScrollableFooter from "../components/scrollablefooter";
import NavigationGraph from "../components/navigationgraph";
import contentStyles from "./styles/pagecontent.module.css";
import FixedFooter from "../components/fixedfooter";
import Image from "../assets/images/school-home-img-2.jpg";

export default class News extends PageComponent {

    render() {

        return (
            <div>
                <Header />
                <div className={contentStyles.contentContainer}>
                    <NavigationGraph />
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
                                News
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