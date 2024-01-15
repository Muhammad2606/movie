import { useState} from "react";
import "./search-panel.css";

const SearchPanel = props  =>{
    const [term, setTerm] = useState('')


    const updateTermHeandler = e =>{
      const term = e.target.value.toLowerCase()
      setTerm(term)
     props.updateTermHeandler(term)
    }

  return (<input type="text" className="form-control search-input" placeholder="kinolarni qidrish" onChange={updateTermHeandler} value={term} />
  )

  }



export default SearchPanel