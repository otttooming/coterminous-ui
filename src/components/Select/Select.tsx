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
} from "downshift";
import { selectInputStyle } from "./select.style";

export interface SelectGroupProps {
  label: string;
}

export interface SelectItemProps {
  label: string;
  renderContent?: JSX.Element;
  value: any;
  searchTerms?: string[];
  group: SelectGroupProps[];
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
  [key: string]: React.ReactNode;
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
        onChange={this.handleChange}
        itemToString={item => (!!item ? item.label : "")}
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
                  <input ref={ref} className={className} {...getInputProps()} />
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

    const reduc: { [key: string]: React.ReactNode } = items
      .filter(
        ({ searchTerms }) =>
          !inputValue ||
          (!!searchTerms &&
            searchTerms.join(" ").match(new RegExp(inputValue, "gi"))),
      )
      .reduce(
        (acc, cur, index) => {
          const item: JSX.Element = this.renderSelectItem(options, cur, index);

          const newAcc = { ...acc };

          if (!acc[cur.group[0].label]) {
            newAcc[cur.group[0].label] = [item];

            return newAcc;
          }

          newAcc[cur.group[0].label] = [...acc[cur.group[0].label], item];

          return newAcc;
        },
        {} as any,
      );

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

    if (item.renderContent) {
      return item.renderContent;
    }

    return item.label;
  };

  handleChange = (selected: SelectItemProps) => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(selected.value);
    }

    this.setState({ selected });
  };
}

export const Select = styled(SelectBase)`
  ${selectInputStyle};
`;
