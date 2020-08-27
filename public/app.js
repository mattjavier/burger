document.getElementById('addBurger').addEventListener('click', event => {
  event.preventDefault()

  axios.post('/api/burgers', {
    burger_name: document.getElementById('burgerName').value,
    devoured: false
  })
    .then(({ data }) => {
      let burgerElem = document.createElement('div')
      burgerElem.className = 'burger-cards card text-danger shadow-lg p-3 mb-5 rounded-0'
      burgerElem.id = data.id
      burgerElem.innerHTML = `
        <p class="card-text">${document.getElementById('burgerName').value}</p>
        <div class="container-fluid text-center">
          <button
            data-name="${document.getElementById('burgerName').value}" 
            class="devour btn btn-small btn-danger rounded-pill">Devour It</button>
        </div>
      `
      document.getElementById('notDevoured').append(burgerElem)
      document.getElementById('burgerName').value = ''
    })
    .catch(err => console.log(err))
})

document.addEventListener('click', event => {
  if (event.target.classList.contains('devour')) {
    axios.put(`/api/burgers/${event.target.parentNode.parentNode.id}`, {
      devoured: true
    })
      .then(() => {
        let burgerElem = document.createElement('div')
        burgerElem.classList = 'urger-cards card text-danger shadow-lg p-3 mb-5 rounded-0'
        burgerElem.id = event.target.parentNode.parentNode.id
        burgerElem.innerHTML = `
          <p class="card-text">${event.target.dataset.name}</p>
        `
        document.getElementById('devoured').append(burgerElem)
        event.target.parentNode.parentNode.remove()
      })
      .catch(err => console.log(err))
  }
})