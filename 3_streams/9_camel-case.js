const { Transform } = require("stream");

const camelCase = new Transform({
  transform(chunk, encoding, callback) {
    this.push(
      chunk
        .toString()
        .split(" ")
        .map(word => {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join("")
    );
    callback();
  }
});

process.stdin.pipe(camelCase).pipe(process.stdout);
