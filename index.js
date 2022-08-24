/*
```js
    const now = new Date();
     const test = new Date();
```

1. In the code above, what is the `now` variable?
2. What is the type of the `now` variable?
3. In the code above, what is the `Date`?
4. What is the type of `Date`?
5. What do you get when you do `console.log(now)`?
6. What do you get when you do `console.log(Date)`?
7. What do you get when you do `console.log(new Date())`?
8. Is `now` truthy?
9. What do you get when you do `console.log(now === test)`? Why?
10. What do you get when you do `console.log(now === Date)`?
11. What do you get when you do `console.log(now === new Date())`?
12. What do you get when you do `console.log(new Date() === new Date())`? Why?
*/

const now = new Date();
const test = new Date();

//1.It is the declaration variable for the function

console.log(typeof now);
//2. It is an object.

//3.It is the value of now.

//4. A function.

//5. the date of today, and the time
console.log(now);

//6.[Function:Date]
console.log(Date);

//7. The actual date and the time
console.log((new Date));

//8. It's truthy. 
if (now) {
  console.log("✅ now is truthy");
} else {
  console.log("⛔️ now is falsy");
}

//9. I get false, because they're objects and their reference address are different.
console.log(now === test);
console.log(typeof test);

//10. false
console.log(now === Date);

//11.false
console.log(now === new Date());

//12.false, because they're objects and their reference address are different.
console.log(new Date() === new Date());