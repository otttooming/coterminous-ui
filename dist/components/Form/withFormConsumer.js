"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Form_1 = require("./Form");
function withFormConsumer(Component) {
    return class FormConsumer extends React.Component {
        render() {
            const props = this.props;
            return (React.createElement(Form_1.FormContext.Consumer, null, consumerProps => (React.createElement(Component, Object.assign({}, consumerProps, props, { onChange: value => consumerProps.actions.setField({
                    [props.name]: { state: value },
                }) })))));
        }
    };
}
exports.withFormConsumer = withFormConsumer;
