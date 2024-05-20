import { Link, useNavigate } from "react-router-dom"
import { StyledDivA, StyledDivB, StyledDivC, StyledDivContainer, StyledHeader } from "../../styles/header"

import img from "../../../public/resources/avatar.png";

export const Header = () => {
    const navigate = useNavigate();
    
    const logout = () => {
        navigate("/login");
        localStorage.removeItem("@MARVEL");
    }

    return (
        <StyledHeader>
            <StyledDivContainer >
                <StyledDivA>
                    <h2><a href="">MARVEL</a></h2>
                </StyledDivA>

                <StyledDivB>
                    <ul>
                        <li><Link to="/">Personagens</Link></li>
                        <li><Link to="/filmes">Filmes</Link></li>
                        <li><Link to="/hqs">HQs</Link></li>
                    </ul>
                </StyledDivB>
                
                <StyledDivC >
                    <img src={img} alt="User Photo" title="User Photo" />
                    <p onClick={() => logout()}>Sair</p>
                </StyledDivC>
            </StyledDivContainer>
        </StyledHeader>

    )
}