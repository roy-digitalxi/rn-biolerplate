import constants from './constants';

const INITIAL_STATE = {
    message: 'gonna be changed',
}

export default (state = INITIAL_STATE, action) => {

    let updated = Object.assign({}, state);
    switch (action.type) {

      case 'message':

        console.log('reducer called, now go back to component');
        updated['message'] = action.data;
        return updated;
        break;
        
      default:
        return state;
    }
}