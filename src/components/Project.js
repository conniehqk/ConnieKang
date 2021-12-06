import { Container, Card, Image, Label } from "semantic-ui-react"
import { projects } from "./Projectdata"
import ProjectCard from "./ProjectCard"
import { useState } from "react"


function Project() {
    const [openProject, setOpenProject]=useState()
    function handleClick(val) {
        setOpenProject(val)
    }
    return (
        <Container id="project">
            <Card.Group centered stackable itemsPerRow={3} >
            {
                projects.map((project)=>{
                    return (
                        <Card id="projectcard" key={project.id}>
                            <Card.Content>
                                <Image
                                wrapped
                                floated="left"
                                size="large"
                                src={project.image1}
                                />
                                <Card.Header>{project.title} </Card.Header>
                                <Card.Description>
                                <div>
                                    {project.tags.map((tag,index)=>{
                                        return (<Label key={index} size="tiny" tag>{tag}</Label>)
                                    })}
                                </div>
                                <div>
                                    {project.description.slice(0,80)}...
                                </div>
                                </Card.Description>
                                <ProjectCard project={project} open={openProject} handleClick={handleClick} />
                            </Card.Content>
                        </Card>
                    )
                })
            }
            </Card.Group>

        </Container>
    )
}

export default Project