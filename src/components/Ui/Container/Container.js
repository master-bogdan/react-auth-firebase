import styled from 'styled-components';

const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0 15px;
    display: ${props => props.display};
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
    margin-top: ${props => props.marginTop}
`;

export default Container;
