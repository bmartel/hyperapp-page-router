import {compile} from "path-to-regexp"
import  {routerFx} from "./subscriptions"
import {route} from "./actions"

// Routes
// Maps to actions which resolve a route name
export const routes = {};
export const views = {};
const reverse = {}

const noop = state => state;

export const r = ({name, path, view = undefined, action = noop}) => {
  if (view) {
    routes[path] = route(name, action)
    views[name] = view
  }
  reverse[name] = reverse[name] || compile(path, {encode: encodeURIComponent})
}

export const url = ({name, params = {}, query = {}}) => {
  if (name in reverse) {
    const rel = reverse[name](params);
    const qs = Object.entries(query).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&');
    return `${rel}${qs ? `?${qs}` : ''}`;
  }
}

const outletView = state => views[router.current](state);

export const Outlet = ({router, view = outletView, fallback, ...state}) => {
  if (router.current in views) {
    return view({router, ...state})
  }
  return fallback
}

export const Router = () => [
  routerFx,
  {
    routes,
  },
];
