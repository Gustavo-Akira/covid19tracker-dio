import {createGlobalStyle} from 'styled-components';
import covidImage from '../../assets/images/covid.jpg';

const globalStyle = createGlobalStyle`
    *{
        outline:none;
        box-sizing: border-box;
    }

    body{
        line-height::normal;
    }
    html,body{
        width:100vw;
        min-height:100vh;
        display:flex;
        padding:0;
        margin:0;   
    }
    #root{
        background: url(${covidImage});
        heigth:100vh;
        background-size: cover;
        background-position: center;
        width:100vw;
    }
    .mb-2{
        margin-bottom:16px;
    }
    .pt-2{
        padding-top:16px;
    }
    .cursor{
        cursor:pointer;
    }
`;
export default globalStyle;
