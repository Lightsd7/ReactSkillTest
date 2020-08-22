import styled from "styled-components";

export const Head = styled.div`
    font-weight: bold;
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #ddd;
    margin-top: 5px;
    line-height: 3em;
    .col-xs-1 {
        width: 66.66px;
    }
    .col-xs-2 {
        width: 133.33px;
    }
    .col-xs-5 {
        width: 333.33px;
        text-align: left;
    }
    .one {
        background: #f9f9f9;
        border-top: 1px solid #ddd;
        .quantity {
            text-align: center;
            Input {
                width: 60px;
            }
        }
    }
`;
