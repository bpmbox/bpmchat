function myFunction04_08_01() {
  let num = 1;
  for (let i = 1; i <= 10; i++) {
    num *= 2;
    console.log(`iの値: ${i}, numの値: ${num}`);
    if (num > 50) {
      break;
    }
  }
}

function myFunction04_08_02() {
  for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      continue;
    }
    console.log(`iの値: ${i}`);
  }
}

function myFunction04_08_03() {
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      if (i === 2 && j === 2) {
        break;
      }
      console.log(`iの値: ${i}, jの値: ${j}`);
    }
  }
}

function myFunction04_08_04() {
  outerLoop:
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      if (i === 2 && j === 2) {
        break outerLoop;
      }
      console.log(`iの値: ${i}, jの値: ${j}`);
    }
  }
}

