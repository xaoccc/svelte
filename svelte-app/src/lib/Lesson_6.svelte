<!-- Derived State and Inspect State-->
<script lang="ts">
    let nums = $state([11, 22, 33, 44])
    let numsSum = $derived(nums.reduce((a, b) => a + b, 0))

    const addNumber = () => {
        nums.push(nums[nums.length - 1] + 11)
        // Inspect by unwrapping the proxy
        console.log($state.snapshot(nums))
        
    }
    // Using $inspect rune for detailed info
    $inspect(nums).with(console.trace)

</script>
    <p>{nums.join(" + ")} = {numsSum}</p>
    <button onclick={addNumber}>Add num</button>

