// part I

const make_square = (a, counter, cf) => {
  if (a === 0) {
    // set 1
  } else {
    counter++;
    const i = Math.floor(a / 2);
    const j = (Math.floor(a / 2) - 1) * -1;
    let x = i;
    let y = j;
    log_if_ready(x, y, counter);

    while (y < i) { y++; counter = cf(counter, x, y); log_if_ready(x, y, counter); }
    while (x > i * -1) { x--; counter = cf(counter, x, y); log_if_ready(x, y, counter); }
    while (y > i * -1) { y--; counter = cf(counter, x, y); log_if_ready(x, y, counter);}
    while (x < i) { x++; counter = cf(counter, x, y); log_if_ready(x, y, counter);}

    return counter;;
  }
}

const exp = 368078;

const log_if_ready = (x, y, counter) => {
  if (counter === exp) {
    console.log(`[${x}, ${y}]:${counter} -> ${Math.abs(x) + Math.abs(y)}`);
  }
}

counter = 1;
let size = 3;
while(counter < exp) {
  counter = make_square(size, counter, counter => counter + 1);
  size += 2;
}

// part II

const make_square2 = (a, counter, cf) => {
  if (a === 0) {
    // set 1
  } else {
    const i = Math.floor(a / 2);
    const j = (Math.floor(a / 2) - 1) * -1;
    let x = i;
    let y = j;
    counter = cf(x, y);
    log2(x, y, counter);

    while (y < i) { y++; counter = cf(x, y); log2(x, y, counter); }
    while (x > i * -1) { x--; counter = cf(x, y); log2(x, y, counter); }
    while (y > i * -1) { y--; counter = cf(x, y); log2(x, y, counter);}
    while (x < i) { x++; counter = cf(x, y); log2(x, y, counter);}

    return counter;;
  }
}

const log2 = (x, y, counter) => {
  if (counter > exp) {
    console.log(`[${x},${y}] = ${counter}`);
  }
};

const stack = {
  '0_0': 1,
};
const cf1 = (x, y) => {
  const res = (stack[`${x + 1}_${y}`] || 0 )
    + (stack[`${x + 1}_${y + 1}`] || 0 )
    + (stack[`${x}_${y + 1}`] || 0 )
    + (stack[`${x - 1}_${y + 1}`] || 0 )
    + (stack[`${x - 1}_${y}`] || 0 )
    + (stack[`${x - 1}_${y - 1}`] || 0 )
    + (stack[`${x}_${y - 1}`] || 0 )
    + (stack[`${x + 1}_${y - 1}`] || 0 );

  stack[`${x}_${y}`] = res;
  return res;
};

counter = 0;
size = 3;
while(counter < exp) {
  counter = make_square2(size, counter, cf1);
  size += 2;
}