import "./movie-list-item.css";

const Movielistitem = (props) => {
    const {name, wiever, onDelete, onToggleProp,  favourite,like} = props
    return (
        <li className= {`list-group-item d-flex justify-contant-between ${favourite && "favourite"} ${like && "like"}`}>
         <span  onClick={onToggleProp} className="list-group-item-label " data-toggle='like'>{name}</span>
         <input type="number"  className="list-group-item-input" defaultValue={wiever}/>
         <div className="d-flex justify-contant-center align-items-center">
             <button type="button" className="btn-cookie btn-sm" onClick={onToggleProp} data-toggle='favourite'>
                 <i className="fas fa-cookie"></i>
             </button>
             <button type="button" className="btn-trash btn-sm" onClick={onDelete }>
                 <i className="fas fa-trash"></i>
             </button>
             <i className="fas fa-star" ></i>
         </div>
        </li>
        
       )
}

export default Movielistitem