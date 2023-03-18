import styled from 'styled-components';

type ContainerProps = {
    color?: string;
}

export const Container = styled.button<ContainerProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 16px 28px;
    gap: 12px;
    width: 280px;
    height: 56px;
    background: #FFFFFF;
    border: 2px solid ${(props) => props.color || 'blue'};
    box-shadow: 0px 1px 2px rgba(198, 228, 246, 0.05);
    border-radius: 999px;
`