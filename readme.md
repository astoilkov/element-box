# element-box

> Work easily with an element's position and dimensions

[![Gzipped Size](https://img.shields.io/bundlephobia/minzip/element-box)](https://bundlephobia.com/result?p=element-box)
[![Build Status](https://img.shields.io/github/actions/workflow/status/astoilkov/element-box/main.yml?branch=main)](https://github.com/astoilkov/element-box/actions/workflows/main.yml)

## Install

```bash
npm install element-box
```

## Why

I work with the dimensions and positions of elements rarely enough to forget the details, but often enough to frustrate me when it hampers my flow and productivity.

What was the difference between `clientWidth` and `offsetWidth`? Did `element.getBoundingClientRect
()` include the borders or not?

This library provides a friendly API that lets you think about the topic more easily while adding functions that are otherwise hard to write on your own.

## API

#### `getContentBox(element: HTMLElement): DOMRect`

Element's dimensions without border, padding, and margin — `element.getBoundingClientRect() - border - padding`.

#### `getPaddingBox(element: HTMLElement): DOMRect`

Element's dimensions with padding but without border and margin — `element.getBoundingClientRect() - border`.

#### `getBorderBox(element: HTMLElement): DOMRect`

Equivalent to `element.getBoundingClientRect()`.

#### `getMarginBox(element: HTMLElement): DOMRect`

Element's dimensions with padding, border, and margin — `element.getBoundingClientRect() + margin`.

#### `getWindowBox(): DOMRect`

Something like `window.getBoundingClientRect()` if it existed. If you are wondering, `document.documentElement.getBoundingClientRect()` won't probably do what you want.

#### `getElementBox(element: HTMLElement, options): DOMRect`

Would be easier to show you examples:
```ts
// like that:
getElementBox(element, {
    includePadding: true,
    includeBorder: false,
    includeMargin: false
})

// or like that:
getElementBox(element, 'content-box')
getElementBox(element, 'padding-box')
getElementBox(element, 'border-box')
getElementBox(element, 'margin-box')
```
