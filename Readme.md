<div align="center">
  <p><a href="http://www.entypo.com/">Entypo+</a> — 411 carefully crafted premium pictograms by <a href="http://www.danielbruce.se/">Daniel Bruce</p>
  <img width="480" alt="Entypo+ icons" src="https://raw.githubusercontent.com/geakstr/entypo-icons/master/entypo-icons.png">
</div>

## Installation

`npm install @entypo-icons/core @entypo-icons/utils @entypo-icons/react --save`

## Usage

This package provides several options how to use it. Each of them has pros and cons described below. Choose right option for your cases.

### Use `EntypoManager`

In most cases this is **the best option** from a _user_ perspective, but it requires granular setup from a _developer_. `EntypoManager` builds icons library. Icons from library will be bundled into application and will be preloaded before actual usage at runtime.

#### Pros

✅ Only imported icons will be bundled to application (small bundle size).
✅ Icons will be preloaded before usage (user will see icons when application loaded).

#### Cons

❗️ Need to import each icon separately (so boring).
❗️ In case of using a large number (say hundreds) of icons application bundle size will grow.

```jsx
// Import each icon separately
import iconCake from "@entypo-icons/core/icons/cake";
import iconFlower from "@entypo-icons/core/icons/flower";
import { EntypoManager } from "@entypo-icons/utils";
import { EntypoIcon } from "@entypo-icons/react";

// Add them to library.
// It's ok to call `addIcons` multiple times at any time at any places
EntypoManager.addIcons(iconCake, iconFlower);

// Just use icons from library everywhere
...
<Button>
  <EntypoIcon size={20} color="blue" icon="cake" /> Like
</Button>
...
<p>This is flower <EntypoIcon size={10} color="green" icon="flower" /></p>
...
```

### Use asynchronous `<EntypoSprite />` (with remote sprite)

This component will load all icons (as one sprite file) at once from remote host.

#### Pros

✅ All icons will be loaded at once (useful, no need to import each icon separately).
✅ Icons won't bundled into application (zero-cost from bundle size perspective).

#### Cons

❗️ It will takes some time to load sprite by HTTP (user will see nothing before icons are loaded).

```jsx
import { EntypoIcon, EntypoSprite } from "@entypo-icons/react";

// Somewhere at the top level of application
<App>
  ...
  {/* will load sprite from package bundle from unpkg.com */}
  <EntypoSprite />
  {/* also it's possible to provide `url` to load from your place */}
  <EntypoSprite url="/static/entypo-sprite.svg" />
  ...
</App>

// Just use any icons everywhere
...
<Button>
  <EntypoIcon size={20} color="blue" icon="cake" /> Like
</Button>
...
<p>This is flower <EntypoIcon size={10} color="green" icon="flower" /></p>
...
```

### Use synchronous `<EntypoSprite />` (with bundled sprite)

This component will bundle all icons into application.

#### Pros

✅ All icons will be loaded at once (useful, no need to import each icon separately).
✅ Icons will be preloaded before usage (user will see icons when application loaded).

#### Cons

❗️ Bundle will contains all icons (~60Kb gzipped).

```jsx
import sprite from "@entypo-icons/core/sprite";
import { EntypoIcon, EntypoSprite } from "@entypo-icons/react";

// Somewhere at the top level of application
<App>
  ...
  <EntypoSprite html={sprite} />
  ...
</App>

// Just use any icons everywhere
...
<Button>
  <EntypoIcon size={20} color="blue" icon="cake" /> Like
</Button>
...
<p>This is flower <EntypoIcon size={10} color="green" icon="flower" /></p>
...
```
