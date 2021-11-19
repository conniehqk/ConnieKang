import { Container, Grid } from "semantic-ui-react";
import CodeBlockCo from "./CodeBlock";

function Home() {
    return (
        <Container>
            <Grid id="homepage">
                <Grid.Column width={4}></Grid.Column>
                <Grid.Column width={8}>
                    <div>
                        <CodeBlockCo text="print('Hello World')" language="Python" showLineNumbers={false} />
                    </div>
                </Grid.Column>
                <Grid.Column width={4}></Grid.Column>
            </Grid>
        </Container>
    )
}

export default Home