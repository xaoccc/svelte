<!-- Spreading props -->
<script lang='ts'>
    import Person from "./Person.svelte";
    // Here we do not pass age and it takes the default one. If we add age, then it uses it.
    let props = {name: 'Mitko', address: 'Plovdiv'}
</script>

<Person  {...props}/>