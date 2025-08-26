<!-- Component events -->
<!-- We can transfer component events as any variable, using $props() -->

<script>
    import Stepper from "./Stepper.svelte";
    let value = $state(0)
    let otherValue = $state(1000);
    const increase = () => otherValue *= 10;
    const decrease = () => otherValue /= 10;
</script>
<p>{value}</p>
<!-- The functions are in the component block -->
<Stepper decrement={() => value -= 1} increment={() => value += 1} />
<p>{otherValue}</p>
<!-- The functions are in the script block -->
<Stepper decrement={decrease} increment={increase} />