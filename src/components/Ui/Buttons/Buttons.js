import styled from 'styled-components';

export const Button = styled.button`
    width: 100px;
    border: 2px solid ${({ theme }) => theme.color_primary};
    background: none;
    text-transform: uppercase;
    padding: 10px 0;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;

    &:hover {
        transform: scale(1.1);
    }
`;

export const RegisterButton = styled(Button)`
    display: block;
    margin: 20px auto;
    width: 100%;
`;