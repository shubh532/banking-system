import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

type LoginForm = {
  emailOrMobile: string;
  password: string;
};

const Login = () => {
  const [form, setForm] = useState<LoginForm>({
    emailOrMobile: '',
    password: '',
  });

  const [isValid, setIsValid] = useState(false);

  const validateInput = (value: string, type: keyof LoginForm) => {
    if (type === 'emailOrMobile') {
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      const isMobile = /^[6-9]\d{9}$/.test(value);
      return isEmail || isMobile;
    }
    if (type === 'password') {
      return value.length >= 6;
    }
    return false;
  };

  const handleChange = (field: keyof LoginForm, value: string) => {
    const updatedForm = { ...form, [field]: value };
    setForm(updatedForm);

    const isFormValid =
      validateInput(updatedForm.emailOrMobile, 'emailOrMobile') &&
      validateInput(updatedForm.password, 'password');
    setIsValid(isFormValid);
  };

  const handleLogin = () => {
    if (form.emailOrMobile === 'admin@test.com' && form.password === 'admin123') {
      // showToast('Login successful!', 'success');
      // navigate(routePaths.dashboard); // simulate protected page
    } else {
      // showToast('Invalid credentials', 'error');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Box
        component={Paper}
        p={4}
        boxShadow={3}
        borderRadius={2}
        display="flex"
        flexDirection="column"
        gap={3}
        alignItems="center"
      >
        <Typography variant="h5">Login to TrustVault</Typography>

        <TextField
          fullWidth
          label="Email or Mobile Number"
          value={form.emailOrMobile}
          onChange={(e) => handleChange('emailOrMobile', e.target.value)}
        />

        <TextField
          fullWidth
          type="password"
          label="Password"
          value={form.password}
          onChange={(e) => handleChange('password', e.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          disabled={!isValid}
          onClick={handleLogin}
        >
          Login
        </Button>

        <Box display="flex" justifyContent="space-between" width="100%">
          {/* <Link href={routePaths.auth.forgotPassword}>Forgot Password?</Link> */}
          {/* <Link href={routePaths.auth.register}>Create Account</Link> */}
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
