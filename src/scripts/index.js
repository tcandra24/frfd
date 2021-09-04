import './frontend/index.js'
import Data from './backend/data.js'
import swal from 'sweetalert'

let getCategories = []
let AllRecipe = []

const getAllDataCategories = async () => {
  const listCategoriiesElement = document.querySelector('#list-categories')
  try {
    const { data } = await Data.getData('list.php?c=list')
    getCategories = data.meals
    for (const c of getCategories) {
      const option = document.createElement('option')
      option.setAttribute('value', c.strCategory)
      option.innerText = c.strCategory
      listCategoriiesElement.appendChild(option)
    }
  } catch (error) {
    console.log(error)
    const option = document.createElement('option')
    option.setAttribute('value', '')
    option.innerText = 'No Data'
    listCategoriiesElement.appendChild(option)
  }
}

const main = () => {
  const searchData = document.querySelector('search-data')
  const itemListElement = document.querySelector('list-items')
  const resultElement = document.querySelector('#result')

  const btnSearchData = async () => {
    try {
      if (searchData.value) {
        itemListElement.category = searchData.value
        const { data } = await Data.getData(`filter.php?c=${searchData.value}`)
        AllRecipe = await data.meals
        itemListElement.items = await AllRecipe
        resultElement.scrollIntoView(true)
      }
    } catch (error) {
      console.log(error)
      swal('Oops!', 'Error Get Data!', 'error')
    }
  }

  searchData.eventBtn = btnSearchData

  getAllDataCategories()
  // for (const a of AllRecipe) {
  //   // console.log(a.idMeal)
  //   eventColapse(a.idMeal)
  // }
}

export default main
