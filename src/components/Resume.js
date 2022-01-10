import { Container } from 'semantic-ui-react'
import { Document } from 'react-pdf'
import resume from "./Haiqing (Connie) Kang Resume.pdf"

function Resume() {
    return (
        <Container id="resume">
            <iframe src={`${resume}#view=fitH`} title="Resume" frameborder="0" />
        </Container>
    )
}

export default Resume