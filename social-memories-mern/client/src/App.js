import React, { useEffect} from "react";
import { Container, AppBar, Typography, Grow, Grid} from "@material-ui/core";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getPosts } from "./action/posts";

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    return (
        <Container maxWidth="lg">
            <AppBar classNames={classes.appBar} position="static" color="primary">
                <Typography classNames={classes.heading} variant="h6" align="center"> Memories </Typography>
                <img classNames={classes.image} src="https://i.imgur.com/XyqQZQZ.png" alt="memories" style={{width: "100%", height: "auto"}} />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
                

        
            </Container>

    );
    }

    export default App;