<!-- Await blocks -->
<script>
	import { roll } from './utils.js';

	let promise = $state(roll());
    let numberGlobal = $state(null); // We store the number from the promise here
</script>

<button onclick={() => promise = roll()}>
	roll the dice
</button>

{#await promise}
<p>...rolling</p>
{:then number}
	<p>number is {number}</p>
    {@html (numberGlobal = number, '')} 
{:catch error}
    {@html (numberGlobal = 'No value to get', '')} 
	<p>{error}</p>
{/await}

<!-- How to use the number outside the async-await block -->
<!-- Sometimes we get external data (from db maybe) and we need to operate with it here -->

<p>Number outside the async block: {numberGlobal}</p>

