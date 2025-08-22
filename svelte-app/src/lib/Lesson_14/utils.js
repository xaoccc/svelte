export async function roll() {
	// Fetch a random number from 0 to 100
	// (with a delay, so that we can see it)
	return new Promise((fulfil, reject) => {
		setTimeout(() => {
			// simulate a flaky network
            let num = Math.floor(Math.random() * 100)
			if (num < 10) {
				reject(new Error(`Number ${num} less than 10`));
				return;
			}

			fulfil(num + 1);
		}, 1000);
	});
}