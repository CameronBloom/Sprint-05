let time = 0;

const timeMachine = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve((time += 1000));
    }, 1000);
  })
};

timeMachine()
  .then(newTime => {
    const myTime = newTime / 1000;
    return `${myTime} seconds have passed\n  -> this value gets passed to the next then()`;
  })
  .then(newTimeReturnValue => {
    newTimeReturnValue += `\n  -> this line was added by the second then()`;
    console.log(newTimeReturnValue);
  });

const parseTime = (ms) => {
  return new Promise((resolve, reject) => {
    const timeString = time / 1000;
    if (ms > 999) {
      resolve(`${timeString} seconds have passed`);
    } else {
      reject(new Error(`ms is less than 1 second... promise rejected!`));
    }
  });
};

timeMachine()
  .then(parseTime)
  .then(parseTimeValue => {
    console.log(parseTimeValue);
  })
  .catch(error => {
    console.log(error);
  });


const timeWarp = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (1 === 1) {
        time += (1000 * 60);
        resolve({ updateTime: time, updateMessage: `are you feeling alright? you blacked out for a moment.`});
      } else {
        reject(new Error(`the time warp failed!`));
      }
    }, 1000);
  })
}

timeMachine()
  .then(parseTime)
  .then(timeWarp)
  .then(time => {
    console.log(`${time["updateMessage"]} ${time["updateTime"] / 1000} seconds have passed.`);
  })
  .catch(error => {
    console.log(error);
  });

// const parseTime = ms => {
//   return new Promise((resolve, reject) => {
//     const timeString = time / 1000;
//     if (ms > 999) {
//       resolve(`${timeString} seconds have passed`);
//     } else {
//       reject(new Error(`ms is less than 1 second promise rejected!`));
//     }
//   });
// };

// timeMachine()
//   .then(parseTime)
//   .then(timePassed => {
//     console.log(timePassed); // --> OUTPUT: DOES NOT RUN
//   })
//   .catch(err => {
//     console.log(err); // --> OUTPUT: ​​​​​[Error: ms is less than 1 second promise rejected!]​​​​​
//   });