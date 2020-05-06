import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// Use for every test file
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("POS", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test("renders learn react link", () => {
    expect(wrapper.find("h1").text()).toContain("Hello World");
    // const { getByText } = render(<App />);
    // const linkElement = getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
  });

  test("render a button", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test("render a initial state of items", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("render the click event when increment", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });
});
