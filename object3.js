const obj = {};

names.forEach((element) => {
  if (obj.hasOwnProperty(element[0])) {
    obj[element[0]].push(element);
  } else {
    obj[element[0]] = [element];
  }
});

const nestedArray = Object.values(obj);
console.log(obj);





