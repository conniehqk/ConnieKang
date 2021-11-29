import { Container, Image, Grid } from "semantic-ui-react";
import mypic from "./mypic.jpeg"

function About() {
    return (
        <Grid id="aboutme">
            <Container text>
                <Grid.Row>
                    <p>Hi, I am <span>Connie Kang (康海青)</span>, and I decided to change my occupation to software developer 
                    after three years of working as a healthcare data analyst. I enjoyed data analytics, healthcare industry, and the process of generating insight from plain data, 
                    but I want to build more powerful things.</p>
                </Grid.Row>
                <Grid.Row>
                    <div id="aboutmepic">
                        <Image src={mypic} floated='left'></Image>
                        <p>I have been studying various programming languages in Flatiron School as well as on my own. 
                            And I have had a lot of fun. We learned from vanila JavaScript, to React and Ruby on Rails, 
                            and I have been practicing data structure and algorithm using Python. </p>
                        <p>Having worked as an analyst who actively communicate with stakeholders, 
                            I understand the importance of business need when it comes to technology.</p>
                    </div>
                </Grid.Row>
            </Container>
            
        </Grid>
    )
}

export default About