const url = 'https://rickandmortyapi.com/api/character/'

const get = async() =>{
  try{
    const response =await fetch(url)
    const data = await response.json()

    const tr = document.getElementById('lista')
    const td = data.results.map(o => `<li class="list-group-item">${o.species}</li>`).join('')
    tr.innerHTML = td
  } catch(error){
      console.log(error);
  }
}
get()
