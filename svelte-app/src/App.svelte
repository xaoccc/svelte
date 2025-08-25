<script>
  import svelteLogo from './assets/svelte.svg'

    import Lesson_15 from './lib/Lesson_15.svelte';
    import Lesson_16 from './lib/Lesson_16.svelte';

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
    <Lesson_16 />
  </div>

</main>

