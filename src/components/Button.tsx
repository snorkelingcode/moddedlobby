import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from '../types';

const ButtonWrapper = styled.button<{
  primary?: boolean;
  danger?: boolean;
  fullWidth?: boolean;
}>`
  padding: 8px 15px;
  background-color: var(--gray-light);
  border: 1px solid var(--accent-color);
  border-radius: 5px;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--gray-medium);
  }
  
  ${props => props.primary && `
    background-color: var(--accent-color);
    color: white;
    &:hover {
      background-color: #e66c00;
    }
  `}
  
  ${props => props.danger && `
    background-color: #f8d7da;
    color: #721c24;
    border-color: #f5c6cb;
    &:hover {
      background-color: #f1b0b7;
    }
  `}
  
  ${props => props.fullWidth && `
    width: 100%;
  `}
`;

const IconContainer = styled.span<{ hasText: boolean }>`
  margin-left: ${props => props.hasText ? '8px' : '0'};
`;

const Button: React.FC<ButtonProps> = ({ 
  children, 
  icon, 
  primary, 
  danger,
  fullWidth,
  onClick,
  ...rest 
}) => {
  return (
    <ButtonWrapper 
      primary={primary} 
      danger={danger}
      fullWidth={fullWidth}
      onClick={onClick}
      {...rest}
    >
      {children}
      {icon && (
        <IconContainer hasText={!!children}>
          {icon}
        </IconContainer>
      )}
    </ButtonWrapper>
  );
};

export default Button;