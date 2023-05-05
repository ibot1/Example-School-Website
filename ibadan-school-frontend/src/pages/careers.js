import { Component } from "react";
import Header from "../components/header";
import ScrollableFooter from "../components/scrollablefooter";
import NavigationGraph from "../components/navigationgraph";
import FixedFooter from "../components/fixedfooter";

const sideMenu = [
    {
        title: "Menu1",
        children: null,
    },
    {
        title: "Menu2",
        children: [
            {
                title: "Menu2.1",
                children: [
                    {
                        title: "Menu2.1.1",
                        children: null,
                    },
                    {
                        title: "Menu2.1.2",
                        children: [
                            {
                                title: "Menu2.1.2.1",
                                children: [],
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

export default class Careers extends Component {

    render() {
        return (
            <div>
                <Header />
                <div style={{ minHeight: "20em" }}>
                    Careers Page Contents
                    <NavigationGraph sideMenu={sideMenu} />
                </div>
                <ScrollableFooter />
                <FixedFooter />
            </div>
        );
    }
}