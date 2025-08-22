<!-- Declaring props -->
<script lang="ts">
    import Nested from './Age.svelte'   
    import Name from './Name.svelte';
    import Address from './Address.svelte';
</script>

<Name name={'Gosho'} />
<Nested age={42} />
<Address address={'Sofia'} />



