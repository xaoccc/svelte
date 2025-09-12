<script>
  import svelteLogo from './assets/svelte.svg'
    import Lesson_27 from './lib/Lesson_27.svelte';
    import Lesson_28 from './lib/Lesson_28.svelte';

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
    <Lesson_28 />
  </div>

</main>

