<script>
    import Box from "./Box.svelte";
</script>

<div class="boxes">
    <Box />
    <Box />
    <Box />
</div>


<!-- 
We can chage the styles inside each component from the parent element, using :global() 
Removing :global() leads to Unused CSS selector error 
-->
<style>
    .boxes {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    /* .boxes :global(.box:nth-child(1)) {
        background-color: orangered;
    }

    .boxes :global(.box:nth-child(2)) {
        background-color: rebeccapurple;
    }

    .boxes :global(.box:nth-child(3)) {
        background-color: limegreen;
    } */
    
</style>

<!-- A better solution is using var() -->
 <div class="boxes">
    <Box --color="orangered"/>
    <Box --color="rebeccapurple"/>
    <Box --color="limegreen"/>
</div>



