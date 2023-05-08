import { Component } from "react";
import Header from "../components/header";
import ScrollableFooter from "../components/scrollablefooter";
import NavigationGraph from "../components/navigationgraph";
import contentStyles from "./styles/pagecontent.module.css";
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
            },
            {
                title: "Menu2.2",
                children: [
                    {
                        title: "Menu2.2.1",
                        children: null,
                    },
                    {
                        title: "Menu2.2.2",
                        children: [
                            {
                                title: "Menu2.2.2.1",
                                children: [],
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        title: "Menu3",
        children: [
            {
                title: "Menu3.1",
                children: [
                    {
                        title: "Menu3.1.1",
                        children: null,
                    },
                    {
                        title: "Menu3.1.2",
                        children: [
                            {
                                title: "Menu3.1.2.1",
                                children: [],
                            }
                        ]
                    }
                ]
            },
            {
                title: "Menu3.2",
                children: [
                    {
                        title: "Menu3.2.1",
                        children: null,
                    },
                    {
                        title: "Menu3.2.2",
                        children: [
                            {
                                title: "Menu3.2.2.1",
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
                <div className={contentStyles.contentContainer}>
                    <div className={contentStyles.titleContainer}>
                        <span className={contentStyles.title}> Careers </span>
                    </div>
                    <NavigationGraph sideMenu={sideMenu} />
                    <div className={contentStyles.mainContent} />
                </div>
                <ScrollableFooter />
                <FixedFooter />
            </div >
        );
    }
}