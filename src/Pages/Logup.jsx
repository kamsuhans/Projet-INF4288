import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const SignupFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const Form = styled.form`
  background: #fff;
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  &:hover {
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  position: relative;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #333;
    font-size: 1rem;
    transition: color 0.3s ease;
  }

  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s ease;

    @media (max-width: 768px) {
      padding: 0.5rem;
    }

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }

  .password-toggle {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #007bff;
    user-select: none;
    transition: color 0.3s ease;

    &:hover {
      color: #0056b3;
    }
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  background: #28a745;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  margin-bottom: 0.5rem;

  &:hover {
    background: #218838;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
`;

const LoginButton = styled(Link)`
  display: block;
  width: 100%;
  text-align: center;
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  background: #007bff;
  color: #fff;
  font-size: 1.1rem;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #0056b3;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
`;

const Title = styled.h2`
  margin-bottom: 2rem;
  color: #333;
  font-size: 2rem;
  text-align: center;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Logup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <SignupFormContainer>
      <Form>
        <Title>Create Account</Title>
        <FormGroup>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
        </FormGroup>
        <FormGroup>
          <label htmlFor="surname">Surname</label>
          <input type="text" id="surname" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" id="phoneNumber" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </FormGroup>
        <FormGroup>
          <label htmlFor="login">Login</label>
          <input type="text" id="login" required />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password</label>
          <div style={{ position: 'relative' }}>
            <input type={showPassword ? 'text' : 'password'} id="password" required />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={togglePasswordVisibility}
              size="1x"
              className="password-toggle"
            />
          </div>
        </FormGroup>
        <FormGroup>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div style={{ position: 'relative' }}>
            <input type={showConfirmPassword ? 'text' : 'password'} id="confirmPassword" required />
            <FontAwesomeIcon
              icon={showConfirmPassword ? faEyeSlash : faEye}
              onClick={toggleConfirmPasswordVisibility}
              size="1x"
              className="password-toggle"
            />
          </div>
        </FormGroup>
        <Button type="submit">Create Account</Button>
        <LoginButton to="/login">Login</LoginButton>
      </Form>
    </SignupFormContainer>
  );
};

export default Logup;
