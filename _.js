const _ = {  
  clamp(number, lower, upper) {
    var lowerClampedValue = Math.max(number,lower);
    var clampedValue = Math.min(lowerClampedValue,upper)
    return clampedValue
  },
  inRange(number, startValue, endValue) {
    if (endValue === undefined) {
      endValue = startValue;
      startValue = 0;
    }
    else if (startValue > endValue) {
      var x = startValue;
      startValue = endValue;
      endValue = x; 
    }
    if(number < startValue) {
      return false;
    } 
    if (number >= endValue) {
      return false;
    } 
    else {
      return true;
    }    
  },
  words (string) {
    var words = string;
    var arrayString = words.split(' ');
    return arrayString;
  },
  pad (string, length) {
    var strComp = string.length;
    var difArg = length - strComp;
    if (strComp >= length) {
      return string;
    }
    if (difArg % 2 === 0) {
      var sidePad = difArg / 2;
      for (var i = 0; i < sidePad; i++) {
        string = ' ' + string + ' ';
      }  
      return string;    
    }
    if (difArg % 2 !== 0) {
      var sidePadI = (difArg / 2) - 1;
      var sidePadF = difArg / 2;
      for (var i = 0; i < sidePadI; i++) {
        string = ' ' + string;
      } 
      for (var i = 0; i < sidePadF; i++) {
        string = string + ' ';
      }  
      return string;    
    }     
  },
  has (object, key) {
    var result = object.hasOwnProperty(key);
    return result;
  },
  invert (object) {  
    var invertedObject = {};
    for (var key in object) {
      invertedObject[object[key]] = key;
    }
    return invertedObject;
  },
  findKey (object, predicateFunction) {
    for (var key in object) {
      if(predicateFunction(object[key])) 
        return key;
    }
    return undefined;    
  },
  drop (array, number) {    
    if (number) {
      for (var i = 0; i < number; i++) {
        array.shift();
      }
    }
    else {
      array.shift();
    }1
    return array;    
  },
  dropWhile (array, predicateFunction) {   
    var newArray = [];   
    for (var i = 0; i < array.length; i++) {
      if (predicateFunction(array[i], i, array)) {
        var newArray = array.slice(i+1, array.length);    
      }
      else {              
        return newArray;      
      }
    }     
  },
  chunk (array, size) {
    var newArray = [];
    var tempArray = [];
    var counter = 1;
    if (size === undefined) {
      for (var i=0; i<array.length; i++) {
        tempArray = array.slice(i, i+1)
        newArray.push(tempArray);
      }
    }
    else {
      for (var i=0; i<array.length; i=i+size) {
        tempArray = array.slice(i, size*counter)
        newArray.push(tempArray);
        counter ++
      }
    }
    return newArray;
  }
}




// Do not write or modify code below this line.
module.exports = _;