<!-- Using 2 directives in one element -->
<script>
    import {fly, fade} from 'svelte/transition'
    let visible = $state(true);
</script>

<label for="my-input">
    <input type="checkbox" name="my-input" bind:checked={visible} />
    visible
</label>

{#if visible}
    <!-- Transition is divided into in and out actions which use separate directives  -->
    <p in:fade out:fly={{y: 200, duration: 2000}}>Magic text</p>
{/if}