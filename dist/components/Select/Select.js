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
            if (!item.meta) {
                return item.label;
            }
            return (React.createElement("div", null,
                item.label,
                React.createElement("ul", null, item.meta.map(({ label }) => label))));
        };
        this.handleDownshiftChange = (selected) => {
            const { onChange } = this.props;
            if (onChange) {
                onChange(!selected ? undefined : selected.value);
            }
            this.setState({ selected });
        };
        this.handleFocus = (setState, clearSelection) => () => {
            if (clearSelection) {
                clearSelection();
            }
            setState({ isOpen: true });
        };
        this.getFilteredResults = (inputValue) => (item) => {
            const { searchTerms, label } = item;
            if (!inputValue || !searchTerms) {
                return true;
            }
            searchTerms.push(label);
            return !!searchTerms.join(" ").match(new RegExp(inputValue, "gi"));
        };
    }
    render() {
        const { items, className } = this.props;
        const label = this.state.selected && this.state.selected.label
            ? this.state.selected.label
            : undefined;
        return this.renderControlWrapper(React.createElement(downshift_1.default, { onChange: this.handleDownshiftChange, itemToString: item => (!!item ? item.label : ""), stateReducer: this.stateReducer }, options => {
            const { getInputProps, getItemProps, getLabelProps, isOpen, inputValue, highlightedIndex, selectedItem, setState, clearSelection, } = options;
            return (React.createElement("div", null,
                React.createElement(coterminous_styled_1.Popover, { isOpen: isOpen, popoverChildren: () => this.renderPopoverChildren(options, items) }, ({ ref }) => (React.createElement("input", Object.assign({ ref: ref, className: className }, getInputProps(), { onFocus: this.handleFocus(setState) }))))));
        }));
    }
    renderPopoverChildren(options, items) {
        const { getInputProps, getItemProps, getLabelProps, isOpen, inputValue, highlightedIndex, selectedItem, } = options;
        const ob = {};
        const reduc = items
            .filter(this.getFilteredResults(inputValue))
            .reduce((acc, cur, index) => {
            const item = this.renderSelectItem(options, cur, index);
            const newAcc = Object.assign({}, acc);
            if (!acc[cur.group[0].label]) {
                newAcc[cur.group[0].label] = [item];
                return newAcc;
            }
            newAcc[cur.group[0].label] = [...acc[cur.group[0].label], item];
            return newAcc;
        }, ob);
        const groupedItems = Object.entries(reduc).map((arr, index) => {
            return (React.createElement("div", { key: index },
                React.createElement("h1", null, arr[0]),
                React.createElement("ul", null, arr[1])));
        });
        return React.createElement("div", null, groupedItems);
    }
    renderSelectItem(options, selectItem, index) {
        const { getInputProps, getItemProps, getLabelProps, isOpen, inputValue, highlightedIndex, selectedItem, } = options;
        return (React.createElement("div", Object.assign({}, getItemProps({
            key: index,
            index,
            item: selectItem,
            style: {
                backgroundColor: highlightedIndex === index ? "lightgray" : "white",
                fontWeight: selectedItem === selectItem ? "bold" : "normal",
            },
        })), this.renderDropdownItem(selectItem)));
    }
    stateReducer(state, changes) {
        switch (changes.type) {
            case downshift_1.default.stateChangeTypes.blurInput:
                return Object.assign({}, changes, { isOpen: false });
            default:
                return changes;
        }
    }
}
exports.SelectBase = SelectBase;
exports.Select = coterminous_styled_1.styled(SelectBase) `
  ${select_style_1.selectInputStyle};
`;
