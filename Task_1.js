const languages = [
  "Javascript",
  "Python",
  "Java",
  "C#",
  "Go",
  "PHP",
  "Ruby",
  "TypeScript",
];
console.log(languages[0]);
console.log(languages[languages.length - 1]);
console.log(languages[3]);
console.log(languages.length);

languages[2] = "C++";
console.log(languages);

languages.push("HTML")
console.log(languages);

languages.pop()
console.log(languages);



// Array indexes start at 0 in javascript because index 0 represents 0 positions away from the begining
// Javascript returns undefined