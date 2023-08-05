"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var str;
var duplicate = {};
var count = 0;
var char = '';
//read file
fs.readFile('doc.txt', function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        str = data.toString().replace(/\s/g, '');
    }
    var duplicate = DuplicateValue(str);
    // console.log(duplicate)
    write(duplicate);
});
//Duplicate character with frequency
var DuplicateValue = function (str) {
    for (var i in str) {
        for (var j in str) {
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
var write = function (obj) {
    var arrObj = [obj];
    var updateJson = JSON.stringify(arrObj);
    fs.writeFile('doc.json', updateJson, function () {
        console.log('duplicate caracter with frequency saved in doc.json');
        console.log(obj);
    });
};
