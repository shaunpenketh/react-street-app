import _ from 'lodash';

/**
 * Takes arrays of objects, flattens them and then returns a uniq array
 * @param arrays
 * @returns [*]
 */
const mergeArrays = (...arrays) => {
  const flattenedArray = _.flattenDeep(arrays);
  return _.reduce(
    flattenedArray,
    (result, item) => {
      if (!_.find(result, item)) {
        result.push(item);
      }
      return result;
    },
    [],
  );
};

export default {
  mergeArrays,
};
