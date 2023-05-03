import { Component } from "react";
import Header from "../components/header";
import ScrollableFooter from "../components/scrollablefooter";
import FixedFooter from "../components/fixedfooter";

export default class TuitionFinAid extends Component {

    render() {
        return (
            <div>
                <Header />
                Tuition And Financial Aid Page Contents
                <ScrollableFooter />
                <FixedFooter />
            </div>
        );
    }
}