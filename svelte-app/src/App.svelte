<script>
  import svelteLogo from './assets/svelte.svg'

    import Lesson_18 from './lib/Lesson_18/Lesson_18.svelte';
    import Lesson_19 from './lib/Lesson_19.svelte';
    import Lesson_21 from './lib/Lesson_21.svelte';

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
    <Lesson_21 />
  </div>

</main>

