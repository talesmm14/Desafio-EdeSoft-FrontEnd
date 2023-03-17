import styled from 'styled-components';

type ContainerProps = {
    color?: string;
}

export const Container = styled.button<ContainerProps>`
    background-color: ${(props) => props.color || 'blue'};
    border: none;
    outline: none;
    padding: 10px 20px;
`