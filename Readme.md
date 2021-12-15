![Github Stars](https://img.shields.io/github/stars/redleague/hookgg?style=for-the-badge&logo=appveyor)
![GitHub issues](https://img.shields.io/github/issues-raw/redleague/hookgg?style=for-the-badge&logo=appveyor)

# About

A light-weight wrapper written in typescript for sending webhooks to discord

# Features 

> ✅ Easy-to-use <br>
> ✅ Stable <br>
> ✅ Open Source

# Installation
Recommended version Node.js 12.x.x

To install all the packages just use:

# Documentation

[Docs](https://redleague.github.io/hookgg/)

# Examples

```ts
import { HookClient } from "hook.gg";

const hook = new HookClient({
    url: "discord webhook url",
    retryOnLimit: true
});

hook.send("Hello from Hook.gg!");
```