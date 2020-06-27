import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Role from "../Pages/role";

Enzyme.configure({ adapter: new Adapter() });

describe("Client Page", () => {
  const wrapper = shallow(<Role />);
  it("should contain a image tag", () => {
    const ContentComponent = wrapper.find("React.Fragment");
    expect(ContentComponent.length).toBe(1);
  });
});

/* describe("Content Component", () => {
  const footer = shallow(<Content />);
  it("content page to have a footer", () => {
    const foot = footer.find("footer");
    expect(foot.text()).toBe("George R.R. Martin");
  });
});

describe("Carousel", () => {
  const carousel = shallow(<Carousel />);
  it("check the number of image tags in the carousel of the home page", () => {
    const image = carousel.find("img");
    expect(image.length).toBe(3);
    expect(carousel.getElements()).toMatchSnapshot();
  });
}); */
