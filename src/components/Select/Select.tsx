import * as React from "react";
import { Manager, Reference, Popper } from "react-popper";

// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
import {
  styled,
  StyledComponentClass, // Required for tsconfig declaration export
  CoterminousStyledThemeProps, // Required for tsconfig declaration export
  Styles, // Required for tsconfig declaration export
  css,
  Popover,
} from "coterminous-styled";
import {
  ControlWrapperInternalProps, // Required due to TS export requirements. https://github.com/Microsoft/TypeScript/issues/9944
  ControlWrapper,
  ControlWrapperProps,
} from "../ControlWrapper/ControlWrapper";
import { extractControlWrapperProps } from "../ControlWrapper/controlWrapperHelper";
import Downshift, {
  GetItemPropsOptions,
  ControllerStateAndHelpers,
  DownshiftState,
  StateChangeOptions,
} from "downshift";
import { selectInputStyle } from "./select.style";

export interface SelectGroupProps {
  label: string;
}

export interface SelectMetaProps {
  label: string;
}

export interface SelectSearchProps {
  label: string;
}

export interface SelectItemProps {
  label: string;
  value: any;
  searchTerms?: SelectSearchProps[];
  group?: SelectGroupProps;
  meta?: SelectMetaProps[];
}
export interface Props {
  items: SelectItemProps[];
  onChange?: (value: SelectItemProps) => void;
}

export interface State {
  selected: SelectItemProps | undefined;
}

export type SelectProps = Props & ControlWrapperProps;

export interface SelectGroupedNodes {
  [key: string]: React.ReactNode[];
}

export enum SELECT_GROUP {
  NOT_GROUPED = "NOT_GROUPED",
}

export class SelectBase extends React.Component<SelectProps, State> {
  state: State = { selected: undefined };

  render() {
    const { items, className } = this.props;
    const label =
      this.state.selected && this.state.selected.label
        ? this.state.selected.label
        : undefined;

    return this.renderControlWrapper(
      <Downshift
        onChange={this.handleDownshiftChange}
        itemToString={item => (!!item ? item.label : "")}
        stateReducer={this.stateReducer}
      >
        {options => {
          const {
            getInputProps,
            getItemProps,
            getLabelProps,
            isOpen,
            inputValue,
            highlightedIndex,
            selectedItem,
            setState,
            clearSelection,
          } = options;

          return (
            <div>
              <Popover
                isOpen={isOpen}
                popoverChildren={() =>
                  this.renderPopoverChildren(options, items)
                }
              >
                {({ ref }) => (
                  <input
                    ref={ref}
                    className={className}
                    {...getInputProps()}
                    onFocus={this.handleFocus(setState)}
                  />
                )}
              </Popover>
            </div>
          );
        }}
      </Downshift>,
    );
  }

  renderControlWrapper = (element: React.ReactNode) => {
    const { label } = this.props;

    return (
      <ControlWrapper {...extractControlWrapperProps(this.props)}>
        {element}
      </ControlWrapper>
    );
  };

  renderPopoverChildren(
    options: ControllerStateAndHelpers<any>,
    items: SelectItemProps[],
  ): React.ReactNode {
    const {
      getInputProps,
      getItemProps,
      getLabelProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    } = options;

    const ob: SelectGroupedNodes = {};

    const reduc: SelectGroupedNodes = items
      .filter(this.getFilteredResults(inputValue))
      .reduce((acc, cur, index) => {
        const item: JSX.Element = this.renderSelectItem(options, cur, index);

        const newAcc = { ...acc };

        if (!cur.group && !newAcc[SELECT_GROUP.NOT_GROUPED]) {
          newAcc[SELECT_GROUP.NOT_GROUPED] = [item];

          return newAcc;
        }

        if (!cur.group) {
          newAcc[SELECT_GROUP.NOT_GROUPED] = [
            ...acc[SELECT_GROUP.NOT_GROUPED],
            item,
          ];

          return newAcc;
        }

        if (!acc[cur.group.label]) {
          newAcc[cur.group.label] = [item];

          return newAcc;
        }

        newAcc[cur.group.label] = [...acc[cur.group.label], item];

        return newAcc;
      }, ob);

    const groupedItems = Object.entries(reduc).map((arr, index) => {
      return (
        <div key={index}>
          <h1>{arr[0]}</h1>
          <ul>{arr[1]}</ul>
        </div>
      );
    });

    return <div>{groupedItems}</div>;
  }

  renderSelectItem(
    options: ControllerStateAndHelpers<any>,
    selectItem: SelectItemProps,
    index: number,
  ): JSX.Element {
    const {
      getInputProps,
      getItemProps,
      getLabelProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    } = options;

    return (
      <div
        {...getItemProps({
          key: index,
          index,
          item: selectItem,
          style: {
            backgroundColor: highlightedIndex === index ? "lightgray" : "white",
            fontWeight: selectedItem === selectItem ? "bold" : "normal",
          },
        })}
      >
        {this.renderDropdownItem(selectItem)}
      </div>
    );
  }

  renderDropdownItem = (item: SelectItemProps) => {
    if (!item) {
      return null;
    }

    if (!item.meta) {
      return item.label;
    }

    return (
      <div>
        {item.label}
        <ul>{item.meta.map(({ label }) => label)}</ul>
      </div>
    );
  };

  stateReducer(state: DownshiftState<any>, changes: StateChangeOptions<any>) {
    switch (changes.type) {
      case Downshift.stateChangeTypes.blurInput:
        return {
          ...changes,
          isOpen: false,
        };
      default:
        return changes;
    }
  }

  handleDownshiftChange = (selected: SelectItemProps | undefined) => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(!selected ? undefined : selected.value);
    }

    this.setState({ selected });
  };

  handleFocus = (
    setState: (
      stateToSet: Partial<StateChangeOptions<any>>,
      cb?: () => void,
    ) => void,
    clearSelection?: () => void,
  ) => () => {
    if (clearSelection) {
      clearSelection();
    }

    setState({ isOpen: true });
  };

  getFilteredResults = (inputValue: string | null) => (
    item: SelectItemProps,
  ): boolean => {
    const { searchTerms, label } = item;

    if (!inputValue || !searchTerms) {
      return true;
    }

    const searchTermLabels: string[] = searchTerms.map(term => term.label);

    searchTermLabels.push(label);

    return !!searchTermLabels.join(" ").match(new RegExp(inputValue, "gi"));
  };
}

export const Select = styled(SelectBase)`
  ${selectInputStyle};
`;
