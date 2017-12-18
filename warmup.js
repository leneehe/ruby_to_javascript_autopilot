var apples = 14;
console.log(apples);
console.log("I have " + apples + " apples.");

var materials = ['wood', 'metal', 'stone'];
let words = {
  elephant: "The world's largest land mammal.",
  school: 'A place of learning.',
  icecream: 'A delicious milk-based dessert.',
};

var num = 16;
if (num > 10) {
  console.log(num + ' is greater than 10.');
} else if (num === 10) {
  console.log(num + ' is exactly 10.');
} else {
  console.log(num + ' must be less than 10.');
}

for (var count = 0; count < 10; count++) {
  console.log('Doing the same thing over and over.');
}

var base = 5;
for (var i = 1; i <= 20; i++) {
  console.log(i + base);
}

var total = 0;
for (var x = 1; x <=100; x++) {
  total += x;
}
console.log(total);

for (var h = 3; h <= 15; h++) {
  if (h > 9) {
    console.log('You can get on the rollercoaster!');
  } else {
    console.log('You are too short to ride this rollercoaster.')
  }
}

var containers = ['purse', 'wallet', 'backpack'];
var index = 0;
while (index < containers.length) {
  console.log(containers[index]);
  index++;
}

function helloWorld(){
  console.log('Hello world!');
}
helloWorld();

var add = function(firstNum, secondNum) { return firstNum + secondNum; };
var amount = add(5, 7);
console.log(amount);
