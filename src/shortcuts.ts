/**
 * Keyboard Shortcuts — Register and manage keyboard shortcuts
 */
export class KeyboardShortcuts {
    private bindings = new Map<string, { handler: () => void; description: string }>();
    private active = false;

    /** Register a shortcut */
    register(combo: string, handler: () => void, description: string = ''): this {
        this.bindings.set(combo.toLowerCase(), { handler, description });
        return this;
    }

    /** Unregister a shortcut */
    unregister(combo: string): this { this.bindings.delete(combo.toLowerCase()); return this; }

    /** Start listening */
    start(): this {
        if (this.active) return this;
        this.active = true;
        document.addEventListener('keydown', this.handleKeyDown);
        return this;
    }

    /** Stop listening */
    stop(): this { this.active = false; document.removeEventListener('keydown', this.handleKeyDown); return this; }

    private handleKeyDown = (e: KeyboardEvent): void => {
        const parts: string[] = [];
        if (e.ctrlKey || e.metaKey) parts.push('ctrl');
        if (e.shiftKey) parts.push('shift');
        if (e.altKey) parts.push('alt');
        if (e.key !== 'Control' && e.key !== 'Shift' && e.key !== 'Alt' && e.key !== 'Meta') parts.push(e.key.toLowerCase());
        const combo = parts.join('+');
        const binding = this.bindings.get(combo);
        if (binding) { e.preventDefault(); binding.handler(); }
    };

    /** List all registered shortcuts */
    list(): Array<{ combo: string; description: string }> {
        return Array.from(this.bindings.entries()).map(([combo, { description }]) => ({ combo, description }));
    }

    /** Check for conflicts */
    hasConflict(combo: string): boolean { return this.bindings.has(combo.toLowerCase()); }

    /** Show shortcut hint overlay */
    showHints(): HTMLElement {
        const overlay = document.createElement('div');
        Object.assign(overlay.style, {
            position: 'fixed', inset: '0', background: 'rgba(0,0,0,0.7)', zIndex: '999999',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '-apple-system,sans-serif'
        });
        const card = document.createElement('div');
        Object.assign(card.style, { background: '#fff', borderRadius: '16px', padding: '24px', maxWidth: '400px', width: '90%', maxHeight: '70vh', overflowY: 'auto' });
        card.innerHTML = `<h3 style="margin:0 0 16px;font-size:16px;font-weight:600">Keyboard Shortcuts</h3>` +
            this.list().map((s) => `<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #F3F4F6">
        <span style="font-size:14px;color:#4B5563">${s.description || s.combo}</span>
        <kbd style="background:#F3F4F6;padding:2px 8px;border-radius:4px;font-size:12px;font-family:monospace;color:#1F2937">${s.combo}</kbd></div>`).join('');
        overlay.appendChild(card);
        overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
        document.body.appendChild(overlay);
        return overlay;
    }
}
