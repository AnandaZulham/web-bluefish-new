import logo from '../images/bluefish-2.2-is-out.png'
import {Link} from 'wouter'

function Jumbroton() {
  return (
	<>
	  <div className="jumbroton jumbroton-fluid bg-light">
		<div className="container text-center py-4 mb-4">
		  <img src={logo} width="120" alt="Bluefish Logo"/>
		  <h1 className="text-primary mt-3">Bluefish Text Editor</h1>
		  <p className="font-weight-normal lead" style={{lineHeight:'1.6em'}}>Bluefish is a powerful editor targeted towards programmers and webdevelopers, with many options to write websites, scripts and programming code</p>
		  <Link href="/downloads">
			<a href="" className="font-weight-bold mt-2 mb-4 btn btn-lg btn-outline-primary">Download Now</a>
		  </Link>
		</div>
	  </div>
	</>
  )
}

export default Jumbroton;
