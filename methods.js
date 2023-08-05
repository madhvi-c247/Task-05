"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var str;
fs.readFile('ArrayOfObject.json', function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        str = data.toString();
        var arrData = JSON.parse(str);
        console.log(arrData);
        //push Method
        arrData.push({ address: 'nagar' });
        console.log(arrData);
        //pop Method
        arrData.pop({ age: 23 });
        console.log(arrData);
        //unsift Method
        arrData.unsift({ Age: 20 });
        console.log(arrData);
        //unsift Method
        arrData.sift({ Age: 20 });
        console.log(arrData);
        //slice Method
        arrData.slice(3, 5);
        console.log(arrData);
    }
});
