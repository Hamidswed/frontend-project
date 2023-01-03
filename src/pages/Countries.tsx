import CountriesList from "../components/CountriesList/CountriesList"
import Search from "../components/Serach/Search"
import { Link } from 'react-router-dom';


const Countries=()=>{
  return <div>
    <Search/>
    <Link to="/favorites"><button>favorite</button></Link>
    <CountriesList/>
  </div>
}

export default Countries