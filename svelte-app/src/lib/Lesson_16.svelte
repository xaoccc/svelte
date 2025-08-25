<!-- Inline event handlers -->
<script>
	let m = $state({ x: 0, y: 0 });
</script>

<div class="pointer" onpointermove={(e) => {
	m.x = e.clientX; 
	m.y = e.clientY;
}}>
	The pointer is at {Math.round(m.x)} x {Math.round(m.y)}
</div>
<h2
    onmouseover={(e) => e.currentTarget.style.color = 'red'} 
    onmouseout={(e) => e.currentTarget.style.color = 'white'} 
    onfocus={() => console.log('ajkhd')}
    onblur={() => console.log('ajkhd')} >
	This becomes red
</h2>

<style>
	.pointer {
        position:absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 90%;
		padding: 1rem 0;
	}
    h2 {
        position:absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

</style>
