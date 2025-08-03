import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/auth.api';

type LoginForm = {
  mobileOrEmail: string;
  password: string;
};

const Login = () => {
  const [form, setForm] = useState<LoginForm>({
    mobileOrEmail: '',
    password: '',
  });
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();


  const validateInput = (value: string, type: keyof LoginForm) => {
    if (type === 'mobileOrEmail') {
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
      validateInput(updatedForm.mobileOrEmail, 'mobileOrEmail') &&
      validateInput(updatedForm.password, 'password');
    setIsValid(isFormValid);
  };

  const handleLogin = async () => {
    const response = await login(form);
    console.log("response: ", response)
    if (response.status) {

    } else {

    }
  };

  const handleRestration = () => {
    navigate('/registration')
  }

  return (
    <Container sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box
        component={Paper}
        p={4}
        boxShadow={3}
        borderRadius={2}
        display="flex"
        flexDirection="column"
        gap={3}
        alignItems="center"
        maxWidth={'sm'}
        width={500}
      >
        <Typography variant="h5">Login to TrustVault</Typography>

        <TextField
          fullWidth
          label="Email or Mobile Number"
          value={form.mobileOrEmail}
          onChange={(e) => handleChange('mobileOrEmail', e.target.value)}
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
        <Button
          fullWidth
          variant="outlined"
          onClick={handleRestration}
        >
          Register
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
