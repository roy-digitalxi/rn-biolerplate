import {
    Toast,
} from 'native-base';
import colors from '../constants/colors';

const Alert = {
    showToast: (message, duration = 6000, type = 'danger') => {
        Toast.show({
            text: message,
            buttonText: 'Close',
            position: 'top',
            buttonTextStyle: {
                color: colors.whiteColor,
            },
            buttonStyle: {
                backgroundColor: 'transparent',
            },
            duration,
            type,
        });
    },
};

export default Alert;
