import { Component } from "react";
import notFoundStyles from "../components/styles/notfound.module.css";

export default class NotFound extends Component {

    render() {
        return (
            <div>
                <p className={notFoundStyles.p1}> Not Found [404] </p>
            </div>
        );
    }
}