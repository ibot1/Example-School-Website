import { Component } from "react";
import formSectionStyles from "./styles/formsections.module.css";

export default class FormSections extends Component {

    constructor() {
        super();
        this.state = {
            sections: []
        };
    }

    componentDidMount() {
        this.setState({ sections: this.createSections() });
    }

    createSections = () => {
        const sectionNames = this.props.sectionNames || [];
        return sectionNames.map(name => {
            return (
                <div key={name} className={formSectionStyles.section}>
                    <div className={formSectionStyles.titleContainer}>
                        {name}
                    </div>
                    {name === sectionNames[sectionNames.length - 1] ? null : <div className={formSectionStyles.titleLink} />}
                </div>

            );
        })
    }



    render() {
        return (
            <div style={{ textAlign: "center" }}>
                {this.state.sections}
            </div>
        );

    }
}