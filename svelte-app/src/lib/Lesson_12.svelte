<!-- Each blocks -->
<script lang="ts">
    const colors = [
        "white",
        "yellow",
        "orange",
        "red",
        "purple",
        "blue",
        "green",
    ];
    let selected = $state(colors[0]);
</script>

<h1 class="l12" style="color: {selected}">Pick a color</h1>

<div class="l12">
    {#each colors as color, i}
        <button
            class="l12"
            style="background: {color}"
            onclick={() => (selected = color)}
            aria-label={color}>{i + 1}</button
        >
    {/each}
</div>
