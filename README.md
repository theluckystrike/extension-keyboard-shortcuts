# extension-keyboard-shortcuts — Shortcut Manager
> **Built by [Zovo](https://zovo.one)** | `npm i extension-keyboard-shortcuts`

Register keyboard combos, conflict detection, and a styled shortcut hint overlay.

```typescript
import { KeyboardShortcuts } from 'extension-keyboard-shortcuts';
const keys = new KeyboardShortcuts();
keys.register('ctrl+shift+s', () => saveWork(), 'Save work');
keys.register('ctrl+/', () => keys.showHints(), 'Show shortcuts');
keys.start();
```
MIT License
