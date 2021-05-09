import { useState } from "react";
import {useHistory} from 'react-router-dom';
import {TextField, makeStyles, Typography, Button} from '@material-ui/core'
import { PlayCircleFilledWhite } from "@material-ui/icons";

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    },
    btn: {
        fontSize: 18,
        variant: 'contained',
        '&:hover': {
            backgroundColor: 'green'
        },
    }
})


const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isPending, setIsPending] = useState(false);
    const [titleError, setTitleError] = useState(false);
    const [bodyError, setBodyError] = useState(false);

    const history = useHistory();

    const classes = useStyles();

    function handleSubmit(e){
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(true)

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then (() => {
            setIsPending(false)
            history.push('/');
        })
    };

    function handleError(e){
        setTitleError(false);
        setBodyError(false);
        
        if(title === '' ){
            setTitleError(true);
        } else if (body === '') {
            setBodyError(true);
        } else {
            handleSubmit(e)
        }
    }

    return ( 
        <div className="create">
            <Typography
                variant="h2"
                color="primary"
            >
                Add a New Blog
            </Typography>
            <form
            noValidate
            autoComplete="off"
            >
                <TextField
                    label="Blog Title"
                    color="secondary"
                    fullWidth
                    multiline
                    rows={2}
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    error={handleError}
                />
                <TextField
                    className={classes.field}
                    label="Blog Body"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    multiline
                    rows={6}
                    required
                    value={body}
                    error={bodyError}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                </select>
                {!isPending &&
                    <Button
                        className={classes.btn}
                        color="primary"
                        variant="contained"
                        onClick={handleError}
                    >
                        Add Blog
                    </Button>
                }
                {isPending &&<Button disabled>Adding blog</Button>}
            </form>
        </div>
     );
}
 
export default Create;