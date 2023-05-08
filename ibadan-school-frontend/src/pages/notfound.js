import PageComponent from "../utils/pagecomponent";
import notFoundStyles from "../components/styles/notfound.module.css";

export default class NotFound extends PageComponent {

    render() {
        return (
            <div>
                <p className={notFoundStyles.p1}> Not Found [404] </p>
            </div>
        );
    }
}