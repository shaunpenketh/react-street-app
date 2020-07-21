import apiUrls from '../apiUrls';
import {HTTP} from '../index';

const {BANK_HOLIDAYS} = apiUrls;

const getBankHolidays = () => HTTP.govApi.get(BANK_HOLIDAYS);

export default {
  getBankHolidays,
};
