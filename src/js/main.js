// add scripts

console.log("sanity check!");


function intersectFinder (array1, array2) {
  var intersectArray =[];
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j<array2.length; j++) {
      if (array1[i]===array2[j]) {
        intersectArray.push(array1[i]);
      }
    }

  }
  return intersectArray
}

