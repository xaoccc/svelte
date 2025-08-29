export function trapFocus(node) {
    const previous = document.activeElement;

    // Create an array of elements to be focused
    function focusable() {
        return Array.from(node.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
    }

    // Check is the pressed key is Tab and iterates through the array of focusable elements
    function handleKeydown(event) {
        // If the key is not Tab, the function does nothing
        if (event.key !== 'Tab') return;

        const current = document.activeElement;

        const elements = focusable();
        const first = elements.at(0);
        const last = elements.at(-1)
        // If we press Shift + Tab, we move backwards, so here we handle the end of the array for both Tab and Shift + Tab scenarios
        if (event.shiftKey && current === first) {
            last.focus();
            event.preventDefault();
        }

        if (!event.shiftKey && current === last) {
            first.focus();
            event.preventDefault();
        }
    }

    // The focus action
    $effect(() => {
        // The app intercepts the first focusable element inside the node
        focusable()[0]?.focus();
        // Then on this element 
        node.addEventListener('keydown', handleKeydown);

        // Reset the trap if we close the palette menu
        return () => {
            node.removeEventListener('keydown', handleKeydown);
            if (previous instanceof HTMLElement) {
                previous.focus();
            }
        }
    });
}
