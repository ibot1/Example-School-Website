import { Component } from "react";

export default class PageComponent extends Component {

    constructor() {
        super();
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        const pattern = this.props.pattern;
        const path = window.location.pathname;
        const result = path.match(pattern);
        this.params = result && result.groups ? { params: result.groups } : {};
    }
}