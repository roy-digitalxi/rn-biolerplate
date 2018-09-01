import DigitalXi from './base';

export default {
  streamExperienceList: data => DigitalXi.post('/stream/list', data).then(response => response.data),

  mobileViewExperience: data => DigitalXi.post('/experience/mobile_view', data).then(response => response.data),
};
