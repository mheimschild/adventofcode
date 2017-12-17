const make_square = (a, counter) => {
  if (a === 0) {
    // set 1
  } else {
    counter++;
    const i = Math.floor(a / 2);
    const j = (Math.floor(a / 2) - 1) * -1;
    let x = i;
    let y = j;
    log_if_ready(x, y, counter);

    while (y < i) { y++; counter ++; log_if_ready(x, y, counter); }
    while (x > i * -1) { x--; counter ++; log_if_ready(x, y, counter); }
    while (y > i * -1) { y--; counter ++; log_if_ready(x, y, counter);}
    while (x < i) { x++; counter ++; log_if_ready(x, y, counter);}

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
  console.log(`square: ${size}`);
  counter = make_square(size, counter);
  size += 2;
}
