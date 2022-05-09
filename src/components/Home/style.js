import styled from 'styled-components';

export const $Home = styled.div`
max-width: 326px;
margin: 0 auto;

header{
    width: 100%;
    height: 11.69vh;
    max-height: 78px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        font-weight: 700;
        font-size: 26px;
        color: #FFFFFF;
    }
    img{
        cursor: pointer;
    }
}
main{
    height: 65.5vh;
    background-color: #FFFFFF;
    border-radius: 5px;
    position: relative;
    p{
        margin: 0 auto;
        padding-top: calc(32.75vh - 23px);
        width: 180px;
        height: 46px;
        line-height: 23px;
        font-size: 20px;
        text-align: center;
        color: #868686;
    }
}

footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 13px;
    a{
        width: 155px;
        height: 17.09vh;
        max-height: 114px;
        background-color: #A328D6;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 9px;
        img{
            width: 25px;
            height: 25px;
        }
        span{
            text-align: start;
            width: 64px;
            height: 40px;
            font-weight: 700;
            font-size: 17px;
            line-height: 20px;
            color: #FFFFFF;
        }
    }
}
`;

export const Wallet = styled.div`
padding: 23px 31px 0px 12px;
position: absolute;
height: calc(100% - 40px);
width: 100%;
overflow-y: scroll;
::-webkit-scrollbar {
    display: none;
}
`;

export const Balance = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 11px 0 15px;
height: 40px;
position: absolute;
bottom: 0;

span:first-child{
    font-weight: 700;
    font-size: 17px;
    color: #000000;
}
span:nth-child(2){
    font-size: 17px;
    color: ${props => props.balance >= 0 ? '#03AC00' : '#C70000'};
}
`;