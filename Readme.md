<div align="center">
  <p><a href="http://www.entypo.com/">Entypo+</a> — 411 carefully crafted premium pictograms by <a href="http://www.danielbruce.se/">Daniel Bruce</a> (CC BY-SA 4.0)</p>
  <p><img width="480" alt="Entypo+ icons" src="https://raw.githubusercontent.com/geakstr/entypo-icons/master/entypo-icons.png"></p>
  <p><code>@entypo-icons/*</code> packages wrap these icons into modular and useful components.</p>
</div>

## Installation

`npm install @entypo-icons/core @entypo-icons/utils @entypo-icons/react --save`

## Usage

For now only react components are available.

```jsx
import { EntypoIcon, EntypoSprite } from "@entypo-icons/react";

// Somewhere at the top level of application
<App>
  <EntypoSprite />
  ...
</App>

// Just use any icons everywhere
<EntypoIcon size={20} color="green" icon="flower" />
```

## Description and advanced usage

There are several options how to load icons. Each of options has pros and cons described below. Choose the right option for your cases.

### `EntypoManager`

In most cases this is the best option from a user perspective, but it requires granular setup from a developer. `EntypoManager` builds icons library. Icons from library will be bundled into application and will be preloaded before actual usage at runtime.

#### ✅ Pros

- Only imported icons will be bundled to application (small bundle size).
- Icons will be preloaded before usage (user will see icons immediately after application was loaded).

#### ❗️ Cons

- Need to import each icon separately (so boring).
- In case of using a large number (say hundreds) of icons application bundle size will grow.

```jsx
// Import each icon separately
import iconCake from "@entypo-icons/core/icons/cake";
import iconFlower from "@entypo-icons/core/icons/flower";
import { EntypoManager } from "@entypo-icons/utils";
import { EntypoIcon } from "@entypo-icons/react";

// Add them to library.
// It's ok to call `addIcons` multiple times at any time at any places
EntypoManager.addIcons(iconCake, iconFlower);

...
// Use icons from library everywhere
<EntypoIcon size={20} color="green" icon="flower" />
```

### Asynchronous `<EntypoSprite />` (remote sprite)

This component will load all icons (as one sprite file) at once from remote host.

#### ✅ Pros

- All icons will be available (useful, no need to import each icon separately).
- Icons won't bundled into application (zero-cost from bundle size perspective).

#### ❗️ Cons

- It will take some time to load sprite by HTTP (user will see nothing before icons are loaded).

```jsx
import { EntypoIcon, EntypoSprite } from "@entypo-icons/react";

// Somewhere at the top level of application
<App>
  {/* will load sprite from package bundle from unpkg.com */}
  <EntypoSprite />
  {/* also it's possible to provide `url` to load from your place */}
  <EntypoSprite url="/static/entypo-sprite.svg" />
  ...
</App>

// Just use any icons everywhere
...
<EntypoIcon size={20} color="green" icon="flower" />
...
```

### Synchronous `<EntypoSprite />` (bundled sprite)

This component will bundle all icons into application.

#### ✅ Pros

- All icons will be available (useful, no need to import each icon separately).
- Icons will be preloaded before usage (user will see icons immediately after application was loaded).

#### ❗️ Cons

- Bundle will contain all icons (~60 Kb gzipped).

```jsx
import sprite from "@entypo-icons/core/sprite";
import { EntypoIcon, EntypoSprite } from "@entypo-icons/react";

// Somewhere at the top level of application
<App>
  <EntypoSprite html={sprite} />
  ...
</App>

// Just use any icons everywhere
...
<EntypoIcon size={20} color="green" icon="flower" />
...
```
