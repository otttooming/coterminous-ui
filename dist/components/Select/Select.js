"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
const coterminous_styled_1 = require("coterminous-styled");
const ControlWrapper_1 = require("../ControlWrapper/ControlWrapper");
const controlWrapperHelper_1 = require("../ControlWrapper/controlWrapperHelper");
const downshift_1 = require("downshift");
const select_style_1 = require("./select.style");
class SelectBase extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { selected: undefined };
        this.renderControlWrapper = (element) => {
            const { label } = this.props;
            return (React.createElement(ControlWrapper_1.ControlWrapper, Object.assign({}, controlWrapperHelper_1.extractControlWrapperProps(this.props)), element));
        };
        this.renderDropdownItem = (item) => {
            if (!item) {
                return null;
            }
            if (item.renderContent) {
                return item.renderContent;
            }
            return item.label;
        };
        this.handleChange = (selected) => {
            const { onChange } = this.props;
            if (onChange) {
                onChange(selected);
            }
            this.setState({ selected });
        };
    }
    render() {
        const { items, className } = this.props;
        const label = this.state.selected && this.state.selected.label
            ? this.state.selected.label
            : undefined;
        return this.renderControlWrapper(React.createElement(downshift_1.default, { onChange: this.handleChange, itemToString: item => (!!item ? item.label : ""), render: ({ getInputProps, getItemProps, getLabelProps, isOpen, inputValue, highlightedIndex, selectedItem, }) => (React.createElement("div", null,
                React.createElement(coterminous_styled_1.Popover, { isOpen: isOpen, popoverChildren: () => (React.createElement("div", null, items
                        .filter(({ searchTerms }) => !inputValue ||
                        (!!searchTerms &&
                            searchTerms
                                .join(" ")
                                .match(new RegExp(inputValue, "gi"))))
                        .map((item, index) => (React.createElement("div", Object.assign({}, getItemProps({
                        key: index,
                        index,
                        item,
                        style: {
                            backgroundColor: highlightedIndex === index
                                ? "lightgray"
                                : "white",
                            fontWeight: selectedItem === item ? "bold" : "normal",
                        },
                    })), this.renderDropdownItem(item)))))) }, ({ ref }) => (React.createElement("input", Object.assign({ ref: ref, className: className }, getInputProps())))))) }));
    }
}
exports.SelectBase = SelectBase;
exports.Select = coterminous_styled_1.styled(SelectBase) `
  ${select_style_1.selectInputStyle};
`;
