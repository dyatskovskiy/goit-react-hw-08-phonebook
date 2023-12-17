import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>Welcome, user</p>
      <button type="button" onClick={() => dispatch(logOut)}>
        Log Out
      </button>
    </div>
  );
};
