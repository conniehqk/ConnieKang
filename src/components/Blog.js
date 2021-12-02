import { useEffect, useState } from "react"
import { Accordion, Button, Container } from "semantic-ui-react"
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
            
                {blogs.map((blog,index)=>{
                    return (
                    <Accordion key={index} fluid>
                        <Accordion.Title
                            active={activeIndex === index}
                            index={index}
                            onClick={handleClick}
                        >
                            <h1>{blog.title}</h1>
                            <p>{blog.pubDate.slice(0,11)}</p>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === index}>
                            <div>
                                <p>{parse(blog.description.slice(0,290))}...</p>
                                <Button href={blog.link}>View on Medium</Button>
                            </div>
                        </Accordion.Content>
                    </Accordion>
                )})}
            
        </Container>
    )
}

export default Blog