const nameInput = document.getElementById('petName')
const ownerinput = document.getElementById('ownerName')
const speciesInput = document.getElementById('species')
const breedInput = document.getElementById('breed')

const saveButton = document.querySelector('form button')

const pets = []

class Pet {
  constructor(_petName, _owenerName, _species, _breed) {
    this.petName = _petName
    this.owenerName = _owenerName
    this.species = _species
    this.breed = _breed
  }
  sameOwner(otherPet) {
    if (this.owenerName === otherPet.owenerName) {
      return true
    } else return false
  }
}

const fillRowWithCards = function () {
  const row = document.getElementById('petCard')

  row.innerHTML = ''

  pets.forEach((pet) => {
    const newCol = document.createElement('div')
    newCol.classList.add('col')

    newCol.innerHTML = `
          <div class="card">
              <div class="card-body">
                  <h5 class="card-title">${pet.petName}</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">${pet.owenerName}</h6>
                  <h6 class="card-subtitle mb-2 text-body-secondary">${pet.species}</h6>
                  <h6 class="card-subtitle mb-2 text-body-secondary">${pet.breed}</h6>
              </div>
          </div>
          `

    row.appendChild(newCol)
  })
  nameInput.value = ''
  ownerinput.value = ''
  speciesInput.value = ''
  breedInput.value = ''
}

const formReference = document.getElementsByTagName('form')[0]
formReference.addEventListener('submit', function (e) {
  e.preventDefault()

  const newPet = new Pet(
    nameInput.value,
    ownerinput.value,
    speciesInput.value,
    breedInput.value
  )

  for (i = 0; i < pets.length; i++) {
    if (newPet.sameOwner(pets[i]) === true) {
    }
    console.log('stesso proprietario')
  }
  pets.push(newPet)

  fillRowWithCards()
})
