import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-items: center;
    width: 950px;
    height: 720px;
    left: 208px;
    top: 130px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

    .img-view {
        width: 100%;
        height: 300px;
        background-size: cover;
        background-position: center;
        margin-bottom: 10px;
    }
    .content {



        .title {
            font-size: 24px;
            margin-bottom: 10px;
        }

        .description {
            font-size: 16px;
            margin-bottom: 10px;
        }

        .price {
            font-size: 24px;
            margin-bottom: 10px;
            text-align: center;
            color: green;
        }

        .category {
            text-transform: uppercase;
            font-size: 12px;
            border-radius: 7px;
            padding: 3px 10px;
            background: #026E78;
            color: white;
        }

    }
    .buttons {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`