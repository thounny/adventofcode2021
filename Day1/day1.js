//jshint esversion:6

const fs = require('fs');
const lines = fs
    .readFileSync("day1.txt", { encoding: 'utf8' })
    .split('\n')
    .filter((x) => Boolean(x))
    .map((x) => parseInt(x));

console.log(lines);

let increased = 0;

for (let i = 1; i < lines.length; i++) {
    const last = lines[i - 1];
    const current = lines[i];
    if (current > last) {
        increased++;
    }
}

console.log(increased);

let increased2 = 0;

for (let i = 3; i < lines.length; i++) {
    const last = lines[i - 1] + lines[i - 2] + lines[i - 3];
    const current = lines[i] + lines[i - 1] + lines[i - 2];
    if (current > last) {
        increased2++;
    }
}

console.log(increased2);




//https://adventofcode.com/2021/day/1/input