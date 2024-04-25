import PropTypes from 'prop-types';
import { Stack } from '@mui/material';

import FieldInput from '../Field/FieldInput';

const LoginEdit = ({ onChange, user }) => {
  return (
    <Stack direction="column" spacing={2}>
      <FieldInput
        name="username"
        type="username"
        label="Nom d'utilisateur"
        value={user.username}
        onChange={(e) => onChange(e)}
        required
      />
      <FieldInput
        name="password"
        type="password"
        label="Mot de passe"
        value={user.password}
        onChange={(e) => onChange(e)}
        required
      />
    </Stack>
  );
};
LoginEdit.propTypes = {
  onChange: PropTypes.func.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
};

export default LoginEdit;
