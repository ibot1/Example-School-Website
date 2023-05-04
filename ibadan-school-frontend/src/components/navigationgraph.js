import { Component } from "react";
import navigationGraphStyles from "./styles/navigationgraph.module.css";

export default class NavigationGraph extends Component {

    constructor() {
        super();
        this.state = { sideMenu: [] };
    }

    componentWillUnmount() {
        this.setState({ sideMenu: [] });
    }

    componentDidMount() {
        this.setState({ sideMenu: this.buildSideMenu() });
    }

    buildSideMenu = () => {
        const sideMenu = this.props.sideMenu || [];
        const ctr = { val: 0 };
        return sideMenu.map(option => this.createNode(option, ctr));
    }

    createNode = (node, ctr) => {
        const isLeaf = node.children === null;
        const children = node.children || [];
        const id = ++ctr.val;
        const symbol = isLeaf ? '*' : '+';

        return (
            <div id={id} key={id} onClick={this.onClick}>
                {symbol}{node.title}
                {<div hidden={true} className={navigationGraphStyles.hider}>
                    {children.map(child => this.createNode(child, ctr))}
                </div>}
            </div>
        );
    }

    onClick = (event) => {
        const id = event.target.id;
        const node = document.getElementById(id);
        const old = node.firstChild.nodeValue;
        node.firstChild.nodeValue = old === '+' ? '-' : old === '-' ? '+' : old;
        node.childNodes[2].hidden = old === '-';
        event.stopPropagation();
    }

    render() {
        return (
            <div>
                <div className={navigationGraphStyles.sideMenu}>
                    {this.state.sideMenu}
                </div>
            </div>

        )
    }
}