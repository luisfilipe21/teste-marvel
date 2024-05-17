import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { DivDisney, MainCard, MainDivBGA, MainDivBGB, MainDivCard, MainSection } from "../../styles/body"

import hf1 from "../../../public/resources/homemdeferro.jpg"
import hf2 from "../../../public/resources/homemdeferro2.jpg"
import miranha from "../../../public/resources/miranha.jpg"
import disney from "../../../public/resources/disney.png"

export const Filmes = () => {
    return (
        <>
            <Header />
            <MainSection >
                <MainDivBGA />
                <MainDivBGB />
                <MainDivCard >
                    <MainCard $image={hf1}>
                        <div>
                            <h2>Homem de Ferro</h2>
                            <p>Tony Stark é um bilionário e inventor brilhante que realiza testes bélicos no exterior, mas é sequestrado por terroristas que o forçam a construir uma arma devastadora. Ele constrói uma armadura blindada e enfrenta seus sequestradores.</p>
                            <h3>ver detalhes</h3>
                        </div>
                    </MainCard>
                    <MainCard $image={hf2}>
                        <div>
                            <h2>Homem de ferro 2</h2>
                            <p>
                            Com todos ciente da existência do Homem de Ferro, Tony Stark sofre pressão para entregar sua tecnologia às forças armadas. Ele resiste para divulgar os segredos, para evitar que as informações caiam nas mãos erradas.
                            </p>
                            <h3>ver detalhes</h3>
                        </div>
                    </MainCard>
                    <MainCard $image={miranha}>
                        <div>
                            <h2>Homem-Aranha</h2>
                            <p>
                            Peter Parker tem a sua identidade secreta revelada e pede ajuda ao Doutor Estranho. Quando um feitiço para reverter o evento não sai como o esperado, o Homem-Aranha e seu companheiro dos Vingadores precisam enfrentar inimigos de todo o multiverso.
                            </p>
                            <h3>ver detalhes</h3>
                        </div>
                    </MainCard>
                </MainDivCard>
                <DivDisney $disney={disney} />
            </MainSection>
            <Footer />
        </>
    )
}