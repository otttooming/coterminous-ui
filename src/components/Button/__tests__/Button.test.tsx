import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Props, Button } from "../Button";

const props: Props = {};

describe("<Button>", () => {
  let view: ShallowWrapper<Props>;
  beforeEach(() => {
    view = shallow(<Button {...props} />);
  });

  it("should match snapshot", () => {
    expect(view).toMatchSnapshot();
  });
});
