<script>
  import svelteLogo from './assets/svelte.svg'

    import Lesson_13 from './lib/Lesson_13/Lesson_13.svelte';
    import Lesson_14 from './lib/Lesson_14/Lesson_14.svelte';

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
    <Lesson_14 />
  </div>

</main>

