const makeChange = (c) => {
  // your name here
	let rem = c;

  const q = Math.floor(rem / 25);
  rem %= 25;

  const d = Math.floor(rem / 10);
  rem %= 10;

  const n = Math.floor(rem / 5);
  rem %= 5;

  const p = rem; 

  return { q, d, n, p };
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
