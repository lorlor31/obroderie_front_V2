import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Stack, Box, Button } from '@mui/material';
import logo from '../../assets/OBroderie_logo.png';
import LoginEdit from '../../components/LoginEdit/LoginEdit';
import { changeLoginField, submitLogin } from '../../actions/user';

function AuthPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.logged);
  const user = useSelector((state) => state.auth.user);
  // console.log('username from useSelector:', user);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/clients');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(submitLogin());
  };

  const handleChange = ({ name, value }) => {
    dispatch(changeLoginField(name, value));
  };
  return (
    <Stack
      spacing={4}
      sx={{ width: '50%', margin: 'auto', textAlign: 'center' }}
    >
      <Box
        component="img"
        src={logo}
        sx={{ height: '10rem', objectFit: 'contain' }}
      />

      <form autoComplete="off" onSubmit={handleLogin}>
        <LoginEdit user={user} onChange={(e) => handleChange(e)} />
        <Button variant="contained" type="submit" sx={{ marginTop: '1rem' }}>
          Se connecter
        </Button>
      </form>
    </Stack>
  );
}

export default AuthPage;
