document.querySelector('button').addEventListener("click", getRapName)

async function getRapName(){
    const rapName = document.querySelector('input').value
    try {
        const response = await fetch(`http://localhost:8000/api/rappers/${rapName}`)
        const data = await res.json()
    
        console.log(data)
    }
    catch (err){
        console.log(err);
    }
   
}