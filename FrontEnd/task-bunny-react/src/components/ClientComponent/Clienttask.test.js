import React from "react";
import { shallow, mount } from "enzyme";
import Clienttask from "./Clienttask";

it("Check the state of the Clienttask", () => {
  const wrapper = shallow(<Clienttask />);
  const name = wrapper.state().name;
  const category = wrapper.state().category;
  const description = wrapper.state().description;
  const status = wrapper.state().status;
  const amountpaid = wrapper.state().amountpaid;
  const clientid = wrapper.state().clientid;
  const providerid = wrapper.state().providerid;

  expect(name).toEqual("");
  expect(category).toEqual("");
  expect(description).toEqual("");
  expect(status).toEqual("pending");
  expect(amountpaid).toEqual(0);
  expect(clientid).toEqual(0);
  expect(providerid).toEqual(0);
});

// it("This test counts see to it that there are only 6 input fields", () => {
//   const wrapper = mount(<Clienttask />);
//   expect(wrapper.find("input").length).toEqual(2);
// });

// it("This test ensures that there is only 1 button for the form", () => {
//   const wrapper = mount(<Clienttask />);
//   expect(wrapper.find("button").length).toEqual(1);
// });
