import { Container } from '@mui/material';

import TypoTitle from '../../components/TypoTitle/TypoTitle';

const UnderConstructionInvoice = () => {
  return (
    <Container component="main" maxWidth="lg" sx={{ paddingBottom: '5rem' }}>
      <TypoTitle text="Page de facturation en construction" />
    </Container>
  );
};

export default UnderConstructionInvoice;
