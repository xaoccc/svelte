<!-- Key blocks -->
 <script>
        function typewriter(node, { speed = 1 }) {
        const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

        if (!valid) {
            throw new Error(`This transition only works on elements with a single text node child`);
        }

        const text = node.textContent;
        const duration = text.length / (speed * 0.01);

        return {
            duration,
            tick: (t) => {
                const i = Math.trunc(text.length * t);
                node.textContent = text.slice(0, i);
            }
        };
    }

        const advices = [
        "It's wrong to be right.",
        "When painting a room, preparation is key. The actual painting should account for about 40% of the work.",
        "Work is never as important as you think it is.",
        "640K ought to be enough for anybody",
        "Sometimes it's best to ignore other people's advice.",
        "Life can be a lot more interesting inside your head.",
        "Your smile could make someone's day, don't forget to wear it.",
        "Learn how to say 'no'. And to say yes as well.",
        "If you get stuck, try doing the opposite of what the solution requires.",
        "You're not that important; it's what you do that counts.",
        "Enjoy a little nonsense now and then.",
    ];

	let i = $state(-1);

	$effect(() => {
		const interval = setInterval(() => {
			i += 1;
			i %= advices.length;
		}, 2500);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<h1>loading...</h1>
<!-- When i changes, the block contents is updated -->
{#key i}
	<p in:typewriter={{ speed: 5 }}>
		Wisdom {i + 2}: {advices[i]}
	</p>
{/key}