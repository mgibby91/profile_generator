const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answerStr = '';

rl.question('What\'s your name? Nicknames are also acceptable ', (nameAns) => {
  answerStr += `\nYour name is ${nameAns}`;
  rl.question("What's an activity you like doing? ", (activityAns) => {
    answerStr += `\nYour favourite activity is ${activityAns}`;
    rl.question("What music do you listen to? ", (musicAns) => {
      answerStr += `\nYour favourite music is ${musicAns}`;
      rl.question("What meal is your favourite? ", (mealAns) => {
        answerStr += `\nYour favourite meal is ${mealAns}`;
        rl.question("What food is your favourite? ", (foodAns) => {
          answerStr += `\nYour favourite food is ${foodAns}`;
          rl.question("What sport is your favourite? ", (sportAns) => {
            answerStr += `\nYour favourite sport is ${sportAns}`;
            rl.question("What is your superpower? ", (superpowerAns) => {
              answerStr += `\nYour superpower is ${superpowerAns}`;
              console.log(answerStr);
              rl.close();
            });
          });
        });
      });
    });
  });

});