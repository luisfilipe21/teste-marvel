import styled from "styled-components";

export const StyledHeader = styled.header`  
width: 100%;
background-color: black; 
padding: 1rem;
margin: 0 auto;

`
export const StyledDivContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
margin: 0 auto;
width: 100%;
max-width: 1440px;

    @media (min-width: 130px){
        max-width: 429px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    @media (min-width: 768px){
        max-width: 1200px;
        flex-direction: row;
    }
    /* @media (min-width: 1440px){
        max-width: 1440px;
    } */
`

export const StyledDivA = styled.div`
    font-family: "Marvel", sans-serif;
    width: 100%;
    display: flex;
    justify-content: center;

    h2{
        padding: 0.3rem 0.5rem 0 0.5rem;
        font-size: 30px;        
        font-weight: 900;
        background-color:red;

        a{
            color: white;
            text-decoration: none;
            letter-spacing: 2px;
        }
    }
        @media (min-width: 430px){
            max-width: 429px;
            margin: 1rem 0;
            
        }
        @media (min-width: 768px){
            max-width: 100px;
            margin-right: 8rem;
        }
`
export const StyledDivB = styled.div`
    width: 100%;
    ul{
        display: flex;
            
        @media (min-width: 130px){
            max-width: 429px;
            width: 100%;
            flex-direction: column-reverse;
        }

        @media (min-width: 480px){
           flex-direction: row;
           gap: 1rem
        }

        @media (min-width: 768px){
            flex-direction: row;
            justify-content: flex-end;
            max-width: 1200px;
            gap:2rem
        }
            li{
                width: 100%;
                display: flex;
                justify-content: flex-end;
                justify-content: flex-start;
                flex-direction: row-reverse;
                list-style:none;
                font-weight: 700;
                font-family: "Marvel", sans-serif;
                letter-spacing : 2px;
                a{
                    color: white;
                    font-size: 36px;
                    text-decoration: none;
                    
                    &:hover{
                        cursor: pointer;
                        text-decoration: underline;
                    }
                    @media (min-width: 130px){
                        font-size: 20px;
                    }
                    @media (min-width: 480px){
                        font-size: 26px;
                    }
                   
                }
                
                @media (min-width: 130px){
                    max-width: 429px;
                    width: 100%;
                    justify-content: center;
                }

                @media (min-width: 430px){
           
                }
               
            }
        }
    
        @media (min-width: 130px){
            margin: 1rem 0;
        }
`

export const StyledDivC = styled.div`
    display: flex;
    color: white;
    font-size: 24px;
    font-weight: bold;
    
    font-family: "Marvel", sans-serif;

    img{
        border-radius: 50%;
        height: 70px;
        margin-right: 1rem; 

        @media (min-width: 130px){
        display:none;
        }

        @media (min-width: 767px){
            margin-left: 1rem;
            display: flex;
            flex-direction: row;
        }
    }

    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
        
    @media (min-width: 130px){
        max-width: 429px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    
    @media (min-width: 767px){
        flex-direction: row;
    }
    
    @media (min-width: 430px){
           
        
    }
    
`