<script>
  import svelteLogo from './assets/svelte.svg'
    import Lesson_22 from './lib/Lesson_22/Lesson_22.svelte';
    import Lesson_23 from './lib/Lesson_23/Lesson_23.svelte';
    import Lesson_24 from './lib/Lesson_24/Lesson_24.svelte';

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
    <Lesson_24 />
  </div>

</main>

