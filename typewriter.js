const sentence = "hello there from lighthouse labs";

const animateString = (str) => {
  let t = 0;
  let newString = str + "\n";
  for(const char of newString) {
    t += 50;
    setTimeout(() => {
      process.stdout.write(char);
    }, t);
  }
}
animateString(sentence);