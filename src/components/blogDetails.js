import { useParams, useHistory } from "react-router-dom";
import useFetch from "../useFetch";
import {Typography, Button, Container} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {makeStyles} from '@material-ui/core';


const useStyles = makeStyles({
    btn: {
        fontSize: 18,
        '&:hover': {
            backgroundColor: 'red'
        }
    },
    title: {
        textDecoration: "underline",
        marginBottom: 10
    }
})



const BlogDetails = () => {
    const classes = useStyles();
    const {id} = useParams();
    const {data: blog, error, isLoading} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        })
        .then(() => {
            history.push('/')
        })
    }
    
    return ( 
        <div className="blog-details">
            {isLoading && <div>Blog is loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <Container className="classes.root">
                <Typography 
                    className={classes.title}
                    variant="h2" 
                    component="h2"
                    color="secondary"
                    align="left"
                >
                    {blog.title}
                </Typography>
                <Typography
                    variant="h4"
                    color="error"
                    align="left"
                >
                    Written By: {blog.author}
                </Typography>
                <Typography
                    variant="body1"
                >
                    {blog.body}
                </Typography>
                <Button
                    className={classes.btn}
                    color="primary"
                    variant="contained"
                    onClick={handleClick}
                    startIcon={
                        <DeleteForeverIcon
                        fontSize="small"
                    />
                    }
                >
                    Delete
                </Button>
                </Container>
            )}
        </div>
     );
}
 
export default BlogDetails;