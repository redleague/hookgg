# Hook.gg

Hook.gg is a library for sending webhooks to Discord.

[![NPM](https://nodei.co/npm/hook.gg.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/hook.gg/)

## Getting Started

```bash
npm install hook.gg --save
```

## Support
Found an issue while using this wrapper or have suggestions? Feel free to join the [Red League](https://discord.gg/HCjEmNpp8t) Discord Server, send a bug report or a pull request.


## Available Methods

## Client#send

```ts
Client#send({
 content: 'Some random message to send', //length must not be more than 2,000 characters
 embed: { title: 'some title', description: 'some description' },
 avatar_url: 'link of the image',
 username: 'username'
 });
```
## Examples

### Typescript

```ts

import { HookClient } from 'hook.gg';

const client: HookClient = new HookClient({
 token: 'Webhook Token'
});

(async () => await client.send({ content: 'Some message' }))();
```

### Javascript

```js
const { HookClient } = require('hook.gg');

const client = new HookClient({
 token: 'Webhook Token'
});

(async () => await client.send({ content: 'Some message' }))();
```

Made with ❤️ using Typescript by [Red League](https://github.com/redleague)
