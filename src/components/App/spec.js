import App from "./index";
import React from "react";
import { shallow } from "enzyme";

describe("App component", () => {
  it("Should work", () => {
    const component = shallow(<App />);

    expect(component.text()).toEqual("Hello World!");
  });
});
