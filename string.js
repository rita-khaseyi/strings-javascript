let name="Beautiful";
let substract=name.substr(-4,4);
console.log(substract);
//inserting
const food="I was feeling hungry today";
let feed="Eat";
var post=5;
var wording=[food.slice(0, post)+ feed+food.slice(post)];
console.log(wording);
//counting
const story="the quick fox jumps over the lazy dog";
console.log(story.match(/the/g.length));
console.log(story.match(/brown/g.length));

const string1="WE are now going to school";
console.log(string1.includes("now"));
const string2="The child was sitting on the table before it fell";
console.log(string2.includes("sitting"));

let upper="Wonderful";
let result = upper.toUpperCase();
console.log(result);

let lower="amazing";
let answer = lower.toLowerCase();
console.log(answer);

let cases="BEneath";
let response = cases.toLowerCase();
console.log(response);



let title="A beautiful wedding";
title=title.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(" ");
console.log(title);