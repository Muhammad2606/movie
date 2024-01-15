import { useState } from 'react';
import './app.scss';
import AppInfo from "../app-info/app-info";
import AppFilter from "../app-filter/app-filter";
import SearchPanel from "../search-panel/search-panel";
import Movielist from '../movie-list/movie-list';
import Moviesaddform from '../movies-add-form/movies-add-form';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [data, setDate] = useState(arr)
  const [term, setTerm] = useState('')
  const [filter, setFilter] = useState("all")
  const onDelete = id => {
    setDate(data.filter(c => c.id !== id))
  }
  const addForm = item => {
    const newItem = { name: item.name, wiever: item.wiever, id: uuidv4(), favourite: false, like: false }
    const newArr = [...data, newItem]
    setDate(newArr)
  }
  const onToggleProp = (id, prop) => {
    const newArr = data.map(item => {
      if (item.id === id) {
        return { ...item, [prop]: !item[prop] }

      }
      return item
    })

    setDate(newArr)
  }

  const searchHeandler = (arr, term) => {
    if (term === 0) {
      return arr
    }
    return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)

  }

  const filterHeandler = (arr, filter) => {
    switch (filter) {
      case 'populer':
        return arr.filter(c => c.favourite);
      case 'mostWiever':
        return arr.filter(c => c.wiever > 800);
      default:
        return arr;
    }
  }

  const updateTermHeandler = term => setTerm(term)
  const updateFilterHeandler  = filter => setFilter(filter)


  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo allMoviesCount={data.length} allSevliCount={data.filter(c => c.favourite).length} />
        <div className='search__panel'>
          <SearchPanel updateTermHeandler={updateTermHeandler} />
          <AppFilter filter={filter} updateFilterHeandler={updateFilterHeandler} />
        </div>
        <Movielist onToggleProp={onToggleProp} data={filterHeandler(searchHeandler(data,term),filter)} onDelete={onDelete} />
        <Moviesaddform addForm={addForm} />
      </div>
    </div>
  )


}


export default App


const arr = [
  
    { name: "Empair Of Osman", wiever: 998, favourite: false, like: false, id: 1 },
    { name: "thor", wiever: 888, favourite: false, false: true, id: 2 },
    { name: "ironmen", wiever: 897, favourite: false, like: false, id: 3 },

  
]