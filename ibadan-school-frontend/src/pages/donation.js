import PageComponent from "../utils/pagecomponent";
import Header from "../components/header";
import ScrollableFooter from "../components/scrollablefooter";
import FormSections from "../components/formsections";
import FixedFooter from "../components/fixedfooter";
import NairaIcon from "../components/icons/naira";

const sectionNames = ["Donation", "Donor Information", "Billing Information", "Review", "Appreciation"];

export default class Donation extends PageComponent {

    render() {

        return (
            <div>
                <Header />
                <div style={{
                    border: "thin solid black", height: "50em", width: "50em", position: "relative",
                    left: "30%"
                }}>
                    <FormSections sectionNames={sectionNames} />
                    <div style={{
                        position: "relative", top: "2em", border: "thin solid black", height: "5em", width: "100%",
                        fontFamily: "sans-serif"
                    }}>
                        <span style={{ position: "relative", top: "0.55em", left: "3em", fontSize: "1.8em" }}> Gift Amount: </span>
                        <span style={{ position: "relative", top: "1.5em", left: "7em" }}><NairaIcon /> </span>
                        <input type="number" defaultValue="0.00" min="0.00" style={{
                            border: "thin solid black", position: "relative",
                            top: "0.65em", left: "3.8em", fontSize: "1.8em"
                        }} />
                    </div>
                </div>
                <ScrollableFooter />
                <FixedFooter />
            </div >
        );
    }
}