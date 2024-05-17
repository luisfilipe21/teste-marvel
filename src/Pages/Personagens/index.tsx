import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { DivDisney, MainCard, MainDivBGA, MainDivBGB, MainDivCard, MainSection } from "../../styles/body"


import wanda from "../../../public/resources/feiticeiraEscarlate.jpg"
import thanos from "../../../public/resources/thanos.jpg"
import hulk from "../../../public/resources/hulk.jpg"
import disney from "../../../public/resources/disney.png"

export const Personagens = () => {
    return (
        <>
            <Header />
            <MainSection >
                <MainDivBGA />
                <MainDivBGB />
                <MainDivCard >
                    <MainCard $image={wanda}>
                        <div>
                            <h2>Wanda Maximoff</h2>
                            <p>Wanda Maximoff foi sequestrada da Sérvia e trazida a Montanha Wundagore, base do Alto Evolucionário.
                                Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.</p>
                            <h3>ver detalhes</h3>
                        </div>
                    </MainCard>
                    <MainCard $image={thanos}>
                        <div>
                            <h2>Thanos</h2>
                            <p> A lua Titã era governada por Mentor (A'Lars), quando então reinava a paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos. Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais.</p>
                            <h3>ver detalhes</h3>
                        </div>
                    </MainCard>
                    <MainCard $image={hulk}>
                        <div>
                            <h2>Hulk</h2>
                            <p>Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar.</p>
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