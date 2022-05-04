import styled from 'styled-components';

export const $Home = styled.div`
max-width: 326px;
margin: 0 auto;

header{
    width: 100%;
    height: 78px;
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
    height: 66.8vh;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
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
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 13px;
    button{
        width: 155px;
        height: 114px;
        background-color: #A328D6;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 9px;
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