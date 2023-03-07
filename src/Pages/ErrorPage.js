import "./ErrorPage.css"
import { Link } from "react-router-dom"

function ErrorCode(){
  return(
    <div id="error">
      <p>We apologize for any inconvenience. Currently this page does not exist. please go back home</p>
      <p className="getback"><Link to='/'>Home</Link></p>
    </div>
  )
}

export default ErrorCode