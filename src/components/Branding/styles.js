import styled from "styled-components";

export const Container = styled.div`
    padding-bottom: 2em;
    border-bottom: 1px solid #ddd;
`;

export const Invoice = styled.div`
    width: 50%;
    font-weight: bold;
    float: left;
    padding-left: 10px;
    input {
        font-weight: bold;
    }
`;

export const Logo = styled.div`
    text-align: right;
    float: right;
    padding-right: 10px;
    img {
        width: 300px;
        border: 0;
        vertical-align: middle;
    }
    a {
        color: #428bca;
        text-decoration: none;
        margin-left: 5px;
        &:hover {
            text-decoration: underline;
        }
    }
    .hidden {
        display: none;
    }
`;
