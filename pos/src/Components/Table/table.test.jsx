import React from "react";
import Table from "../Table/table";

// Use for every test file
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("POS", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Table />);
  });

  test("renders learn react link", () => {
    expect(wrapper.find("h1").text()).toContain("Hello Table");
  });

  test("render a button", () => {
    expect(wrapper.find("#book-table").text()).toBe("Book");
  });

  test("render a initial state of items", () => {
    expect(wrapper.find("#busy-value").text()).toBe("false");
  });

  test("render the click event when increment", () => {
    wrapper.find("#book-table").simulate("click");
    expect(wrapper.find("#busy-value").text()).toBe("true");
  });
});
