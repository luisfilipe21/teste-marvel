import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { DivDisney, MainCard, MainDivBGA, MainDivBGB, MainDivCard, MainSection } from "../../styles/body"

import surfista from "../../../public/resources/surfistaQuadrinho.jpg"
import thor from "../../../public/resources/thorquadrinhos.jpg"
import wolverine from "../../../public/resources/wolvefine.jpg"
import disney from "../../../public/resources/disney.png"

export const HQs = () => {
    return (
        <>
            <Header />
            <MainSection >
                <MainDivBGA />
                <MainDivBGB />
                <MainDivCard >
                    <MainCard $image={surfista}>
                        <div>
                            <h2>O Surfista Prateado</h2>
                            <p>
                            O único oponente do Devorador de Mundos é o herói que ele aprisionou na Terra: o Surfista Prateado, Galactus jurou não consumir o planeta, mas e se, em vez disso, ele transformar a civilização em seus adoradores?
                                </p>
                            <h3>ver detalhes</h3>
                        </div>
                    </MainCard>
                    <MainCard $image={thor}>
                        <div>
                            <h2>Thor - Vikins</h2>
                            <p>
                                Em uma época que os marinheiros preferiam se atirar ao mar e perecer nas águas turbulentas a enfrentar uma embarcação viking, tamanha era a ferocidade e a crueldade dos guerreiros nórdicos. Esta é a primeira e sangrenta aventura com do poderoso Deus do Trovão.

                            </p>
                            <h3>ver detalhes</h3>
                        </div>
                    </MainCard>
                    <MainCard $image={wolverine}>
                        <div>
                            <h2>Wolferine - Origens</h2>
                            <p>
                                Durante muitos anos sendo chamado simplesmente de Logan, James Howlett, nascido no Canada vivia com sua família em paz. Depois de uma tragédia, James assumiu o nome Logan e passou o resto de sua adolescência nas florestas daquele país.
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