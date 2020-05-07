import React from "react";

// Use for every test file
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ItemsList from "../src/itemsList";

configure({ adapter: new Adapter() });

describe("ItemList", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ItemsList />);
  });

  test("render a initial state of items", () => {
    expect(wrapper.state("amount")).toBe(0);
  });
});
