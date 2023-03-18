import styled from 'styled-components';

export const Container = styled.div`
    .user-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        width: 300px;
        margin: 0 auto;
        padding: 1rem;
        position: relative;
    }

    .user-card-title {
        font-size: 1.5rem;
        margin-top: 0;
    }

    .user-card-text {
        font-size: 1rem;
        margin: 0.5rem 0;
    }

    .user-card-username {
        text-transform: uppercase;
        font-size: 12px;
        border-radius: 7px;
        padding: 3px 10px;
        background: #026E78;
        color: white;
    }

    .user-card-phone {
        text-transform: uppercase;
        font-size: 12px;
        border-radius: 7px;
        padding: 3px 10px;
        background: rgb(248, 246, 118);
        color: white;
    }

`