# React Profiler Tool Workshop

The purpose of this repo is test profiler tool using different React-like
architectures.

I've created application called **MiniTrovit**, that consists in a simple SERP page 
with some Trovit ads. To try the different versions of how React is performing in terms of 
rendering just check out the following branches.
 - [react-standalone](https://github.com/alexhoma/react-profiler-tool/tree/react-standalone)
 - [with-react-memo](https://github.com/alexhoma/react-profiler-tool/tree/with-react-memo)
 - [with-react-redux](https://github.com/alexhoma/react-profiler-tool/tree/with-react-redux)

### React standalone

A version without any addon or optimization.

```
git checkout react-standalone && npm i
```

### With React Memo / PureComponent

This branch uses all functional components with React Memo to prevent 
useles renders.

```
git checkout with-react-memo && npm i
```

### With React Redux

This branch uses React with Redux, to handle application global state
and prevent re-render components if any prop have changed.

```
git checkout with-react-redux && npm i
```