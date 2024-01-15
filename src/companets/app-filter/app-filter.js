import "./app-filter.css";

const AppFilter = ({updateFilterHeandler, filter}) => {
  return (
    <div className="btn-group">
      {btnsArr.map(btn =>(
      <button key={btn.name} 	className={`btn ${filter === btn.name ? 'btn-dark' : 'btn-outline-dark'}`}   onClick={() => updateFilterHeandler(btn.name)} type="button"  >{btn.label}</button>

      ))}
   
    </div>
  )
}

const btnsArr  =[
  {name: 'all', label:'barcha kinolar'},
  {name: 'populer', label:'mashxur  kinolar'},
  {name: 'mostWiever', label:'eng kop korilgan kinolar'},
]

export default AppFilter