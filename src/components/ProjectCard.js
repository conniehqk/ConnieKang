import { Button, Image, Modal, Icon } from 'semantic-ui-react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function ProjectCard({ project, open, handleClick }) {
    return (
        <Modal
            onClose={()=>handleClick(-1)}
            onOpen={()=>handleClick(parseInt(project.id))}
            open={open===parseInt(project.id)}
            trigger={
            <Button floated='right'>Details</Button>}
        >
            <Modal.Header> {project.title}</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Carousel>
                        <div>
                            <Image src={project.image1} />
                        </div>
                        <div>
                            <Image src={project.image2} />
                        </div>
                        <div>
                            <Image src={project.image3} />
                        </div>
                    </Carousel>
                    
                    <p>
                        {project.description}
                    </p>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <a href={project.github}><Icon size="big" name="github"></Icon></a>
                <Button color='black' onClick={() => handleClick(-1)}>
                Close
                </Button>
            </Modal.Actions>

        </Modal>
    )
}

export default ProjectCard