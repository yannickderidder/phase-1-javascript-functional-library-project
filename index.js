
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else if (isObject(collection)) {
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }

    return collection; // Return the original collection
  }


  // myMap function
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, function (item, keyOrIndex, coll) {
      result.push(callback(item, keyOrIndex, coll));
    });
    return result;
  }

// myReduce function
function myReduce(collection, callback, initialValue) {
    // Check if an initial value is provided
    let accumulator = initialValue !== undefined ? initialValue : collection[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < collection.length; i++) {
      accumulator = callback(accumulator, collection[i]);
    }

    return accumulator;
}


  // myFind function
function myFind(collection, callback) {
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i], i, collection)) {
        return collection[i];
      }
    }
    return undefined;
  }


  // myFilter function
  function myFilter(collection, predicate) {
    const result = [];

    myEach(collection, function (item) {
      if (predicate(item)) {
        result.push(item);
      }
    });

    return result;
  }

  // mySize function
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (isObject(collection)) {
      return Object.keys(collection).length;
    }
  }

  // myFirst function
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }

  // myLast function
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }

  // myKeys function
  function myKeys(object) {
    return Object.keys(object);
  }

  // myValues function
  function myValues(object) {
    return Object.values(object);
  }

  // Helper function to check if an object is an object literal
  function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  }

  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues,
  };