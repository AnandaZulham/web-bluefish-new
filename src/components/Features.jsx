
const listData = [
  {title: 'Fast', icon: 'rocket', desc: 'Bluefish starts really quick (even on a netbook) and loads hundreds of files within seconds.'},
  {title: 'Cross-Platform', icon: 'desktop', desc: 'Bluefish is a multi-platform application that runs on most desktop operating systems including Linux, FreeBSD, MacOS-X, Windows, OpenBSD and Solaris.'},
  {title: 'Lightweight', icon: 'bolt-circle', desc: 'Bluefish tries to be lean and clean, as far as possible given it is a GUI editor.'}
]
function Features() {
  return (
	<>
	  <div className="container-fluid mx-auto text-center py-4">
	  <div className="d-flex flex-column flex-sm-row justify-content-between">
	  {listData.map((item, index) => (
	  <>
		<div>
		<div className="d-flex align-items-center justify-content-center p-3 bg-primary rounded-pill mx-auto" style={{width:'80px', height:'80px'}}>
		  <box-icon name={item.icon} size="lg" color="white"></box-icon>
		</div>
		<h3 className="my-3 text-primary">{item.title}</h3>
		<p className="px-2">{item.desc}</p>
		</div>
	  </>
	  ))}
	  </div>
	  </div>
	</>
  )
}

export default Features;
