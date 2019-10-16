import { shallowMount } from "@vue/test-utils";
import Interpolation from "./Index.vue";

describe("Interpolation", () => {
  it("renders content in the tag passed", () => {
    const wrapper = shallowMount(Interpolation, {
      propsData: {
        content: "test message",
        tag: "span"
      }
    });
    expect(wrapper).toMatchSnapshot();
  });

  it("renders the default slot", () => {
    const wrapper = shallowMount(Interpolation, {
      propsData: {
        content: "test message",
        tag: "span"
      },
      slots: {
        default: "submit"
      }
    });
    expect(wrapper).toMatchSnapshot();
  });

  it("replaces the {slot} pattern", () => {
    const wrapper = shallowMount(Interpolation, {
      propsData: {
        content: "test {slot} message",
        tag: "span"
      },
      slots: {
        default: "submit"
      }
    });
    expect(wrapper).toMatchSnapshot();
  });

  it("replaces custom {{slot}} pattern when regex prop is passed", () => {
    const wrapper = shallowMount(Interpolation, {
      propsData: {
        content: "test {{slot}} message",
        tag: "span",
        regex: /{{(.*?)}}/g
      },
      slots: {
        default: "double braces slot"
      }
    });
    expect(wrapper).toMatchSnapshot();
  });

  it("replaces multiple {slot} pattern", () => {
    const wrapper = shallowMount(Interpolation, {
      propsData: {
        content: "{slot} test {slot} message {slot}",
        tag: "span"
      },
      slots: {
        default: "submit"
      }
    });
    expect(wrapper).toMatchSnapshot();
  });

  it("replaces the {slot} pattern & sets classes on root element", () => {
    const wrapper = shallowMount(Interpolation, {
      propsData: {
        content: "test {slot} message",
        tag: "span",
        class: "test class"
      },
      slots: {
        default: "submit"
      }
    });
    expect(wrapper).toMatchSnapshot();
  });

  it("replaces the {slot} pattern & sets extra props on root element", () => {
    const wrapper = shallowMount(Interpolation, {
      propsData: {
        content: "test {slot} message",
        tag: "span",
        "aria-label": "testing interpolation"
      },
      slots: {
        default: "submit"
      }
    });
    expect(wrapper).toMatchSnapshot();
  });

  it("replaces any named slot", () => {
    const wrapper = shallowMount(Interpolation, {
      propsData: {
        content: "test {hello} message",
        tag: "span"
      },
      slots: {
        hello: "submit"
      }
    });
    expect(wrapper).toMatchSnapshot();
  });

  it("replaces any named & default slot", () => {
    const wrapper = shallowMount(Interpolation, {
      propsData: {
        content: "{slot} test {hello} message",
        tag: "span"
      },
      slots: {
        default: "default slot",
        hello: "submit"
      }
    });
    expect(wrapper).toMatchSnapshot();
  });

  it("replaces multiple named & default slots", () => {
    const wrapper = shallowMount(Interpolation, {
      propsData: {
        content: "{slot} test {hello} message {named}",
        tag: "span"
      },
      slots: {
        default: "default slot",
        hello: "submit",
        named: "named"
      }
    });
    expect(wrapper).toMatchSnapshot();
  });
});
