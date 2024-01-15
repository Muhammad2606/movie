import { useState} from "react";
import "./movies-add-form.css";

const Moviesaddform = ({addForm}) =>{
  const [state, setState] = useState({name:'', wiever:''})


  const onChangeHandlerInput = e  =>{
    setState({ ...state, [e.target.name]: e.target.value, })
  }


  const addFormHandler = e =>{
    e.preventDefault()
    if (state.name === '' || state.wiever === ''){
      alert("exemple:    thor 26")
      return
    } 
    // if (state.name === 'a' || state.wiever === '0') return
    const data = {name:state.name, wiever:state.wiever}
    addForm(data)
    setState({name:'', wiever:''})
  }
  return (
    <div className="movies-add-form">
      <h3>yangi kino qoshish</h3>
      <form className="add-form d-flex" onSubmit={addFormHandler}>
        <input onChange={onChangeHandlerInput} type="text" className="form-control new-post-label" placeholder="qanday kino?" name="name" value={state.name} />
        <input onChange={onChangeHandlerInput} type="number" className="form-control new-post-label" placeholder="nechi marotama korilgan?" name="wiever" value={state.wiever} />
        <button type="submit" className="btn btn-outline-dark">
          qoshish
        </button>
      </form>
    </div>
  )

}



export default Moviesaddform