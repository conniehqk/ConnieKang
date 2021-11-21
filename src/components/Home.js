import { useState } from "react";
import { Container, Grid, Dropdown } from "semantic-ui-react";
import CodeBlockCo from "./CodeBlock";
import landing from "./landing";

function Home() {
    const [lang,changeLang] = useState("Python")
    const [langDemo, changeDemo] = useState(landing["Python"])
    const options = [
        { key:1, text: 'Python', value: 'Python' },
        { key:2, text: 'Ruby', value: 'Ruby' },
        { key:3, text: 'JavaScript', value: 'JavaScript' },
    ]
    function handleChange(e,{ value }) {
        changeLang(value)
        changeDemo(landing[value])
    }
    return (
        <Container>
            <Grid id="homepage">
                <Grid.Column mobile={1} tablet={2} computer={4}></Grid.Column>
                <Grid.Column mobile={14} tablet={12} computer={8}>
                    <Dropdown placeholder='Python' onChange={handleChange} search selection options={options} value={lang} />
                    <div>
                        <CodeBlockCo text={langDemo} language={lang} showLineNumbers={false} />
                    </div>
                </Grid.Column>
                <Grid.Column mobile={1} tablet={2} computer={4}></Grid.Column>
            </Grid>
        </Container>
    )
}

export default Home