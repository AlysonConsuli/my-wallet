import styled from 'styled-components';

export const $Item = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;

small{
    padding-right: 7px;
    font-size: 16px;
    color: #C6C6C6;
}
span:first-child{
    font-size: 16px;
    color: #000000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
span:nth-child(2){
    font-size: 16px;
    color: #C70000;
    padding-left: 5px;
}
`;