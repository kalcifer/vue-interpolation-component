# vue-interpolation-component

A component for [Vue][1] that renders elements into a format string containing replacement fields. It comes in handy when working with dynamic text elements like localized strings of a translation library.

## Installation

Install via npm:

```bash
% npm install vue-interpolation-component
```

## Usage

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

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

### Run your unit tests

```
yarn run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

[1]: https://vuejs.org
