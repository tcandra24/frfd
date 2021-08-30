import './frontend/index.js'
import Data from './backend/data.js'

let getCategories = []
let AllRecipe = []

const getAllDataCategories = () => {
  Data.getData('list.php?c=list')
    .then(({ data }) => {
      getCategories = data.meals
      const listCategoriiesElement = document.querySelector('#list-categories')
      for (const c of getCategories) {
        const option = document.createElement('option')
        option.setAttribute('value', c.strCategory)
        option.innerText = c.strCategory
        listCategoriiesElement.appendChild(option)
      }
    }).catch(error => {
      console.log(error)
    })
}

const main = () => {
  const searchData = document.querySelector('search-data')
  const itemListElement = document.querySelector('list-items')
  const resultElement = document.querySelector('#result')

  const btnSearchData = () => {
    if (searchData.value) {
      itemListElement.category = searchData.value
      Data.getData(`filter.php?c=${searchData.value}`)
        .then(({ data }) => {
          AllRecipe = data.meals
          itemListElement.items = AllRecipe
          resultElement.scrollIntoView(true)
        }).catch(error => {
          console.log(error)
        })
    }
  }

  searchData.eventBtn = btnSearchData

  getAllDataCategories()
}

export default main
