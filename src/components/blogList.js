import { Link } from "react-router-dom";
import {Container, Grid, Paper, Typography} from '@material-ui/core';
import NoteCard from '../components/noteCard';

const BlogList = ({ blogs, title }) => {
    return (
      <Container className="blog-list">
        <Typography
          variant="h1"
          color="primary"
        >
          Blogs:
        </Typography>
        <Grid container spacing={3}>
            {blogs.map(blog => (
              <Grid item lg={4} md={6} xs={12}>
                <NoteCard blog={blog}/>
              </Grid>
            ))}
        </Grid>
      </Container>
    );
  }
   
  export default BlogList;