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

      const expectedDates = [{date: '2020-03-01'}, {date: '2020-04-01'}];

      const filteredDates = filters.filterBetweenDates(
        dates,
        '2020-02-01',
        '2020-05-01',
      );

      expect(filteredDates).toEqual(expectedDates);
    });
  });
  describe('filterAfterToday', () => {
    it('correctly filters out items that are in the past and returns only dates in future', () => {
      const {filterAfterToday} = filters;
      const dates = [
        {date: '2020-05-01'},
        {date: '2020-06-01'},
        {date: '2020-07-01'},
        {date: '2020-08-01'},
        {date: '2020-09-01'},
      ];

      const expectedDates = [{date: '2020-08-01'}, {date: '2020-09-01'}];

      const filteredDates = filterAfterToday(dates);

      expect(filteredDates).toEqual(expectedDates);
    });
  });
});
