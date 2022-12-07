import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const HatStyleSelector = () => {

    return 
    <Container> 
    <h2> What kind of hat would you like to make?</h2>
    <ButtonGroup>
    <Button variant="primary">Beanie / Toque</Button>
    <Button variant="primary">Beret / Tam</Button>
    </ButtonGroup>
    </Container>
}

export default HatStyleSelector