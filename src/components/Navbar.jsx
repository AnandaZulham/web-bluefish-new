import logo from '../images/bluefish-2.2-is-out.png'
import {Link} from 'wouter'

function Navbar() {
  return (
	<>
	  <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
	   <a className="navbar-brand" href="/">
		 <img src={logo} alt="bluefish logo" width="50px" />
	   </a>
	   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
		<span className="navbar-toggler-icon"></span>
	   </button>

	   <div className="collapse navbar-collapse" id="navbarNavDropdown">
		 <ul className="navbar-nav">
		   <Link href="/" className="nav-item"><a className="nav-link text-white">Home</a></Link>
		   <Link href="features" className="nav-item"><a className="nav-link text-white">Features</a></Link>
		   <Link href="/downloads" className="nav-item"><a className="nav-link text-white">Download</a></Link>
		   <li className="nav-item"><a href="/development" className="nav-link text-white">Development</a></li>
		   <li className="nav-item dropdown"><p className="nav-link text-white dropdown-toggle mb-0" role="button" data-toggle="dropdown" id="navbarDropdown">Help</p>
		   <div className="dropdown-menu bg-dark">
			 <a href="https://bfwiki.tellefsen.net/index.php/Main_Page" target="_blank" rel="noreferrer" className="dropdown-item text-white bg-transparent">Wiki</a>
			 <a href="https://bfwiki.tellefsen.net/index.php/Manual_2_ToC" target="_blank" rel="noreferrer"  className="dropdown-item text-white bg-transparent">Manual</a>
		   </div>
		   </li>		   
		 </ul>
		 <form className="form-inline my-2 my-sm-0 ml-auto">
		   <a href="http://sourceforge.net/donate/index.php?group_id=11621" className="btn btn-success my-2 my-sm-0 shadow-sm" target="_blank" rel="noreferrer" >Donate</a>
		 </form>
	   </div>
	 </nav>
	</>
  )
}

export default Navbar; 
