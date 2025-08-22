<!-- Keyed each blocks -->
<script>
	import Thing from './Thing.svelte';

	let things = $state([
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' }
	]);
</script>

<button onclick={() => things.shift()}>
	Remove first thing
</button>

<!-- Here is where the magic happens -->
<!-- Without (thing.id), shift() works just on the thing.name, the last component is removed and the remaining components ar filled with the existing data -->
<!-- With (thing.id), shift() works just on the first component Thing exactly -->
{#each things as thing (thing.id)}
	<Thing name={thing.name} />
{/each}