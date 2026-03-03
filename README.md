# extension-keyboard-shortcuts — Keyboard Shortcut Manager

[![npm](https://img.shields.io/npm/v/extension-keyboard-shortcuts.svg)](https://www.npmjs.com/package/extension-keyboard-shortcuts)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-green.svg)]()

> **Built by [Zovo](https://zovo.one)** — shortcuts across 18+ Chrome extensions

**Register keyboard combos, conflict detection, and shortcut hint overlay** for Chrome extensions. Zero runtime dependencies.

## 📦 Install

```bash
npm install extension-keyboard-shortcuts
```

## 🚀 Quick Start

```typescript
import { KeyboardShortcuts } from 'extension-keyboard-shortcuts';

// Create shortcuts manager
const keys = new KeyboardShortcuts();

// Register shortcuts
keys.register('ctrl+shift+s', () => {
    saveWork();
}, 'Save work');

keys.register('ctrl+/', () => {
    keys.showHints();
}, 'Show shortcuts');

// Start listening
keys.start();
```

## ✨ Features

### Shortcut Registration

```typescript
// Simple shortcuts
keys.register('ctrl+s', save);
keys.register('alt+f', openFile);

// With modifiers
keys.register('ctrl+shift+p', openCommandPalette);
keys.register('meta+option+space', triggerAction);

// Prevent default
keys.register('ctrl+w', closeTab, { preventDefault: true });
```

### Conflict Detection

```typescript
// Check for conflicts before registering
const conflict = keys.checkConflict('ctrl+s');
if (conflict) {
    console.log('Conflict with:', conflict);
}

// Get all conflicts
const allConflicts = keys.getConflicts();
```

### Shortcut Hints

```typescript
// Show overlay with all shortcuts
keys.showHints(); // Press Ctrl+/ to toggle

// Customize hint style
keys.setHintOptions({
    position: 'bottom-right',
    theme: 'dark',
    opacity: 0.9
});
```

### User Customization

```typescript
// Let users rebind shortcuts
keys.enableRebinding();

// Get current bindings
const bindings = keys.getBindings();

// Save custom bindings
await keys.saveBindings();
```

## API Reference

### `KeyboardShortcuts`

| Method | Description |
|--------|-------------|
| `register(combo, handler, description)` | Register shortcut |
| `unregister(combo)` | Remove shortcut |
| `start()` | Start listening |
| `stop()` | Stop listening |
| `showHints()` | Show hint overlay |
| `hideHints()` | Hide hint overlay |
| `checkConflict(combo)` | Check for conflicts |
| `getBindings()` | Get all bindings |

### Options

```typescript
interface ShortcutOptions {
    description?: string;
    preventDefault?: boolean;
    enabled?: boolean;
}
```

## 📄 License

MIT — [Zovo](https://zovo.one)
