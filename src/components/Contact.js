import { Container, Button, Checkbox, Form, TextArea } from 'semantic-ui-react'

function Contact() {
    return (
        <Container id="contact">
            <div id="contacttext">
                <h2>Want to tell me something? Don't be shy!</h2>
            </div>
            <div id="contactform">
                <Form>
                    <Form.Group widths='equal'>
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
                    </Form.Group>
                    <Form.Field
                        control={TextArea}
                        label='Message'
                        placeholder='Message'
                    />
                    <Form.Field>
                    <Checkbox label='Do you like my website?' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        </Container>
    )
}

export default Contact