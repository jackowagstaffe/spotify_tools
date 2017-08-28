/**
 * Tools for processing an array of objects that are identified by an id field.
 */
class ArrayObjTools {
  /**
   * Returns true if the object is present in the array.
   */
  contains(object, array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === object.id) {
        return true;
      }
    }

    return false;
  }
  /**
   * Return a new array with any duplicates removed.
   */
  makeUnique(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (!this.contains(array[i], result)) {
        result.push(array[i]);
      }
    }

    return result;
  }
  /**
   * Combine the values of two arrays without duplicating values.
   */
  combine(arrayA, arrayB) {
    let result = arrayA.slice();

    for (let i = 0; i < arrayB.length; i++) {
      if (!this.contains(arrayB[i], result)) {
        result.push(arrayB[i]);
      }
    }

    return result;
  }
  /**
   * Get the values of an array that are also in another array.
   */
  intersect(arrayA, arrayB) {
    let result = [];
    for (let i = 0; i < arrayA.length; i++) {
      if (this.contains(arrayA[i], arrayB)) {
        result.push(arrayA[i]);
      }
    }

    return result;
  }
  /**
   * Get the values of arrayA that are not in arrayB.
   */
  valuesNotIn(arrayA, arrayB) {
    let result = [];
    for (let i = 0; i < arrayA.length; i++) {
      if (!this.contains(arrayA[i], arrayB)) {
        result.push(arrayA[i]);
      }
    }

    return result;
  }
}

const arrayTools = new ArrayObjTools();

export default arrayTools;
