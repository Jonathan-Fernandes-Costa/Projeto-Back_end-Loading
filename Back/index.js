const express = require('express')

const app = express()
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5501");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	next();
  });
app.use(express.json())
app.listen(5500, () => console.log('Server na porta 5500'))   
app.use(express.json())
const bijuus = [];

// Listando Bijuus

app.get('/bijuus', (req, res) => {
    const { name } = req.query;
	
	const results = name
    ? bijuus.filter(project => project.name.includes(name))
    : bijuus;
    return res.json(results);
})
app.get('/bijuus/:index', (req, res) => {
    const { index } = req.params;
	
    const bijuuIndex = bijuus.findIndex(bijuu => bijuu.index === index);
    return res.json(bijuus[bijuuIndex]);
})

/*//Retornar todos os 'bijuus'
server.get('/bijuus', (req, res) => {
    return res.json(bijuus);
});
*/


//Criar um novo 'bijuus'

app.post('/bijuus', (req, res) => {
    let { name, animal, quantcaudas, jinchuuriki, descfisica, aldeia, status, acontecimentos, foto } = req.body;

	let bijuu = { index: quantcaudas, name, animal, quantcaudas, jinchuuriki, descfisica, aldeia, status, acontecimentos, foto };
    bijuus.push(bijuu);



    return res.json(bijuu);
})

//Atualizar uma bijuu

app.put('/bijuus/:index', (req, res) => {
    const { index } = req.params;
    const { name, animal, quantcaudas, jinchuuriki, descfisica, aldeia, status, acontecimentos, foto } = req.body;
	const bijuuIndex = bijuus.findIndex(bijuu => bijuu.index === index);
	if (bijuuIndex == -1) {
    	return res.status(400).json({ error: "Bijuu Not Found!" });
	}
	
	const bijuu = {
		index: quantcaudas, name, animal, quantcaudas, jinchuuriki, descfisica, aldeia, status, acontecimentos, foto
	};

	bijuus[bijuuIndex] = bijuu;

  	return res.json(bijuu);
    /* bijuus[index] = name, animal, quantidadecaudas, jinchuuriki, descfisica, aldeia, status, acontecimentos, foto ;
    return res.json(bijuus);*/
})

// Deletar uma bijuu
app.delete('/bijuus/:index', (req, res) => {
    const { index } = req.params;
	const bijuuIndex = bijuus.findIndex(bijuu => bijuu.index === index);
    if (bijuuIndex < 0) {
		return response.status(400).json({ error: "Bijuu Not Found!" });
	  }
	
	  bijuus.splice(bijuuIndex, 1);
	
	return res.json({message: "Biju deletada!" });
})
