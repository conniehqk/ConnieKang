import { Container, Image, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import mypic from "./mypic.jpeg"

function About() {
    return (
        <Grid container stackable id="aboutme">
            <Container text>
                <Grid.Row>
                    <p>Hi, I am <span>Connie Kang (康海青)</span>, and I decided to change my occupation to software developer 
                    after three years of working as a healthcare data analyst and a team leader. 
                    I enjoyed data analytics and the process of generating insight from plain data, 
                    as well as working in a team and working in healthcare industry, 
                    but I want to build more powerful things.</p>
                </Grid.Row>
                <Grid.Row id="aboutmepic">
                    <Grid.Column>
                        <Image className="animate__animated animate__fadeIn" src={mypic} floated='left'></Image>
                    </Grid.Column>
                    <Grid.Column>
                        <p>I have been studying various programming languages in Flatiron School as well as on my own. 
                            And I have had a lot of fun. We learned from vanilla JavaScript, React, to Ruby on Rails, 
                            and I have been practicing data structure and algorithm using Python. 
                            You are looking at a site that I built with React, and feel free to check out my recent projects 
                            in the <b><a href='/project'>project</a></b> page! </p>
                        <p>When I am not working or learning, I enjoy the outdoor. 
                            I like to go hiking, kayaking, biking, or just being in the sun doing nothing.
                            I have a 5 years old labrador/beagle pup who is definitely cuter than your dog.</p>
                        <p>
                            Want to learn more about me or hire me? Check out my resume or send me a message <b><a href='/contact'>here</a></b>!
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Container>
            
        </Grid>
    )
}

export default About