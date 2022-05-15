import axios from 'axios';
import { setCookie } from 'nookies'

export default async (req, res) => {
  const { identifier, password } = req.body;
  try {
    
    const response = await axios.post('http://localhost:1337/api/auth/local', {
        identifier,
        password
    });

    setCookie({ res }, 'jwt', response.data.jwt, {
      maxAge: 24*60*60,
      path: '/',
    });

    res.status(200).end("Ok");
  } catch (e) {
    var mes = e.response.data.error.message.indexOf(" errors occurred") <0 ? e.response.data.error.message: e.response.data.error.details.errors[0].message;
    switch (mes){
        case "Invalid identifier or password": {res.status(200).send("InvalidAuth");break;}
        case "identifier is a required field": {res.status(200).send("EmLogin");break;}
        case "password is a required field": {res.status(200).send("EmPass");break;}
        default: res.status(400).send(e.response.data.error.message);
    }
  }
}