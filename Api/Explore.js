import DigitalXi from './base';

export default {
  featuredChannelList: data => DigitalXi.post('/stream/list', data).then(response => response.data),
  streamList: data => DigitalXi.post('/user/stream_experience', data).then(response => response.data),
};
