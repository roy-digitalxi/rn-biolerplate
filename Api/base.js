import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.publishxi.com/',
  headers: {
    'Content-Type': 'application/json',
    'api-key': '80ac2e02-7bfc-4e56-bcfc-0d94a6b4f6eb',
  },
});
