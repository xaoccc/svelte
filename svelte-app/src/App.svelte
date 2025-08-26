<script>
  import svelteLogo from './assets/svelte.svg'

    import Lesson_17 from './lib/Lesson_17/Lesson_17.svelte';

</script>

<main>
  <div>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Svelte Exercises</h1>
  <h3>Each component will be a new lesson</h3>

  <div class="card">
    <Lesson_17 />
  </div>

</main>

