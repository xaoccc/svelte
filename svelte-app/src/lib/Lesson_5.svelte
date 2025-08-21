<!-- Deep State -->
<!-- In Lesson 4 we reassign the object, here we just mutate(update) it and it still works -->
<script lang="ts">
	let numbers = $state([11, 22, 33, 44]);

	function addNumber() {
		numbers.push(numbers[numbers.length - 1] + 11)
	}
</script>

<p>{numbers.join(' + ')} = {numbers.reduce((a, b) => a + b, 0)}</p>

<button onclick={addNumber}>
	Add a number
</button>