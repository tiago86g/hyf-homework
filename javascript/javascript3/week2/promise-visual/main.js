// write a variables :
const redPlace = document.querySelector("li:nth-child(1)");
const bluePlace = document.querySelector("li:nth-child(2)");
const greenPlace = document.querySelector("li:nth-child(3)");

const action1 = moveElement(redPlace, { x: 20, y: 300 });
const action2 = moveElement(bluePlace, { x: 400, y: 300 });
const action3 = moveElement(greenPlace, { x: 400, y: 20 });

// move element one by one

function translateOneByOne() {
  action1
  const move1st = function delayer(delay) {
    return new Promise((resolve, reject) => {
            setTimeout(resolve, delay * 1000)
        });
    }

  move1st(3)
    .then(() => {
      console.log("Red element has been moved");
      return action2;
    });

  const move2nd = function delayer(delay) {
    return new Promise((resolve, reject) => {
            setTimeout(resolve, delay * 1000)
        });
    }

  move2nd(4)
    .then(() => {
      console.log("Blue element has been moved");
      return action3;
    });

  const move3rd = function delayer(delay) {
    return new Promise((resolve, reject) => {
            setTimeout(resolve, delay * 1000)
        });
    }

  move3rd(5)
    .then(() => {
      console.log("Green element has been moved");
      return action3;
    });
}

translateOneByOne();

// move elements at the same time

function translateAllAtOnce() {
  const actions = [action1, action2, action3];
  Promise.all(actions).then(() => {
    console.log("All elements has been moved");
  });
}

translateAllAtOnce();