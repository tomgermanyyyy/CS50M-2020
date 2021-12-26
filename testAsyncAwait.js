// const asyncFunc = async () => {
//   const success = await setTimeout(() => console.log("1"), 1000)
//   if (success) {
//     console.log("2")
//   }
// }

// (async () => {
//   await asyncFunc()
// })()

function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}

f1();