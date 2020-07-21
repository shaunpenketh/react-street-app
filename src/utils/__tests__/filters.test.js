import filters from '../filters';

describe('Filter tests', () => {
  describe('filterBetweenDates', () => {
    it('correctly filters out items outside of the given dates', () => {
      const dates = [
        {date: '2020-02-01'},
        {date: '2020-03-01'},
        {date: '2020-04-01'},
        {date: '2020-05-01'},
        {date: '2020-06-01'},
      ];

      const filteredDates = filters.filterBetweenDates(
        dates,
        '2020-02-01',
        '2020-05-01',
      );

      expect(filteredDates).toEqual([
        {date: '2020-03-01'},
        {date: '2020-04-01'},
      ]);
    });
  });
});
