import { getUsers } from '../../api/firebase';
import { userLoaded } from './actions';

const loadUsers = () => async (dispatch) => {
  const users = await getUsers();
  dispatch(userLoaded(users));
};

export default { loadUsers };
