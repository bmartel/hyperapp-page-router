# hyperapp-page-router

An ultra light and simple Hyperapp wrapper for Page router.

```js
npm i hyperapp-page-router
```

[Context Api](https://visionmedia.github.io/page.js/#context)

## Create a Route Action

```js
// actions.js
export const loadIndex = (state, context) => [{
  ...state,
  // set next page state
  title: "Loaded the index view"
}, [
  // run http or other effects to load external data etc.
]];
```

## Create a Route View

Create any component view

```js
// views.js
import { h, text } from "hyperapp"

export const IndexView = ({ title }) => h('h1', {}, text(title));
```

## Register Route

Route actions are optional. Omit this if you just need to load a component view.

```js
// index.js
import { h, app } from "hyperapp"
import { r, Router } from "hyperapp-router-app"
import { loadIndex } from "./actions"
import { IndexView } from "./views"
import App from "./App"

r({ name: "index", path: "/", action: loadIndex, view: IndexView })

app({
 init: { title: "It works!" },
 subscriptions: () => [Router()],
 view: App,
 node: document.getElementById('app')
})
```

## Place the Router Outlet

Normally this will be placed in your main layout or app shell

```js
// App.js
import { h, text } from "hyperapp"
import { Outlet } from "hyperapp-page-router"

export default state =>
  h('div', {}, [
    h('header', {}, h('a', { href: "/" }, text("Home"))),
    Outlet(state)
  ])
```

## Create a Link

Using `url` will allow reverse lookups on the routes registered. You can use this in conjunction with any anchor tag to allow a customizable `Link` component to be used. As long as the resulting tag is an `a` tag, it will just work.

```js
import { h, text } from "hyperapp"
import { url } from "hyperapp-page-router"

const Link = ({ name, params, query, ...state }, children) => h('a', { href: url({ name, params, query }), ...state }, children)
```

## License

[MIT](LICENSE).
