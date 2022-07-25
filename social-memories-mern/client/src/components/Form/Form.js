import React, {useState} from "react";
import { TextField, Button, Typography, Paper} from "@material-ui/core";
import useStyles from "./styles";
import { FileBase } from "react-file-base64";

  

const Form = () => {
    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: ''
    });
    const classes = useStyles();
    const handleSubmit = (e) => {
    }

    const clear = () => {
    }

    return (
    <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
            <Typography className={classes.heading} variant="h6" align="center">Creating a Memory</Typography>
            <TextField className={classes.textField} name="creator" label="Creator" variant="outlined" margin="normal"
            value={postData.creator} onChange={(e) => setPostData({...postData, creator: e.target.value})} fullWidth />
             <TextField className={classes.textField} name="title" label="Title" variant="outlined" margin="normal"
            value={postData.title} onChange={(e) => setPostData({...postData, creator: e.target.value})} fullWidth />
             <TextField className={classes.textField} name="message" label="Message" variant="outlined" margin="normal"
            value={postData.message} onChange={(e) => setPostData({...postData, creator: e.target.value})} fullWidth />
             <TextField className={classes.textField} name="tags" label="Tags" variant="outlined" margin="normal"
            value={postData.tags} onChange={(e) => setPostData({...postData, creator: e.target.value})} fullWidth />
            < div className="classes.fileInput">
                <FileBase 
                    type="file"
                    multiple={false}
                    onDone={({base64} ) => setPostData({...postData, selectedFile: base64})} />
                    <Button variant="container" color="primary" type="submit" className={classes.buttonSubmit} fullWidth size="large">Submit</Button>
                    <Button variant="contained" color="secondary" type="submit" fullWidth size="small" onClick={clear}>Submit</Button>
            </div>
        </form>
    </Paper>

    );
   
    }

    export default Form;