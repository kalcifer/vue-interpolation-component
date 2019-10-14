# vue-interpolation-component

A component for [Vue][1] that renders elements into a format string containing replacement fields. It comes in handy when working with dynamic text elements like localized strings of a translation library.

## Installation

Install via npm:

```bash
% npm install vue-interpolation-component
```

## Usage

```javascript
import Interpolation from 'vue-interpolation-component';
```

### Default Slot

```html
<Interpolation
  content="test {slot} message"
  tag="p">
  <a href="https://example.com">
    example website
  </a>
</Interpolation>
```

Output:

```html
<p>
  test
  <a href="https://example.com">
    example website
  </a>
  message
</p>
```

### Named Slot:

```html
<Interpolation
  content="{hello} test {slot} message"
  tag="div">
  <p slot="hello">hello slot</p>
  <a href="https://example.com">
    example website
  </a>
</Interpolation>
```

Output:

```html
<div>
  <p>hello slot</p>
  test
  <a href="https://example.com">
    example website
  </a>
  message
</div>
```

### With custom formatter:

```html
<Interpolation
  content="test {{slot}} message"
  regex="/{{(.*?)}}/g"
  tag="p">
  <a href="https://example.com">
    example website
  </a>
</Interpolation>
```

Output:

```html
<p>
  test
  <a href="https://example.com">
    example website
  </a>
  message
</p>
```

[1]: https://vuejs.org
