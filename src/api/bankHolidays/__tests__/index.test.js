import bankHolidaysApi from '../index';
import apiUrls from '../../apiUrls';
import {HTTP} from '../../index';

describe('Bank Holiday API', () => {
  it('calls the correct url', async () => {
    const {BANK_HOLIDAYS} = apiUrls;
    const mockGet = jest.spyOn(HTTP.govApi, 'get').mockImplementation();

    await bankHolidaysApi.getBankHolidays();

    expect(mockGet).toHaveBeenCalledWith(BANK_HOLIDAYS);
  });
});
