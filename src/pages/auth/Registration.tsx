import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  useTheme,
  InputAdornment,
  IconButton,
  Grid,
} from '@mui/material';
import { Eye, EyeOff, Lock, ShieldCheck, ShieldQuestion, LockKeyhole } from 'lucide-react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import dayjs from 'dayjs';
import { register } from '../../api/auth.api';
import { DatePicker } from '@mui/x-date-pickers';

const features = [
  { icon: <ShieldCheck size={20} />, label: '256-bit SSL' },
  { icon: <LockKeyhole size={20} />, label: '2FA Protected' },
  { icon: <ShieldQuestion size={20} />, label: 'FDIC Insured' },
  { icon: <ShieldCheck size={20} />, label: 'Regulated' },
];

const RegistrationPage = () => {
  const theme = useTheme();
  const [dob, setDob] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    address: '',
    password: '',
    documentType: "Aadhaar",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...formData,
      dateOfBirth: dob ? dayjs(dob).format('YYYY-MM-DD') : '',
    };
    const response = await register(payload);
    if (response.status === 'success') {
      alert('Account created successfully!');
    } else {
      alert(response.message);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box minHeight="100vh" display="flex" alignItems="center" justifyContent="center" bgcolor="#F9FAFB">
        <Container maxWidth="lg">
          <Paper elevation={0} sx={{ borderRadius: 4, overflow: 'hidden', display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            <Box flex={1} p={5} bgcolor="#fff">
              <Box textAlign="center" mb={3}>
                <Typography variant="h5" fontWeight={700} color="primary">TrustVault</Typography>
                <Typography variant="body2" color="text.secondary">Your information is safe with us.</Typography>
              </Box>

              <Box component="form" display="flex" flexDirection="column" gap={2} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }} >
                    <TextField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} fullWidth required />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} fullWidth required />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField label="Mobile Number" name="mobile" value={formData.mobile} onChange={handleChange} fullWidth required />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <DatePicker
                      label="Date of Birth"
                      value={dob}
                      onChange={(newValue) => setDob(newValue)}
                      slotProps={{ textField: { fullWidth: true, required: true } }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField label="Address" name="address" value={formData.address} onChange={handleChange} fullWidth required />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth required />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      label="Password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={handleChange}
                      fullWidth
                      required
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>

                <Button
                  variant="contained"
                  type="submit"
                  size="large"
                  fullWidth
                  sx={{ mt: 1, borderRadius: 2, py: 1.2 }}
                  startIcon={<Lock size={18} />}
                >
                  Create Account
                </Button>
              </Box>
            </Box>

            <Box flex={1} p={5} bgcolor="#F3F4F6" textAlign="center" display="flex" flexDirection="column" justifyContent="center">
              <ShieldCheck size={48} color={theme.palette.primary.main} style={{ margin: '0 auto 16px' }} />
              <Typography variant="h6" fontWeight={600} mb={1}>Bank-Grade Security</Typography>
              <Typography variant="body2" color="text.secondary" mb={3}>
                Your financial data is protected with enterprise-level encryption and multi-factor authentication.
              </Typography>

              <Grid container spacing={2} justifyContent="center">
                {features.map((f, i) => (
                  <Grid key={i}>
                    <Box display="flex" alignItems="center" gap={1}>
                      {f.icon}
                      <Typography variant="caption">{f.label}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Paper>
        </Container>
      </Box>
    </LocalizationProvider>
  );
};

export default RegistrationPage;
