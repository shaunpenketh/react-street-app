import _ from 'lodash';
import moment from 'moment';

const sortByDate = (data) => _.sortBy(data, (item) => moment(item.date));

export default {
  sortByDate,
};
