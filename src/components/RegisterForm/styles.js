import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 380px;
    width: 100%;
`;

export const FormTitle = styled.h2`
    text-align: center;
`;

export const Label = styled.label`
    height: 25px;
    font-size: 14px;
    margin-top: 15px;
`;

export const Input = styled.input`
    border: none;
    border-bottom: 1px solid #ccc;
    height: 25px;
`;