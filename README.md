# hyperapp-page-router

An ultra light and simple Hyperapp wrapper for Page router.

```js
npm i hyperapp-page-router
```

[Context Api](https://visionmedia.github.io/page.js/#context)

## Create a Route Action

```js
// actions.js
import { route } from "hyperapp-page-router"

export const loadIndex = route("index", (state, context) => {
  return {
    ...state,
    // set next page state
  }
}, [
  // run http or other effects to load external data etc.
]);
```

## Register Route Action

```js
// index.js
import { h, app } from "hyperapp"
import { router } from "hyperapp-router-app"
import { loadIndex } from "./actions"
import App from "./App"

const routes = {
  "/": loadIndex,
};

app({
 init: {},
 subscriptions: () => [router({ routes })],
 view: state => <App {...state} />,
 node: document.getElementById('app')
})
```

## Create a RouterView

Handle the RouterView outlet component any way you need. Here is a simple example to get started.

```js
// RouterView.js
const Views = {
  index: ({ router }) => <h1>{router.title}</h1>,
};

const RouterView = state => {
  if (state.router.current in Views) {
    const View = Views[state.router.current];
    return <View {...state} />;
  }
  return <div>Not Found</div>;
};
```

```js
// App.js
import { h } from "hyperapp"
import { RouterView } from "./RouterView"

export default state => (
  <div>
    <header>
      <a href="/">Home</a>
    </header>
    <RouterView {...state} />
  </div>
)
```

## Create a Link

You can use any anchor tag mapped to a route that matches your registered routes, or a custom wrapped component,
anything that maps to an anchor tag.

```js
const Link = ({ to }, children) => <a href={to}>{children}</a>;
```

## License

[MIT](LICENSE).
