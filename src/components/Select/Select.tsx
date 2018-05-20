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
import Downshift from "downshift";
import { selectInputStyle } from "./select.style";

export interface SelectItemProps {
  label: string;
  value: any;
}
export interface Props {
  items: SelectItemProps[];
  onChange?: (value: SelectItemProps) => void;
}

export interface State {
  selected: SelectItemProps | undefined;
}

export type SelectProps = Props & ControlWrapperProps;

export class SelectBase extends React.Component<SelectProps, State> {
  state: State = { selected: null };

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
        render={({
          getInputProps,
          getItemProps,
          getLabelProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
        }) => (
          <div>
            <Popover
              isOpen={isOpen}
              popoverChildren={() => (
                <div>
                  {items
                    .filter(i => !inputValue || i.label.includes(inputValue))
                    .map((item, index) => (
                      <div
                        {...getItemProps({
                          key: index,
                          index,
                          item,
                          style: {
                            backgroundColor:
                              highlightedIndex === index
                                ? "lightgray"
                                : "white",
                            fontWeight:
                              selectedItem === item ? "bold" : "normal",
                          },
                        })}
                      >
                        {!!item && item.label}
                      </div>
                    ))}
                </div>
              )}
            >
              {({ ref }) => (
                <input ref={ref} className={className} {...getInputProps()} />
              )}
            </Popover>
          </div>
        )}
      />,
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

  renderDropdown = () => {};

  handleChange = (selected: SelectItemProps) => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(selected);
    }

    this.setState({ selected });
  };
}

export const Select = styled(SelectBase)`
  ${selectInputStyle};
`;
