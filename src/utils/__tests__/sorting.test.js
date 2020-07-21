import sorting from '../sorting';

describe('Sorting tests', () => {
  describe('sortByDate', () => {
    it('correctly sorts the dates in to ascending order', () => {
      const dates = [
        {date: '2020-04-01'},
        {date: '2020-06-01'},
        {date: '2020-01-01'},
        {date: '2020-05-01'},
        {date: '2020-02-01'},
      ];

      const sortedDates = sorting.sortByDate(dates);

      expect(sortedDates).toEqual([
        {date: '2020-01-01'},
        {date: '2020-02-01'},
        {date: '2020-04-01'},
        {date: '2020-05-01'},
        {date: '2020-06-01'},
      ]);
    });
  });
});
