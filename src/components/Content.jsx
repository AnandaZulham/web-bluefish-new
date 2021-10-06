import img1 from '../images/Bluefish-1.png';
import img2 from '../images/Bluefish-2.png';
import img3 from '../images/Bluefish-3.png';
import img4 from '../images/Bluefish-4.png';
import img5 from '../images/Bluefish-5.png';

const imagesBluefish = [
  {img: img1, title: 'Bluefish 2.2.6 while editing this very page over an sftp connection'},
  {img: img2, title: 'Bluefish 2.2.4 (prerelease) as set-up for a user with a visual impairment.'},
  {img: img3, title: 'Bluefish 1.3.8 (prerelease) on Ubuntu while doing some HTML editing.'},
  {img: img4, title: 'Bluefish 1.3.8 (prerelease) on Ubuntu while doing C programming.'},
  {img: img5, title: 'Showing Bluefish 1.3.7 in German running native on Windows XP. The quickstart and the About dialog and the license information has been opened.'}
]

function Content() {
  return (
	<>
	  <div className="container-fluid mt-4">
	  <h5 className="px-3 ml-0">Bluefish Screenshoot</h5>
	  <div class="d-flex flex-wrap justify-content-center mt-2">
		{imagesBluefish.map((image, index) => {
		  return (
		  <>
			<div className="d-flex flex-column">
			<div>
			  <img src={image.img} className="px-1 mt-2" alt="screenshoot bluefish" width="300" height="250" key={index}/>
			</div>
			<div>
			  <p className="ml-1 mt-1 text-break" style={{width:300}}>{image.title}</p>
			</div>
			</div>
		  </>
		  )
		})}
	  </div>
	  
	  <div className="container-fluid row justify-content-center mx-auto my-4">
		<h5 className="col-12 ml-n3">Bluefish Review</h5>
		<div className="embed-responsive embed-responsive-16by9 col-12 col-sm-6">
		  <iframe className="embed-responsive-item mx-2 my-2 p-sm-2" src="https://www.youtube.com/embed/JFmikr-upv0" title="YouTube video player"  allowfullscreen></iframe>
		</div>
		<div className="embed-responsive embed-responsive-16by9 col-12 col-sm-6">
		  <iframe className="embed-responsive-item mx-2 my-2 p-sm-2" src="https://www.youtube.com/embed/Oh6Zm6kAjYI" title="YouTube video player"  allowfullscreen></iframe>
		</div>
	  </div>
	  
		<div className="container-fluid ml-2 ml-sm-2pt-4">
		<h5 className="">Latest News</h5>
		<h6 className="mt-3">Nov 5 - Bluefish 2.2.12 release</h6>
		<p style={{textIndent:'40px'}}>Bluefish 2.2.12 is a minor maintenance release with some minor new features. Most important is a fix for a crash in simple search. Python 3 compatibility has been further improved. Encoding detection in python files has been improved. Triple click now selects the line. On Mac OSX Bluefish deals better with the new permission features. Also using the correct language in the Bluefish user interface is fixed for certain languages on OSX. Several programming languages have improved syntax highlighting. Bluefish now works fine with Enchant2 for spell checking.</p>
	  </div>
	</div>
	</>
  )
}

export default Content;
