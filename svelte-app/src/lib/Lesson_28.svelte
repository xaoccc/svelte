<!-- Adding parameters to a directive -->

<script>
    import { fly } from 'svelte/transition'
    let visible = $state(true);
</script>

<label for="my-input">
    <input type="checkbox" name="my-input" bind:checked={visible} />
    visible
</label>

{#if visible}
<!-- Here we make the fly customized by adding parameters -->
    <p transition:fly={{y: -500, x: -500, duration: 2000}}>This is magic</p>
{/if}

