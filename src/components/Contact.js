import { Container, Button, Checkbox, Form, TextArea, Grid, Icon } from 'semantic-ui-react'

function Contact() {
    return (
        <Container id="contact">
            <Grid stackable columns={2}>
                <Grid.Column id="doodle">
                    <img src="https://doodleipsum.com/700?i=91f7a6c433fd73c95da86b8ffb8b7b02" alt="Emails by Irene Falgueras" />
                    <p>Say hi to me on these social networks:</p>
                    <span>
                        <a href="https://github.com/conniehqk">
                            <Icon link name='github' size='large'/>
                        </a>
                        <a href="https://www.instagram.com/conniekk22/">
                            <Icon link name='instagram' size='large'/>
                        </a>
                        <a href="https://www.linkedin.com/in/connie-kang-948366115/">
                            <Icon link name='linkedin' size='large'/>
                        </a>
                        <a href="https://medium.com/@hqk1121">
                            <Icon link name='medium' size='large'/>
                        </a>
                    </span>
                    
                </Grid.Column>
                <Grid.Column id="contactform">
                    
                    <Form size="big">
                    <h2>Let's chat!</h2>
                        <Form.Input 
                            fluid
                            label='Name' 
                            type='text' 
                            placeholder='Joe'
                            required 
                        />
                        <Form.Input 
                            fluid
                            label='Email' 
                            type='email' 
                            placeholder='joe@mail.com' 
                            required 
                        />
                        <Form.Field
                            control={TextArea}
                            label='Message'
                            placeholder='Message'
                            required
                        />
                        <Form.Field>
                        <Checkbox label='Do you like my website?' />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Grid.Column>
            </Grid>
           
        </Container>
    )
}

export default Contact