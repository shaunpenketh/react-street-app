import _ from 'lodash';
import moment from 'moment';

const filterBetweenDates = (data, firstDate, lastDate) =>
  _.filter(data, (item) => moment(item.date).isBetween(firstDate, lastDate));

export default {
  filterBetweenDates,
};
