import { Button } from "../Button"
import logo from "../../assets/img2.png"
import { Container, Menu, MenuRight, Input, Row, BuscarInputContainer, Brapper,LogoPicture } from "./styles"

const Header = () => {
    return (
        <Brapper>
            <Container>
                <Row>
                    <LogoPicture src={logo} alt="Logo da Dio" />
                    <BuscarInputContainer>
                        <Input placeholder="Buscar..." />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                </Row>
            </Container>
        </Brapper>
    )
}

export { Header }