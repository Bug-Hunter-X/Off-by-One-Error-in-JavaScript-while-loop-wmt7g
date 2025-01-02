function myFunc() {
  let i = 0;
  while (i < 5) {
    console.log(i++);
  }
}
//Alternatively, to be clearer
function myFunc() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}