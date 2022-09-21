import styled from 'styled-components';

export const $NewItem = styled.div`
max-width: 326px;
margin: 0 auto;

header{
    width: 100%;
    height: 78px;
    display: flex;
    justify-content: start;
    align-items: center;
    h1{
        font-weight: 700;
        font-size: 26px;
        color: #FFFFFF;
    }
}
input{
    width: 100vw;
    max-width: 326px;
    height: 58px;
    background-color: #FFFFFF;
    border-radius: 5px;
    font-size: 20px;
    color: #000000;
    padding-left: 15px;
}
button{
    width: 100vw;
    max-width: 326px;
    height: 46px;
    background: #A328D6;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 700;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
}
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 13px;
    margin-top: 18px;
}
`;