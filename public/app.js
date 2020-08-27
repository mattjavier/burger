// event listener for addBurger button
document.getElementById('addBurger').addEventListener('click', event => {
  event.preventDefault()

  // POST request to insert a burger into db
  axios.post('/api/burgers', {
    burger_name: document.getElementById('burgerName').value,
    devoured: false
  })
    .then(({ data }) => {

      // new burger element (a div, bootstrap card)
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

      // reset form input
      document.getElementById('burgerName').value = ''
    })
    .catch(err => console.log(err))
})

// event listener on all 'devour' buttons
document.addEventListener('click', event => {
  if (event.target.classList.contains('devour')) {

    // PUT request to update 'devour' property
    axios.put(`/api/burgers/${event.target.parentNode.parentNode.id}`, {
      devoured: true
    })
      .then(() => {

        // re-render burger element to 'devoured' column
        let burgerElem = document.createElement('div')
        burgerElem.classList = 'burger-cards card text-danger shadow-lg p-3 mb-5 rounded-0'
        burgerElem.id = event.target.parentNode.parentNode.id
        burgerElem.innerHTML = `
          <p class="card-text">${event.target.dataset.name}</p>
        `
        document.getElementById('devoured').append(burgerElem)

        // remove burger element on 'not devoured' column
        event.target.parentNode.parentNode.remove()
      })
      .catch(err => console.log(err))
  }
})