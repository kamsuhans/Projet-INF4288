import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f5f5f5;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 400px;
  }
`;

const FormContainer = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  position: relative;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  input {
    width: calc(100% - 40px); /* Adjusted width for the input to accommodate the icon */
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;

    &:focus {
      border-color: #007bff;
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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  background: #007bff;
  color: #fff;
  font-size: 1rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background 0.3s ease;
  margin-bottom: 1rem;
  opacity: ${({ disabled }) => (disabled ? '0.7' : '1')};

  &:hover {
    background: ${({ disabled }) => (disabled ? '#007bff' : '#0056b3')};
  }
`;

const SignUpButton = styled(Link)`
  width: 100%;
  display: block;
  text-align: center;
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  background: #28a745;
  color: #fff;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #218838;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    img {
      height: 50vh;
    }
  }
`;

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <LoginFormContainer>
      <ContentContainer>
        <ImageContainer>
          <img src='assets/img/la-mairie-de-yaounde-vi-au-cameroun.jpg' alt="Placeholder" />
        </ImageContainer>
        <FormContainer>
          <h2>Login</h2>
          <form>
            <FormGroup>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </FormGroup>
            <FormGroup>
              <label htmlFor="password">Password</label>
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                name="password"
                required
              />
              <span className="password-toggle" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
              </span>
            </FormGroup>
            <ButtonContainer>
              <Button type="submit">Login</Button>
              <SignUpButton to="/Logup">Sign Up</SignUpButton>
            </ButtonContainer>
          </form>
        </FormContainer>
      </ContentContainer>
    </LoginFormContainer>
  );
};

export default LoginForm;
