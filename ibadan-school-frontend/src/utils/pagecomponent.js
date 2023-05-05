import { Component } from "react";

export default class PageComponent extends Component {

    constructor() {
        super();
        this.state = { params: {} };
    }

    componentDidMount() {
        const pattern = this.props.pattern.split("/");
        const path = window.location.pathname.split("/");
        const len = Math.min(pattern.length, path.length);
        const params = {};

        for (let i = 0; i < len; ++i) {
            params[pattern[i]] = path[i];
        }

        this.setState({ params: params });
    }
}