import styled from 'styled-components';

export const Container = styled.div`
    cursor: pointer;
    display: flex;
    background-color: white;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 300px;
    box-shadow: 0 0px 15px #ddd;
    border-radius: 20px;
    padding: 1rem;
    position: relative;

    img {
        width: 100%;
        height: 150px;
        object-fit: contain;
        margin-bottom: 10px;
    }

    .card-category{
        text-transform: uppercase;
        font-size: 12px;
        border-radius: 7px;
        padding: 3px 10px;
        background: #026E78;
        color: white;
    }

    .card-body {
        display: flex;
        align-items: center;
        width: 100%;

        .card-body-left{
            width: 60%;
            flex: 1;
            h5 {
                width: 200px;
                font-weight: 700;
                font-size: 1.2rem;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                margin: 0;
            }

            .card-text {
                margin: 0;
                font-size: 1rem;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;

            }
        
        }
        .card-body-right{
            .card-price{
                padding-left: 15px;
                font-size: 24px;
                font-weight: 700;
                color: #026E78;
            }
        }
    }


`