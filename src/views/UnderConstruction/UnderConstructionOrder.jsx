import { Container } from '@mui/material';

import TypoTitle from '../../components/TypoTitle/TypoTitle';

const UnderConstructionOrder = () => {
  return (
    <Container component="main" maxWidth="lg" sx={{ paddingBottom: '5rem' }}>
      <TypoTitle text="Page de commandes en construction" />
    </Container>
  );
};

export default UnderConstructionOrder;
