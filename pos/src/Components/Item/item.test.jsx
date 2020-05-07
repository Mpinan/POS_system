import React from "react";
import Item from "../Item/item";

// Use for every test file
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Item", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Item />);
  });

  test("render a initial state of the number of items", () => {
    expect(wrapper.state("amount")).toBe(0);
  });

  test("render the click event and changes the state of the table which is book/red", () => {
    wrapper.find("#book-item").simulate("click");
    expect(wrapper.state("modal")).toBe(true);
  });

  test("it can book or unbook a table", () => {
    console.log(wrapper.find(".button"));
    wrapper.find("button").simulate("click");
    expect(wrapper.state("modal")).toBe(true);
    wrapper.find("#book-item").simulate("click");
    expect(wrapper.state("modal")).toBe(false);
  });
});
