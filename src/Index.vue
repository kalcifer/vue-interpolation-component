<script>
// Usage (default slot):
// <Interpolation
//   tag="p"
//   content="test {slot} message"
// >
//   <a href="https://example.com">
//     example website
//   </a>
// </Interpolation>

// Output:
// <p>
//   test
//   <a href="https://example.com">
//   example website
//   </a>
//   message
// </p>

// Usage (with named slot):
// <Interpolation
//   tag="div"
//   content="{hello} test {slot} message"
// >
//   <p slot="hello">hello slot</p>
//   <a href="https://example.com">
//     example website
//   </a>
// </Interpolation>

// Output:
// <div>
//   <p>hello slot</p>
//   test
//   <a href="https://example.com">
//   example website
//   </a>
//   message
// </div>

// Usage (with custom formatter):
// need to specify regex group
// <Interpolation
//   content="test {{slot}} message"
//   tag="p"
//   regex="/{{(.*?)}}/g"
// >
//   <a href="https://example.com">
//     example website
//   </a>
// </Interpolation>

// Output:
// <p>
//   test
//   <a href="https://example.com">
//   example website
//   </a>
//   message
// </p>
import { generateChildren } from "./helper";

export default {
  name: "Interpolation",
  functional: true,
  props: {
    content: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      required: true
    },
    regex: {
      default() {
        return /{(.*?)}/g;
      },
      type: RegExp
    }
  },
  render(createElement, context) {
    const { data, props, slots } = context;
    const { content, tag, regex } = props;

    return createElement(
      tag,
      data,
      generateChildren(
        regex,
        content,
        slotName => slots()[slotName === "slot" ? "default" : slotName]
      )
    );
  }
};
</script>
