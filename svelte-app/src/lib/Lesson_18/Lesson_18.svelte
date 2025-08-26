<!-- Events spread -->
<!-- Here we have 3 event handlers, which we pass to the component, using just spread: {...props} -->
<script>
	import BigRedButton from './BigRedButton.svelte';
	import horn from './horn.mp3';

	const audio = new Audio();
	audio.src = horn;

	function honk() {
		audio.load();
		audio.play();
	}

    function changeColorToBlue(e) {
        e.currentTarget.style.background = "blue"
    }
    function changeColorToRed(e) {
        e.currentTarget.style.background = "red"
    }

</script>

<BigRedButton onclick={honk} onmouseover={changeColorToBlue} onmouseout={changeColorToRed} />