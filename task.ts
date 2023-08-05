import * as fs from 'fs';
let str: string;
interface duplicate {
  [key: string]: Number;
}
let duplicate = {};
let count: number = 0;
let char: string = '';

//read file

fs.readFile('doc.txt', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    str = data.toString().replace(/\s/g, '');
  }
  let duplicate = DuplicateValue(str);
  // console.log(duplicate)

  write(duplicate);
});

//Duplicate character with frequency

const DuplicateValue = (str: Object) => {
  for (let i in str) {
    for (let j in str) {
      if (str[i] === str[j]) {
        count += 1;
      }
    }
    char = str[i];
    if (count > 1) {
      duplicate[char] = count;
    }
    count = 0;
  }
  return duplicate;
};

//Write file

const write = (obj: object) => {
  let arrObj: object[] = [obj];
  let updateJson = JSON.stringify(arrObj);
  fs.writeFile('doc.json', updateJson, () => {
    console.log('duplicate caracter with frequency saved in doc.json');
    console.log(obj);
  });
};
