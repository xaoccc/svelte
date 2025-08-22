<!-- Here we have default value for age -->
<script lang="ts">
    let { age = 18 } = $props();
</script>

<p>I am {age} years old.</p>