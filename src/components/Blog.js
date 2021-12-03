import { useEffect, useState } from "react"
import { Accordion, Button, Container, Loader } from "semantic-ui-react"
import parse from 'html-react-parser';

function Blog() {
    const [blogs, setBlogs] = useState([])
    const [activeIndex, setActiveIndex] = useState(-1)
    useEffect(()=>{
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hqk1121")
        .then(r=>r.json()).then(data=>setBlogs(data.items))
    }, [])
    function handleClick(e, titleProps) {
        const new_index = activeIndex===titleProps.index ? -1 : titleProps.index
        setActiveIndex(new_index)
    }
    return (
        <Container id="blog" text>
                
            {
                blogs?
                blogs.map((blog,index)=>{
                    return (
                    <Accordion id="blogarticle" key={index} fluid>
                        <Accordion.Title
                            active={activeIndex === index}
                            index={index}
                            onClick={handleClick}
                        >
                            <h1>{blog.title}</h1>
                            <p>Published: {blog.pubDate.slice(0,11)}</p>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === index}>
                            <div id="blogcontent">
                                {parse(blog.description)}
                                <Button floated='right' href={blog.link}>View on Medium</Button>
                            </div>
                        </Accordion.Content>
                    </Accordion>
                )})
                :
                <Loader>Loading</Loader>
            }
            
        </Container>
    )
}

export default Blog