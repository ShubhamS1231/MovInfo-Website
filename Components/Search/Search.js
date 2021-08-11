import React, {useState} from 'react'
import axios from 'axios'
import Moviecard from '../Moviecard/Moviecard'
function Search() {
    const [data, setdata] = useState([])
  const [search, setsearch] = useState(" ")
  
  const getSearch = (search)=>{
    axios.get(`http://api.tvmaze.com/search/shows?q=${search}`)
      .then(response => {
        
        let newData = response.data.map(item=>{
          let {genres,officialSite,url,id,image,language,name,summary,premiered,rating,status} = item.show
          let d = {genres,officialSite,url,id,image,language,name,summary,premiered,rating,status}
          return d
        })
        setdata(newData)
      })
      .catch(err => console.log(err))
  }
const onSubmitHandler= e=>{
  e.preventDefault()
  getSearch(search.trim())
}
    return (

<div className='container mt-2 p-5'>
        <h1 className="text text-primary mb-5">Search and Save Series of your choice</h1>
            <form onSubmit={onSubmitHandler} className="d-flex">
        <input onChange={e=> setsearch(e.target.value)} className="form-control me-2" type="search" name="search" value={search} placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <hr />
      {data.length>0 ? data.map(item=>{
        return <Moviecard  data={item} key={item.id}/>
      }) : 'No Search Results Yet..'}
        </div>

    )
}

export default Search
