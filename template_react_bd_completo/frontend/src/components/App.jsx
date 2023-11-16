import React from "react";
import axios from "axios";

import Container  from "@mui/material/Container";
import CssBaseline  from "@mui/material/CssBaseline";
import Grid  from "@mui/material/Unstable_Grid2";
import Stack  from "@mui/material/Stack";

import Titulo from "./Titulo";
import Cursos from "./Cursos";

axios.defaults.baseURL = "http://localhost:3010/";
axios.defaults.headers.common["Content-Type"] =
    "application/json;charset=utf-8";

function App() {

    return (
        <Container sx={{ flexGrow: 1 }} maxWidth="lg" >
            <CssBaseline />
            <Grid container justifyContent="center"  spacing={2}>
                <Grid  md={6}>
                    <Stack spacing={2}>
                        <Titulo mensagem={"Hello World of PostgreSQL!"} image='postgresql_logo.png' alternative='Logo do PostgreSQL.' />
                        <Cursos />
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
