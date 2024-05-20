import styled from "styled-components";

export const MainSection = styled.section`
    width: 100%;
    height: 90vh;
    background: black;
    position: relative;
    box-shadow: 0px -10px 7px -8px rgba(255,0,0,1);  
`

export const MainDivBGA = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("public/resources/vingadores.jpg");
    background-repeat: no-repeat;  
    background-size: contain;
    background-position: 1200px;    
    position: absolute;

    @media (min-width: 130px){
    max-width: 429px;
    width: 100%;
    height: 100%;
    background-image: url("public/resources/vingadores.jpg");
    background-repeat: no-repeat;  
    background-size: cover;
    background-position: -160px;
    position: absolute;
    }
    
    @media (min-width: 431px){
        max-width: 1440px;
        
    }
    @media (min-width: 768px){
        max-width: 1840px;
        background-position: 800px;
        background-size: contain;
    }

`


export const MainDivBGB = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(0,0,0,1) 53%, rgba(255,255,255,0.4514180672268907) 73%, rgba(255,255,255,0.4990371148459384) 93%);
    background-repeat: no-repeat;  
    background-size: contain;
    position: absolute;

    @media (min-width: 130px){
    max-width: 429px;
    width: 100%;
    height: 100%;
    }
    
    @media (min-width: 431px){
        max-width: 1840px;
        width: 100%;
    }
`

export const MainDivCard = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    inset: 0;
    gap: 5rem;
    color: white;
    width: 100%;

    @media (min-width: 130px){
    max-width: 390px;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    
    }
    
    @media (min-width: 431px){
        max-width: 900px;
    }
    
    @media (min-width: 768px){
        padding: 0 1rem;
        flex-direction: row;
    }
`

export const MainCard = styled.div<{ $image?: string; }>`
    background-image: url(${props => props.$image || null});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50px;
    position: relative;
    
    display: flex;
    flex-direction: column-reverse;

    div{
        padding: 1rem;
        height: 46%;
        border-radius: 20px 20px 50px 50px;
        background: red;
        background: linear-gradient(0deg, rgba(255,0,0,0) 0%, rgba(255,0,0,0.25057773109243695) 0%, rgba(255,0,0,0.8822303921568627) 100%);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        font-family: "Marvel", sans-serif;
        letter-spacing: 2px;
        
        h2{
            font-weight: 900;
            text-align: center;

            @media (min-width: 130px){
                font-size: 18px;
            }
            @media (min-width: 768px){
                font-size: 20px;
            }
            @media (min-width: 912px){
                font-size: 20px;
                margin-bottom: 0.5rem;
            }
        }
        
        p{
            font-weight: 300;
           
            @media (min-width: 130px){
                display: none;
            }
    
            @media (min-width: 767px){
                max-width: 768px;
                display: flex;
                font-size: 12px;
                line-height: 10px;
            }
            @media (min-width: 912px){
                display: flex;
                font-size: 14px;
                line-height: 14px;
            }
        }

        h3{
            font-size: 24px;
            font-weight: 300;
            &:hover{
                cursor: pointer;
                text-decoration: underline;
            }
            
            @media (min-width: 130px){
                font-size: 14px;
            }


        }

        @media (min-width: 130px){
        max-width: 429px;
        width: 100%;
        box-sizing: border-box;
        letter-spacing: 1px;
        }
        
        @media (min-width: 431px){
            max-width: 768px;
        }
    }

    @media (min-width: 130px){
        max-width: 210px;
        margin: 0.5rem auto;
    }
    
    @media (min-width: 431px){
        max-width: 767px;
        width: 300px;
        height: 600px;
    }

    @media (min-width: 768px){
        max-width: 1440px;
        width: 420px;
        height: 480px;
    }

    @media (min-width:900px){
        width: 480px;
        height: 480px;
    }
`

export const DivDisney = styled.div<{ $disney?: string; }>`
    background-image: url(${props => props.$disney || null});
    background-size: contain;
    background-repeat: no-repeat;
    
    position: absolute;
    bottom: -80px;
    right: 0;

    @media (min-width: 130px){
    width: 100px;
    height: 100px;
    }
    
    @media (min-width: 431px){
        max-width: 768px;
        width: 150px;
        height: 150px;
    }
    @media (min-width: 1240px){
        width: 200px;
        height: 200px;
    }
`

export const MainSectionForm = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    background-color: black;
`
export const MainDivFormImg = styled.div<{ $image?: string; }>`
    height: 100%;
    width: 100%;
    background-image:url(${props => props.$image || null});
    background-repeat: repeat;
    background-size: 400px;
    z-index: 1;
`

export const MainDivForm = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2;

    form{
        display: flex;
        flex-direction:column;
        gap: 1rem;
        padding: 2rem;
        border: 3px solid red;
        border-radius:20px;
        color: white;
        font-weight: 700;
        background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%);

        div{
            display: flex;
            flex-direction:column;
            gap: 1rem;
        }

        button{
            padding: 0.5rem;
            background-color: transparent;
            border: 2px solid transparent;
            color: white;
            font-weight:700;
            border-radius: 1rem;
            box-shadow: inset 0px 0px 10px 10px rgba(38,33,38,0.75);

            &:hover{
                border: 2px solid black;
                cursor: pointer;
                border-radius: 1rem;
                font-weight:900;
            }
        }
    }
`

export const MainInputDiv = styled.div`
    
    label{
        font-family: "Marvel", sans-serif;
    }
    input{
        padding: 0.5rem ;
    }
`
export const MainDivAvisos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
    p{
        color: white;
        font-weight: 700;
        text-align: center;
        margin-top: 1rem;
    }
    
    button{
        padding: 1rem 2rem;
        border: 2px solid transparent;
        border-radius: 1rem;
        background-color: transparent;
        box-shadow: 0px 0px 20px 1px rgba(255,255,255,1);
        a{
            color: white;
            text-decoration: none;
            font-weight:700;

            &:hover{
                cursor: pointer;
                color:red;
                font-weight:900;
            }
        }
    }
`