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
    td {
        font-weight: 100;
    }
    td.menu {
        text-align: center;
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
    .btn {
        display: inline-block;
        padding: 6px 12px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: normal;
        line-height: 1.428571429;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: 4px;
        user-select: none;
        margin-left: 10px;
    }
    .btn-primary {
        color: #fff;
        background-color: #428bca;
        border-color: #357ebd;
    }
    .btn-danger {
        color: #fff;
        background-color: #d9534f;
        border-color: #d43f3a;
    }
    .tax {
        Input {
            width: 40px;
        }
    }
`;
