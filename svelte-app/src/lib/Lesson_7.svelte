<!-- Effects -->
<script lang="ts">
    let elapsed = $state(0);
    let interval = $state(1000);
    let dark = $state(false);

    $effect(() => {
        const id = setInterval(() => {
            elapsed += 1;
        }, interval)

        return () => clearInterval(id)
    })

    $effect(() => {
        document.body.style.background = dark ? "black" : "white";
        document.body.style.color = dark ? "white" : "black";
        document.title = dark ? "This is a black page" : "This is a white page";
    });


</script>

<button onclick={() => interval *= 2}> slow down</button>
<button onclick={() => interval /= 2}> speed up</button>
<br />
<br />
<button onclick={() => dark = !dark}>
    Toggle Dark Mode
</button>

<p>Elapsed: {elapsed}</p>