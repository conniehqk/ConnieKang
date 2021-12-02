import { Container, Card, Image } from "semantic-ui-react"

function Project() {
    return (
        <Container id="project">
            <Card.Group centered >
                <Card>
                    <Card.Content>
                        <Image
                        floated='right'
                        size='medium'
                        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                        />
                        <Card.Header>Bar Buddy</Card.Header>
                        <Card.Description>
                        Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Image
                        floated='right'
                        size='medium'
                        src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                        />
                        <Card.Header>Fancy Photography</Card.Header>
                        <Card.Description>
                        Molly wants to add you to the group <strong>musicians</strong>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
        </Container>
    )
}

export default Project