import { Link } from "react-router-dom"
import { StyledDivA, StyledDivB, StyledDivC, StyledDivContainer, StyledHeader } from "../../styles/header"

export const Header = () => {

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
                    <img src="public/resources/avatar.png" alt="User Photo" title="User Photo" />
                    <p>Sair</p>
                </StyledDivC>
            </StyledDivContainer>
        </StyledHeader>

    )
}