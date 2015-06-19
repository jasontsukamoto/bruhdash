var global = window || GLOBAL;

global.bruhdash = {
  chunk : function(array, size) {
    var chunky = [];
    for (var i = 0; i < array.length; i += size) {
      chunky.push(array.slice(i, size + i));
    }
    return chunky;
  },

  compact : function(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  },

  difference : function(array, args) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
      var found = false;
      for (var j = 0; j < arguments[1].length; j++) {
        if (array[i] === arguments[1][j]) {
          found = true;
        }
      }
      if (found === false) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  },

  drop : function(array, n) {
    if (n === undefined) {
      array.shift();
      return array;
    } else {
      array.splice(0, n);
    }
    return array;
  },

  dropRight : function(array, n) {
    var i = 0;
    if (n === undefined) {
      array.pop();
      return array;
    } else {
      while (i < n) {
        array.pop();
        i++;
      }
    }
    return array;
  },

  fill : function(array, value, start, stop) {
    var newArray = [];
    if (arguments.length > 2) {
      array.splice(start, stop - 1, value);
      return array;
    } else {
      for (var i = 0; i < array.length; i++) {
        newArray.push(value);
      }
      return newArray;
    }
  },

  first : function (array) {
    return array[0];
  },

  indexOf : function (array, num, start) {
    var j;
    for (var i = 0; i < array.length; i++) {
      if (start !== undefined) {
        j = i + start;
        if (array[j] === num) {
          return j;
        }
      } else if (array[i] === num) {
        return i;
      }
    }
  },

  initial : function (array) {
    return array.slice(0, array.length - 1);
  },

  last : function (array) {
    var i = array.length - 1;
    return array[i];
  },

  lastIndexOf : function (array, num, start) {
    var j;
    for (var i = array.length; i > 0; i--) {
      if (start !== undefined) {
        j = i - start;
        if (array[j] === num) {
          return j;
        }
      } else if (array[i] === num) {
        return i;
      }
    }
  },

  pull : function (array) {
    for (var i = 0; i < array.length; i++) {
      for (var j = 1; j < arguments.length; j++) {
        if (array[i] === arguments[j]) {
          array.splice(i, 1);
          i--;
        }
      }
    }
    return array;
  },

  pullAt : function (array, args) {
    return array.slice(arguments[1], arguments[2]);
  },

  rest : function (array) {
    return array.slice(1, array.length);
  },

  slice : function (array, startNum,  endNum) {
    return array.slice(startNum, endNum);
  },

  take : function (array, number) {
    if (number === undefined) {
      number = 1;
    }
    return array.slice(0, number);
  },

  takeRight : function (array, number) {
    if (number === undefined) {
      return array.slice(array.length - 1);
    } else if (number === 0) {
      return array.slice(array.length);
    } else {
      return array.slice(-number);
    }
  },

  zip : function (arrays) {
    var tempArray = [];
    var finalArray = [];
    for (var i = 0; i < arguments[0].length; i++) {
      tempArray = [];
      for (var j = 0; j < arguments.length; j++) {
        tempArray.push(arguments[j][i]);
      }
      finalArray.push(tempArray);
    }
    return finalArray;
  },

  unzip : function (array) {
    var tempArray = [];
    var finalArray = [];
    for (var i = 0; i < array.length; i++) {
      tempArray = [];
      for (var j = 0; j < array.length; j++) {
        tempArray.push(arguments[j][i]);
      }
      finalArray.push(tempArray);
    }
    return finalArray;
  },

  without : function(array, args) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
      var found = false;
      for (j = 1; j < arguments.length; j++) {
        if (array[i] === arguments[j]) {
          found = true;
        }
      }
      if (found === false) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
};