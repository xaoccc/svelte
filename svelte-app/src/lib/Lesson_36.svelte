<!-- Getters and setters -->
<script>
    const MAX_SIZE = 200;

    class Box {
        get width() {
            return this.#width
        }
        get height() {
            return this.#height
        }
        // Here we can validate the values, using the setters
        set width(value) {
            this.#width = Math.max(0, Math.min(MAX_SIZE, value))
        }

        set height(value) {
            this.#height = Math.max(0, Math.min(MAX_SIZE, value))
        }

        #width = $state(0);
        #height = $state(0);
        area = $derived(this.#width * this.#height);

        constructor(width, height) {
            this.#width = width;
            this.#height = height;
        }

        embiggen(amount) {
            this.width += amount;
            this.height += amount;
        }
    }

    const box = new Box(100, 100);
</script>

<section>
    <label>
        <input type="range" bind:value={box.width} min={0} max={MAX_SIZE} />
        {box.width}
    </label>

    <label>
        <input type="range" bind:value={box.height} min={0} max={MAX_SIZE} />
        {box.height}
    </label>

    <button onclick={() => box.embiggen(10)}>embiggen</button>


    <div class="box" style:width="{box.width}px" style:height="{box.height}px">
        {box.area}
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    label {
        display: flex;
        align-items: center;
    }


    .box {
        background: radial-gradient(at 25% 25%, hsl(15 100 60), hsl(15 100 50));
        border-radius: 2px;
        filter: drop-shadow(0 0 10px hsl(15 100 50 / 0.3));
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
</style>
