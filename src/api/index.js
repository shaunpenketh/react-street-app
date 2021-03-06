import axios from 'axios';

export const httpFactory = () => ({
  govApi: axios.create({baseURL: 'https://www.gov.uk/', timeout: 30000}),
});

const HTTP = httpFactory();

export {HTTP};
