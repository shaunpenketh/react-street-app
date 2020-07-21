import _ from 'lodash';
import moment from 'moment';

const sortByDate = (data, direction = 'asc') =>
  _.orderBy(data, (item) => moment(item.date), [direction]);

export default {
  sortByDate,
};
