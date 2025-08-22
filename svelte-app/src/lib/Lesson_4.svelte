<!-- State -->
<!-- Usually we do not need $state rune for primitive data types (int, str, float) and object properties which are primitive data types  -->
<!-- But when a rune $state is used anywhere in the file, Svelte switches to reactive mode
 which disables the reactive behaviour of the primitive values  -->
 <!-- So in this code the state is updated only at incrementA, which triggers updates on the other variables -->
<script lang="ts">

    let count = 0;
    const increment = () => {
        count ++;    
    }

    let countA = $state([1,2,3]);
    const incrementA = () => {
        countA.push(4);    
    }

    let countB = "bira";
    const incrementB = () => {
        countB += "a";    
    }
</script>

<button onclick={increment}>{count}</button>
<br>
<button onclick={incrementA}>{countA}</button>
<br>
<button onclick={incrementB}>Iskam {countB}</button>