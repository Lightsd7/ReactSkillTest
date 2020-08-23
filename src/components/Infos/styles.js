import styled from "styled-components";

export const Left = styled.div`
    width: 50%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    input {
        width: 300px;
        margin-top: 3px;
        margin-bottom: 5px;
    }
    select {
        margin-top: 5px;
    }
    .inv {
        display: none;
    }
`;

export const Right = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    text-align: right;
    min-height: 1px;
    input {
        width: 300px;
        margin-top: 2px;
        text-align: right;
        margin-bottom: 6px;
    }
`;