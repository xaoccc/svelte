<!-- Bind Input values -->
<script>
	let name = $state('Johny');
    let age = $state(18);
    let checked = $state(false);
</script>

<input bind:value={name} oninput={() => console.log(name)} />
<br />
<input type="number" bind:value={age} />
<br />
<span>Cat: </span>
<input type="checkbox" bind:checked={checked} />

<h1>Hello, I am {name}!</h1>
<h1>I am {age} years old</h1>
<h1>I am a {(checked) ? 'cat' : 'dog'}</h1>