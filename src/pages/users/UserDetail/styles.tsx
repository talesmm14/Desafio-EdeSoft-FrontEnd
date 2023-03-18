import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 50%;
    left: 208px;
    top: 130px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

    .buttons {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`