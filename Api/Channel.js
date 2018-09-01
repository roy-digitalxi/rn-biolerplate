import DigitalXi from './base';

export default {
  channelList: data => DigitalXi.post('/user/channel_list', data).then(response => response.data),

  subscribeChannel: data => DigitalXi.post('/user/subscribe_channel', data).then(response => response.data),
};
