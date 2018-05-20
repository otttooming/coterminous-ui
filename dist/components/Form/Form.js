"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const defaultValue = {
    fields: null,
    actions: {
        setField: (field) => { },
        getField: () => { },
        submit: () => { },
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
            console.log(fields);
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
function withFormConsumer(Component) {
    return class FormConsumer extends React.Component {
        render() {
            const props = this.props;
            return (React.createElement(exports.FormContext.Consumer, null, consumerProps => React.createElement(Component, Object.assign({}, consumerProps, props))));
        }
    };
}
exports.withFormConsumer = withFormConsumer;
