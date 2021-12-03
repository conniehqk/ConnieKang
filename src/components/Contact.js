import { useState } from 'react'
import { Container, Button, Checkbox, Form, TextArea, Grid, Icon } from 'semantic-ui-react'
import { send, init } from 'emailjs-com';

function Contact() {
    const [formMessage, setFormMessage] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [endorsement, setEndorsement] = useState(false)
    function handleChange(e) {
        setFormMessage({
            ...formMessage, [e.target.name]:e.target.value
        })
    }
    const userID = init('user_NACkm4Te0UR15Mzzi2NOS');
    function handleSubmit(e) {
        e.preventDefault()
        const templateParams = {
            from_name: `${formMessage.name}`,
            from_email: `${formMessage.email}`,
            message: formMessage.message,
            endorsement: endorsement? "liked the website":"didn't like the website"
        }
        send(
            'service_44cpah8',
			'template_2c9kkfq',
			templateParams,
			userID
        ).then(r=>{console.log(r.text)},(error)=>{
            console.log(error.text)
            alert('Something went wrong, please try again.')
        })
        e.target.reset()
    }

    return (
        <Container id="contact">
            <Grid stackable columns={2}>
                <Grid.Column id="doodle">
                    <img className="animate__animated animate__fadeIn" src="https://doodleipsum.com/700?i=91f7a6c433fd73c95da86b8ffb8b7b02" alt="Emails by Irene Falgueras" />
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
                    
                    <Form onSubmit={handleSubmit} size="big">
                        <h2>Let's chat!</h2>
                        <Form.Input 
                            fluid
                            name='name' 
                            label='Name' 
                            type='text' 
                            placeholder='Joe'
                            onChange={handleChange}
                            required 
                        />
                        <Form.Input 
                            fluid
                            name='email'
                            label='Email' 
                            type='email' 
                            placeholder='joe@mail.com' 
                            onChange={handleChange}
                            required 
                        />
                        <Form.Field
                            control={TextArea}
                            name="message"
                            label='Message'
                            placeholder='Message'
                            onChange={handleChange}
                            required
                        />
                        <Form.Field>
                        <Checkbox onChange={()=>{setEndorsement(!endorsement)}} label='Do you like my website?' />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Grid.Column>
            </Grid>
           
        </Container>
    )
}

export default Contact