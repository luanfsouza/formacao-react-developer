//import { Link } from "react-router-dom"
//import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import bannerImg from "../../assets/img1.png"
import { HomeContainer, TextContent, Title, TitleHighLight, BannerPicture } from "./styles"
import { Button } from "../../components/Button"

const Home = () => {
    return (<>
        <Header />
        <HomeContainer>
            <div>
                <Title>
                    <TitleHighLight>
                        Implemente
                        <br />
                    </TitleHighLight>
                    O seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encareseu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começe agora" variant="secondary" onClick={() => null} />
            </div>
            <div>
                <BannerPicture src={bannerImg} alt="Imagem principal" />
            </div>
        </HomeContainer>
    </>
    )


}
export { Home }