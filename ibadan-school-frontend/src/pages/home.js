import { Component } from "react";
import Header from "../components/header";
import FixedFooter from "../components/fixedfooter";
import ScrollableFooter from "../components/scrollablefooter";

export default class Home extends Component {

    render() {
        return <div>
            <Header />
            <div> School videos, images, news, events, apply, staffs </div>
            <ScrollableFooter />
            <FixedFooter />
        </div >;
    }
}