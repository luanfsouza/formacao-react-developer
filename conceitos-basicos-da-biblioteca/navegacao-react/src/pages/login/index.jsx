//import { Link } from "react-router-dom"
//import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
//import bannerImg from "../../assets/img1.png"
import { LoginContainer, Column, CriarText, EsqueciLogin, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from "./styles"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { MdEmail, MdLock } from "react-icons/md"

const Login = () => {
    return (<>
        <Header />
        <LoginContainer>
            <Column>
            <Title>
                o seu futuro global agora!
            </Title>
            </Column>
            <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change</SubtitleLogin>
                <form>
                    <Input placeholder="Email" leftIcon={<MdEmail />} />
                    <Input placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                    <Button title="Entrar" variant="secondary"/>
                    
                </form>
                <Row>
                    <EsqueciLogin>Esqueci minha sena</EsqueciLogin>
                    <CriarText>Criar Conta</CriarText>
                </Row>
            </Wrapper>
        </LoginContainer>
    </>
    )


}
export { Login }