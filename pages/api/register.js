import axios from 'axios';
import { setCookie } from 'nookies'

export default async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const response = await axios.post('http://localhost:1337/api/auth/local/register', {
      username,
      email,
      password,
    })

    res.status(200).end("Ok");
  } catch (e) {
    var mes = e.response.data.error.message.indexOf(" errors occurred") <0 ? e.response.data.error.message: e.response.data.error.details.errors[0].message;
    switch (mes){
        case "email must be a valid email": {res.status(200).send("NoValidEmail");break;}
        case "Please provide a valid email address": {res.status(200).send("NoValidEmail");break;}
        case "Email is already taken": {res.status(200).send("EmailExist");break;}
        case "Username already taken": {res.status(200).send("LoginExist");break;}
        case "Email already taken": {res.status(200).send("EmailExist");break;}       
        default: res.status(400).send(e.response.data.error.message);
    }
  }
}