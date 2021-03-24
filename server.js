const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let rappers = {
    '21 Savage': {
        'age': 28,
        'birthname': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'Chance the Rapper': {
        'age': 28,
        'birthname': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'unknown': {
        'age': 'unknown',
        'birthName': 'unknown', 
        'birthLocation': 'unknown',
    }
}



app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/rappers/:rapperName', (request, response) => {
    const rapName = request.params.rapperName.toLowerCase()
    console.log(rapName)
    if (rappers[rapName]) {
        response.json(rappers[rapName])
    } else {
        response.json(rappers['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})

