import "./app-info.css"
const Appinfo = ({allMoviesCount,allSevliCount}) => {
  return (
    <div className="app__info">
      <p className="fs-3 text-uppercase"> barcha kinolar soni: {allMoviesCount}</p>
      <p className="fs-4 text-uppercase"> Sevmli filmlar: {allSevliCount}</p>
    </div>
  )
}

export default Appinfo