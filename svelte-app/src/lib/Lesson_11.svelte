<!-- If-else -->
<script lang='ts'>
    let num = 0;
</script>

<button onclick={() => num += 1}>Increase num</button>
{#if num > 10}
    <p>The number {num} is bigger than 10</p>
{:else if num == 10}
    <p>The number is {num}</p>
{:else}
    <p>The number {num} is smaller than 10</p>
{/if}