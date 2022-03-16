const express = require('express')
const app = express();
const PORT = 8080;

app.use( express.json() )

app.listen(
    PORT,
    () => console.log(`it is running at Port ${PORT}`)
);


app.get('/tshirt', (request, response) => {
    response.status(200).send({
        tshirt: 'cooles shirt',
        size: 'large'
    })
});


app.post('/tshirt/:id', (request, response) => {
    const { id } = request.params;
    const { logo } = request.body;

    if (!logo) {
        response.status(418).send({ message: "We neeed a logo!" })
    }

    response.send({
        tshirt: `t shirt with your logo ${logo} and id ${id}`,
    })
})