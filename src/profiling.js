import { unstable_trace as trace } from "scheduler/tracing";

export default object =>
  Object.keys(object).reduce((memo, name) => {
    const action = object[name];
    memo[name] = (...args) =>
        trace(name, performance.now(), () => action(...args));
    return memo;
  }, {} );