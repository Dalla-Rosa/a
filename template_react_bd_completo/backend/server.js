const express = require("express");
const cors = require("cors");

const pgp = require("pg-promise")({});

const usuario = "postgres";
const senha = "postgres";
const db = pgp(`postgres://${usuario}:${senha}@localhost:5432/cursos`);

(async()=>{

    
    await db.connect();

    const app = express();
    app.use(cors());
    app.use(express.json());

    app.listen(3010, () => console.log("Servidor rodando na porta 3010."));

    app.get("/", (req, res) => {

        res.send("Hello, world!");
    });

    // db.any - 0 ou mais resultados
    // db.all - retornar 1 ou mais resultados
    // db.one - apenas 1 resultado
    // db.none - não retorna resultado - quando atualizamos as estruturas do BD

    app.get("/cursos",
        async (req, res) => {
        try {
            const cursos = await db.any("SELECT * FROM cursos;");
            console.log('Retornando todos cursos.');
            res.json(cursos).status(200);
        } catch (error) {
            console.log(error);
            res.sendStatus(400);
        }
    });

    app.get("/curso", async (req, res) => {
        try {
            const cursoId = parseInt(req.query.id);
            console.log(`Retornando ID: ${cursoId}.`);
            const cursos = await db.one(
                "SELECT cid, cnome, cdescr FROM cursos WHERE id = $1;",
                cursoId
            );
            res.json(cursos).status(200);
        } catch (error) {
            console.log(error);
            res.sendStatus(400);
        }
    });

    app.post("/curso", async (req, res) => {
        try {
            const cursoNome = req.body.cnome;
            const cursoDescr = req.body.cdescr;
            console.log(`Nome: ${cursoNome} - Descricao: ${cursoDescr}`);
            db.none(
                "INSERT INTO cursos (cnome, cdescr) VALUES ($1, $2);",
                [cursoNome, cursoDescr]
            );
            res.sendStatus(200);
        } catch (error) {
            console.log(error);
            res.sendStatus(400);
        }
    });

})();
