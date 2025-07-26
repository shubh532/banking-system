import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import { styled } from '@mui/material/styles';

const Background = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(to right, #0f2027, #203a43, #2c5364)'
    : 'linear-gradient(to right, #e0eafc, #cfdef3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[5],
  maxWidth: 500,
  width: '100%',
}));

const RegistrationForm = () => {
  const theme = useTheme();
  const [dob, setDob] = useState(null);

  return (
    <Background>
      <Container>
        <StyledPaper>
          <Typography variant="h5" gutterBottom align="center">
            Create Your TrustVault Account
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center" gutterBottom>
            Your information is safe with us.
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField label="First Name" name="firstName" fullWidth required />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField label="Last Name" name="lastName" fullWidth required />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField label="Email" name="email" type="email" fullWidth required />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField label="Mobile Number" name="mobile" type="tel" fullWidth required />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField label="Address" name="address" multiline rows={2} fullWidth required />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <DatePicker
                  label="Date of Birth"
                  value={dob}
                  onChange={(newValue) => setDob(newValue)}
                  renderInput={(params) => <TextField fullWidth required {...params} />}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  endIcon={<LockOutlinedIcon />}
                >
                  Create Secure Account
                </Button>
              </Grid>
            </Grid>
          </Box>
        </StyledPaper>
      </Container>
    </Background>
  );
};

export default RegistrationForm;
