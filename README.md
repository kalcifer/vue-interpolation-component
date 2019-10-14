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

default slot:

```html
<Interpolation tag="p" content="test {slot} message">
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

with named slot:

```html
<Interpolation tag="div" content="{hello} test {slot} message">
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

with custom formatter:

```html
<Interpolation content="test {{slot}} message" tag="p" regex="/{{(.*?)}}/g">
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
