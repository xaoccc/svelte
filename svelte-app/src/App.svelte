<script>
  import svelteLogo from './assets/svelte.svg'
    import Lesson_34 from './lib/Lesson_34/Lesson_34.svelte'
    import Lesson_35 from './lib/Lesson_35.svelte';

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
    <Lesson_35 />
  </div>

</main>

