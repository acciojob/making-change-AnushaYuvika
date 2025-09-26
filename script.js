const makeChange = (c) => {
  // your name here
	let rem = c;

  // calculate number of coins
  const q = Math.floor(rem / 25);
  remaining %= 25;

  const d = Math.floor(rem / 10);
  remaining %= 10;

  const n = Math.floor(rem / 5);
  remaining %= 5;

  const p = rem; // pennies left

  return { q, d, n, p };
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
