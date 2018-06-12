"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const defaultValue = {
    fields: {},
    actions: {
        setField: (field) => null,
        getField: () => null,
        submit: () => null,
    },
};
exports.FormContext = React.createContext(defaultValue);
class FormProvider extends React.Component {
    constructor(props) {
        super(props);
        this.setField = (field) => {
            this.setState({ fields: Object.assign({}, this.state.fields, field) });
        };
        this.getField = (field) => {
            const { fields } = this.state;
            return fields[field];
        };
        this.submit = () => {
            const { fields } = this.state;
            return fields;
        };
        this.state = Object.assign({}, defaultValue, { actions: {
                setField: value => this.setField(value),
                getField: value => this.getField(value),
                submit: () => this.submit(),
            } });
    }
    render() {
        return (React.createElement(exports.FormContext.Provider, { value: this.state },
            React.createElement("form", { action: "", onSubmit: event => event.preventDefault() }, this.props.children)));
    }
}
exports.FormProvider = FormProvider;
