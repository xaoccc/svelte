<script>
    import tippy from "tippy.js";

    let content = $state("Hello!");

    function tooltip(node, fn) {
        $effect(() => {
            const tooltip = tippy(node, fn());
            return () => tooltip[0]?.destroy();
        });
    }
</script>

<input type="text" bind:value={content} />
<!-- tippy accepts some built-in parameters, like placement and offset. Content is the function, which passes the value -->
<button use:tooltip={() => ({ content, placement: "bottom", offset: [0, 20] })}
    >Hover me!</button
>

<style>
    :global {
        [data-tippy-root] {
            --bg: #666;
            background-color: var(--bg);
            color: white;
            border-radius: 0.2rem;
            padding: 0.2rem 0.6rem;
            filter: drop-shadow(1px 1px 3px rgb(0 0 0 / 0.1));
            * {
                transition: none;
            }
        }

        [data-tippy-root]::after {
            --size: 0.4rem;
            content: "";
            position: absolute;
            left: calc(50% - var(--size));
            top: calc(-2 * var(--size) + 1px);
            border: var(--size) solid transparent;
            border-bottom-color: var(--bg);
        }

    }
</style>
