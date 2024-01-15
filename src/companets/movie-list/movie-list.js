import "./movie-list.css";
import Movielistitem from "../movie-list-item/movie-list-item";
const Movielist = ({data, onDelete, onToggleProp}) => {
  return (
    <ul className="movie-list ">
      {data.map(item =>(
       
          <Movielistitem key={item.id} name={item.name} wiever={item.wiever} favourite={item.favourite} like={item.like} onDelete={() => onDelete(item.id) } onToggleProp={ e => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle')) }
             />
          // <Movielistitem {...item}/>
     
      ))}
         
       
    </ul>
  )
}

export default Movielist