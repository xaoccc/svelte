<!-- State -->
<script lang="ts">    
    let countA = $state("bira");
    const increment = () => {
        countA += "a";    
    }
</script>

<button onclick={increment}>Iskam {countA}</button>