import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    gap: 32px;

    position: absolute;
    width: 50%;
    height: 80%;
    left: 324px;


    background: #e0f7f8;
    box-shadow: 0px 20px 24px -4px rgba(0, 0, 0, 0.1), 0px 80px 80px -4px rgba(16, 24, 40, 0.04);
    border-radius: 12px;

    .input-form {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px 14px;
        gap: 8px;
        width: 304px;
        height: 44px;
        background: #FFFFFF;
        border: 1px solid #667085;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 999px;
    }

    .label-form {
        width: 91px;
        height: 21px;
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        color: #344054;
    }

    .button-form {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px 18px;
        gap: 8px;
        width: 210px;
        height: 44px;
        background: #026E78;
        border: 1px solid #026E78;
        box-shadow: 0px 1px 2px rgba(198, 228, 246, 0.05);
        border-radius: 999px;
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        color: #FFFFFF;
    }

    .alert-message {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px 14px;
        gap: 8px;
        width: 304px;
        height: 44px;
        background: ${(props) => props.color || 'yellow'};
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 999px;
    }


`