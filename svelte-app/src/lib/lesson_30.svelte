<!-- Create custom transitions(spin) and directives(colorize) -->
<script lang="ts">
    import { fade } from "svelte/transition";
    import { elasticOut } from "svelte/easing";

    const colorize = (node) => {
        node.style.color = "red";
        node.style.fontSize = "5rem";
    };
    let color_change = $state(false);
    let spin_text = $state(false);

    const spin = (node, { duration }) => {
        return {
            duration,
            css: (t, u) => {                
                // We can do the transition without elasticOut 
                // return `
                //     transform:  rotate(${t * 1080}deg);
                //     color: hsl(${Math.trunc(t * 360)}, ${Math.min(100, 1000*u)}%, ${Math.min(50, 500*u)}%)
                // `
                // or with elasticOut, which is cooler:
                const eased = elasticOut(t);
                return `
                    transform:  rotate(${eased * 720}deg);
                    color: hsl(${Math.trunc(t * 360)}, ${Math.min(100, 1000*u)}%, ${Math.min(50, 500*u)}%)
                `
            },
        };
    };
</script>

<label for="change-color">
    <input type="checkbox" name="change-color" bind:checked={color_change} />
    Change color
</label>
<label for="spin-text">
    <input type="checkbox" name="spin-text" bind:checked={spin_text} />
    Spin text
</label>


{#if color_change}
    <p use:colorize>The big red text</p>
{:else}
    <p>The color is white</p>
{/if}

{#if spin_text}
    <p in:spin={{ duration:3000 }} out:fade>Magic spinning text</p>
{/if}


