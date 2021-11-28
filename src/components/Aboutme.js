import { Container, Image, Grid } from "semantic-ui-react";

function About() {
    return (
        <Grid>
            <Grid.Row id="aboutpic">
                <h1>Connie Kang</h1>
            </Grid.Row>
            <Grid.Row>
                <Container text id="aboutme">
                    <p>Hello, my name is Connie Kang (康海青). I was born and raised in a small city Quanzhou, China. 
                        Graduated with an Economics degree and worked in healthcare data analytics, 
                        I am now working to become a software engineer. This site is an web application built with react and ruby on rails - which I learned recently. Here is my face.</p>
                </Container>
            </Grid.Row>
        </Grid>
    )
}

export default About