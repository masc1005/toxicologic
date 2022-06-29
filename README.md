# toxicologic


**Este código é um desafio técnico para empresa Rainbow RH**

- Techs e Libs utilizadas no desenvolvimento
  - Node.js 
  - TypeScript
  - MongoDB Atlas
  - Express Js
  - PrismaORM
  - JsonWebToken - JWT
#

Como solicitado foi feito deploy no Heroku na [URL](https://toxicologic.herokuapp.com/).

Para a execução do projeto é necessário acessar apenas o link acima, utilizando a rotas,<br>
e as intruções abaixo no seu client(Postman ou Insomnia).


#

**exmplo de execução:**

https://toxicologic.herokuapp.com/login

body{<br>
  "email":"leoni@gmail.com", <br>
  "password": "1020"<br>
}

preview { <br>
	"userAuth": {<br>
		"name": "Leoni", <br>
		"email": "leoni@gmail.com" <br>
	}, <br>
	"token": 
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
  eyJpZCI6IjYyYmNkNzJhMzdhODEzNTIyMzY4OWFmMSIsIm5hbWUiOiJMZW9uaSIsImlhdCI6MTY1NjU0NjAyMSwiZXhwIjoxNjU2NjMyNDIxfQ.
  3PDZ4xeFW7TlFTH1aL1nAGPDbapz8KjW90nNrXDApx4"<br>
}


- essa é uma requisição possível dentro da aplicação

#
#### Rotas do projeto:

- /user, `method POST` 
  - Cria um usuário
  - body: {<br>
    "email":"seu email", <br>
    "name": "sua nome",<br>
	  "password": "sua senha"<br>
  }

- /login, `method POST` 
  - Gerar um token JWT para acessar a rotas privadas.
  - body: {<br>
    "email":"seu email", <br>
	  "password": "sua senha"<br>
    }

- /patient, `method POST` 
  - Cria um paciente que será associado a um exame.
  - body: {<br>
    "email":"seu email", <br>
    "name": "sua nome",<br>
  }
  - header: {<br>
    "Authorization":"token jwt gerado no login", <br>
  }
  
- /examples, `method GET` 
  - Lista todos os exames com dados do paciente.
  - header: {<br>
    "Authorization":"token jwt gerado no login", <br>
  }
  
- /examples, `method POST` 
  - Cria um paciente que será associado a um exame.
  - body: {<br>
      "amphetamine": 0,<br>
      "benzoylecgonine": 0,<br>
      "cocaethylene": 1,<br>
      "cocain": 0.5,<br>
      "codeine": 0.2,<br>
      "heroine": 0.1,<br>
      "MDA": 0,<br>
      "MDMA": 0.1,<br>
      "methamphetamine": 0.1,<br>
      "morphine": 0,<br>
      "norcocaine": 0,<br>
      "THC": 0,<br>
      "patient": "lucas@gmail.com"<br>
  }
  - header: {<br>
    "Authorization":"token jwt gerado no login", <br>
  }
