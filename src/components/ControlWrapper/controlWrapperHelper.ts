import { ControlWrapperProps } from "./ControlWrapper";

export function extractControlWrapperProps(
  props: Partial<ControlWrapperProps>,
): ControlWrapperProps {
  const { label, isRequired } = props;
  return { label, isRequired };
}
