import merging from '../merging';

describe('Merging Utils Tests', () => {
  describe('mergeArrays', () => {
    it('takes multiple arrays of object and return a new array containing only uniq items', () => {
      const firstArray = [
        {title: 'HELLO!!', date: '2020-01-03'},
        {title: 'uniq event', date: '2020-01-11'},
      ];
      const secondArray = [
        {title: 'HELLO!!', date: '2020-01-03'},
        {title: 'another event', date: '2021-01-03'},
      ];
      const thirdArray = [
        {title: 'HELLO!!', date: '2020-01-07'},
        {title: 'another event', date: '2020-01-03'},
      ];

      const expectedResult = [
        {title: 'HELLO!!', date: '2020-01-03'},
        {title: 'uniq event', date: '2020-01-11'},
        {title: 'another event', date: '2021-01-03'},
        {title: 'HELLO!!', date: '2020-01-07'},
        {title: 'another event', date: '2020-01-03'},
      ];

      const result = merging.mergeArrays(firstArray, secondArray, thirdArray);

      expect(result).toEqual(expectedResult);
    });
  });
});
