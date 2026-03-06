# extension-keyboard-shortcuts

A keyboard shortcut manager for Chrome extensions. Register shortcuts, detect conflicts, and display a hint overlay for users. Built for Manifest V3.

## INSTALL

```bash
npm install extension-keyboard-shortcuts
```

## QUICK START

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

## API REFERENCE

### Methods

**register(combo, handler, description)**

Register a keyboard shortcut. The combo string uses + to separate modifiers and key.

```typescript
keys.register('ctrl+s', () => save(), 'Save document');
keys.register('ctrl+shift+p', () => openPalette(), 'Command palette');
```

**unregister(combo)**

Remove a registered shortcut.

```typescript
keys.unregister('ctrl+s');
```

**start()**

Begin listening for keyboard events. Returns this for chaining.

```typescript
keys.start();
```

**stop()**

Stop listening for keyboard events. Returns this for chaining.

```typescript
keys.stop();
```

**list()**

Return all registered shortcuts as an array of objects containing combo and description.

```typescript
const shortcuts = keys.list();
// [{ combo: 'ctrl+shift+s', description: 'Save work' }, ...]
```

**hasConflict(combo)**

Check if a shortcut combo is already registered.

```typescript
if (keys.hasConflict('ctrl+s')) {
    console.log('Shortcut already in use');
}
```

**showHints()**

Display an overlay showing all registered shortcuts. The overlay is a modal that users can dismiss by clicking outside. Returns the overlay DOM element.

```typescript
keys.showHints();
```

### Combo Format

Use lowercase letters and + separators. Modifier keys: ctrl, shift, alt, meta.

```typescript
'ctrl+c'      // Copy
'ctrl+shift+v' // Paste without formatting
'alt+f'       // Open file
'meta+k'      // Command+K on Mac
```

## ABOUT

Maintained by theluckystrike. Built for Chrome extension developers who need a simple, zero-dependency solution for managing keyboard shortcuts in their extensions.

For issues and contributions, please refer to the CONTRIBUTING guide.
