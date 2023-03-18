import styled from 'styled-components';

export const Container = styled.nav`
    height: 80px;
    background: white;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;

    .menu {
        display: flex;
        flex: 1;
        gap: 10px;
        .nav-button {
            font-family: 'Mulish';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 100%;
            color: #026E78;
            text-decoration: none;
            text-transform: uppercase;
        }
    }

    .right {
        display: flex;
        gap: 50px;
    }
`