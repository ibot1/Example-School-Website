import { Component } from "react";
import Header from "../components/header";
import NavigationGraph from "../components/navigationgraph";
import ScrollableFooter from "../components/scrollablefooter";
import FixedFooter from "../components/fixedfooter";

export default class Academics extends Component {

    render() {
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
        return (
            <div>
                <Header />
                <div style={{ minHeight: "20em" }}>
                    Academics Page Contents
                    <NavigationGraph sideMenu={sideMenu} />
                </div>
                <ScrollableFooter />
                <FixedFooter />
            </div>
        );
    }
}