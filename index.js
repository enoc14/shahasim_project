require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const port = process.env.HOST;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/form', (req, res) => {
    const { inputNombre, inputApellidos, inputCelular, inputEdad } = req.body;

    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <h3>Detalles del contacto</h3>
            <ul>
                <li>Nombre: ${inputNombre} ${inputApellidos}</li>
                <li>Celular: ${inputCelular}</li>
                <li>Edad: ${inputEdad}</li>
            </ul>
        `;

        let transporter = nodemailer.createTransport({
            host: process.env.HOSTMAIL,
            port: process.env.PORTMAIL,
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
            }
        });
        
        let mailOptions = {
            from: 'test@testaccount.com',
            to: process.env.USER,
            replyTo: 'test@testaccount.com',
            subject: 'New Message',
            text: 'A new Message from someone',
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) return console.log(err);
            console.log('Message sent: %s', info.message);
            console.log('Message URL %s', nodemailer.getTestMessageUrl(info));
        });
    });

    console.log(req.body);
});

app.listen(port, () => console.log(`Server listen on port ${port}`));