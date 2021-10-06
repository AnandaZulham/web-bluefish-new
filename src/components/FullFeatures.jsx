const languages = ['Ada', 'ASP .NET & VBS', 'C/C++', 'CSS', 'CFML', 'Clojure', 'D', 'Gettext PO', 'Google Go', 'HTML, XHTML, HTML5', 'Java & JSP', 'Javascript & Jquery', 'Lua', 'Octave/MATLAB', 'MediaWiki', 'NSIS', 'Pascal', 'Perl', 'PHP', 'Python', 'R', 'Ruby', 'SASS', 'Shell', 'Scheme', 'SQL', 'SVG', 'Vala', 'Wordpress', 'XML']


export default function FullFeatures() {
  return (
	<>
	  <div className="container-fluid mt-4">
		<h3>Bluefish Features</h3>
		<hr />
		<p>Bluefish has many features, this list will give you an overview of the most important or outstanding features in Bluefish 2.2. Not all features are (yet) available on Windows or Mac OSX.</p>
		<ul style={{listStyleType:'square'}} className="ml-n3">
		  <li className="mb-2">Multiple document interface, easily opens 500+ documents (tested >10000 documents simultaneously)</li>
		  <li className="mb-2">Project support, enables you to work efficiently on multiple projects, and automatically restores settings for each project.</li>
		  <li className="mb-2">Multi-threaded support for remote files using gvfs, supporting FTP, SFTP, HTTP, HTTPS, WebDAV, CIFS and more1</li>
		  <li className="mb-2">Very powerful search and replace, with support for Perl Compatible regular expressions, sub-pattern replacing, and search and replace in files on disk.</li>
		  <li className="mb-2">Open files recursively based on filename patterns and/or content patterns</li>
		  <li className="mb-2">Snippets sidebar - specify custom dialogs, search and replace patterns or insert patterns and bind them to a shortkut key combination of your liking to speed up your development process</li>
		  <li className="mb-2">Integrate external programs such as make, lint, weblint, xmllint, tidy, javac, or your own program or script to handle advanced text processing or error detection</li>
		  <li className="mb-2">Integrate external filters of your liking, pipe your document (or just the current selected text) through sort, sed, awk or any custom script</li>
		  <li className="mb-2">Unlimited undo/redo functionality</li>
		  <li className="mb-2">In-line spell checker which is programing language aware (spell check comments and strings, but not code), requires libenchant during compilation2</li>
		  <li className="mb-2">Auto-recovery of changes in modified documents after a crash, kill or shutdown</li>
		  <li className="mb-2">Character map of all unicode characters (requires libgucharmap during compilation)3</li>
		  <li className="mb-2">Site upload / download1</li>
		  <li className="mb-2">Full screen editing</li>
		  <li className="mb-2">Many tools such as tabs to spaces, join lines, lines to columns, strip whitespace, etc. etc.</li>
		  <li className="mb-2">Customizable programming language support:</li>
			<ul className="ml-n3">
			  <li className="mb-2">In-line reference information (move your mouse over a function name or tag name) for various programming languages</li>
			  <li className="mb-2">Code block folding</li>
			  <li className="mb-2">Highlighting matching block start and end markers (both brackets and tags)</li>
			  <li className="mb-2">Auto-completion and auto-tag-closing for many programming languages, with reference information, and even for nested languages (e.g. css and javascript inside html code that is inside a php document)</li>
			  <p className="ml-n2">with included language definition files for:</p>
			  {languages.map((language, index) => (
				<li className="mb-2" key={index}>{language}</li>
			  ))}
			</ul>
		  <li className="mb-2">Multiple encodings support. Bluefish works internally with UTF8, but can save your documents in any desired encoding.</li>
		  <li className="mb-2">Bookmarks functionality</li>
		  <li className="mb-2">HTML toolbar and tearable menu's</li>
		  <ul className="ml-n3">
			<li className="mb-2">Dialogs and wizards for many HTML tags, with all their attributes</li>
			<li className="mb-2">Fully featured image insert dialog</li>
			<li className="mb-2">Thumbnail creation and automatically linking of the thumbnail with the original image, and multi-thumbnail creation</li>
			<li className="mb-2">User-customizable toolbar for quick access to often used functions</li>
		  </ul>
		  
		  <li className="mb-2">ZenCoding support1,4</li>
		  <li className="mb-2">Compliance with the Gnome and KDE user interface guidelines where possible</li>
		  <li className="mb-2">Translations into 17 languages - and more are coming for the next releases .</li>
		  
		</ul>
		<ul style={{listStyleType:'decimal'}} className="ml-n3 pt-3">
		  <li className="mb-2 font-italic">not (yet) available, or limited available on native windows and native Mac OSX packages.</li>
		  <li className="mb-2 font-italic">optional, requires libenchant.</li>
		  <li className="mb-2 font-italic">optional, requires libgucharmap.</li>
		  <li className="mb-2 font-italic">optional, requires python.</li>
		</ul>
	  </div>
	</>
  )
}
