# React Address Autocomplete

[![React Address Autocomplete](https://i.ytimg.com/vi/6wXhPYlL2a4/maxresdefault.jpg)](https://www.youtube.com/watch?v=6wXhPYlL2a4)


Looking for an easier way to search for addresses? Check out the React Address Autocomplete Plugin! With this plugin, you can search for addresses using postcodes, towns, and even countries. Plus, it's all made in React with Typescript support, making it super easy to use.

Also provides events like `onSelected` to useful information such as:

- lattitude
- longitude
- country code
- postal code
- state
- zip code

The field has been minimum styling applied so you can utilise your own colors, fonts and ui.

---

## Demo

Full working example: https://rottitime.github.io/react-address-autocomplete/?path=/story/addressautocomplete--default

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/trusting-blackburn-riq4i1?file=/src/App.js)
          
<img src="https://rottitime.github.io/react-address-autocomplete/screenshot.png" alt="screenhshot" />

---

## Installation

### React Address Autocomplete

React Address Autocomplete is available as an [npm package](https://www.npmjs.com/package/@rottitime/react-address-autocomplete).

**npm:**

```sh
npm install @rottitime/react-address-autocomplete
```

---

## Getting started with React Address Autocomplete

Here is an example of a basic app using Material UI's `AddressAutocomplete` component:

```jsx
import AddressAutocomplete from '@rottitime/react-address-autocomplete'

function App() {
  return <AddressAutocomplete />
}
```

---

## Props

- `onSelected`: Triggers once an address has been selected from the list
- `onChange`: as input field changes
- `countrycodes`: Limit search results to one or more countries. must be the ISO 3166-1alpha2 e.g. gb for the United Kingdom, de for Germany.
- `label`: input field label
- `disableStyles`: Remove all styles, Useful if you want to apply your own designs
- all other props for `input` can also be passed

---

## Donations

Your support means so much to me! If you want to treat me you can do so here, but non-financial support is appreciated as much. I’d love it if you’d tell your friends about [my app](https://apimock.net/) or about my work.
On the bottom of the page you can find how your donation is used.

<a href="https://www.buymeacoffee.com/rottitime" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
