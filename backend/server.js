const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('client/build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
// app.use((req, res, next) => {
//     // cors()
//     res.header('Access-Control-Allow-Origin', '*');
//     header("Access-Control-Allow-Headers: *");
//     header('Access-Control-Allow-Methods: GET, POST, PUT');

//     next();
//   });

app.use("/upload", (req, res, next) => {
    res.set("Access-Control-Allow-Headers", "*");
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET, POST, PUT");
    next();
});

app.post('/upload', async (req, res) => 
{
    console.log(req.body);
    console.log("Success");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});