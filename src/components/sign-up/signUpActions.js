import store from 'react-native-simple-store';
import { Actions } from 'react-native-router-flux';
import { authInit } from '../../modules/auth/authActions';

export default function toSignUp() {
  return dispatch => store.delete('@Auth:token')
    .then(() => {
      dispatch(authInit());
      Actions.signUp();
    });
}
