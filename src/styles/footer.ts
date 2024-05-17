import styled from "styled-components";

export const StyledFooter = styled.footer`  
width: 100%;
height: 5rem;
background-color: black; 
padding: 1rem;
margin: 0 auto;

`

export const StyledFooterDiv = styled.div`
    max-width: 1440px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
    
    p{
        font-size: 26px;
        color: white;
        font-weight: 600;

        @media (max-width: 430px){
            font-weight: 400;
            font-size: 20px;
            text-align: center;
        }
    
    @media (min-width: 431px){
        max-width: 768px;
        
    }
    }

    @media (max-width: 430px){
    max-width: 429px;
    }
    
    @media (min-width: 431px){
        max-width: 768px;
        
    }
`

