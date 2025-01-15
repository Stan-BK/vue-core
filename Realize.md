# Vue Core

## Entrance

The whole program's entrance is at vue/src/index.js, submodules are start and hydricated here that support Vue's core features, it will end up to export the abilities of create Vue instance.

## compiler-core

abstract syntax tree (AST) parser and code generator for Vue template.

> There are some kind of function specified in compiler-core, such as `transform`, `compile` and `parse`.

> The processing is :
>
> - Parse the template into an AST（function: `parse`）. Use tokenizer (class Tokenizer) to split validate html template generate its corresponding type ast by traverse through node hierarchy.
> - Transform the AST (function: `transform`) in order to hydircate the vue ability such as directive, event, slot, etc.
> - Generate code from the AST (function: `generate`). Deal with module type, template type, SSR, code block type and so on by helpers.
> - Execute the generated code ultimately to create a render function name as Vue.

## compiler-dom

DOM-based runtime for Vue template.

## compiler-sfc

single-file component (SFC) compiler for Vue template.

## runtime-core

core runtime for Vue instance.

## runtime-dom

DOM-based runtime for Vue instance.

## server-renderer

server-side rendering (SSR) for Vue instance.

## shared

shared utilities for Vue.

# Conception

## Virtual DOM

Virtual DOM is a lightweight JavaScript object that represents a real DOM node. It's a lightweight and efficient way to update the UI and reduce the overhead of updating the real DOM.

> VNode
> Virtual DOM is consists by VNode. And VNode consists of three parts: tag, props, and children.
> `runtime-core/src/vnode.ts` has the definition and implementation of VNode.

> Vue use `createXXXNode` function to create VNode.
