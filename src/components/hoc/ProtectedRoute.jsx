import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../features/selectors/authSelectors'

const ProtectedRoute = ({ children }) => {
  const loggedIn = useSelector(getIsLoggedIn)

  if (!loggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};
export default ProtectedRoute;
