import styled from 'styled-components';

export const $Item = styled.div`

position: relative;
margin-bottom: 20px;
cursor: pointer;

a{
    display: flex;
    justify-content: space-between;
    align-items: center;

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
        color: ${props => props.type === 'entrada' ? '#03AC00' : '#C70000'};
        padding-left: 5px;
    }
}

div{
    position: absolute;
    right: -20px;
    top: 0;
    font-size: 16px;
    text-align: center;
    color: #C6C6C6;
    cursor: pointer;
}
`;