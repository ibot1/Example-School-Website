import { Component } from "react";

export default class PageComponent extends Component {

    constructor() {
        super();
        this.state = { params: {} };
    }

    componentDidMount() {
        const pattern = this.props.pattern;
        const path = window.location.pathname;
        const result = path.match(pattern);

        if (result && result.groups) {
            this.setState({ params: result.groups });
        }
    }
}