import {Link} from 'wouter'

export default function Development() {
  return (
	<>
	  <div className="container-fluid mt-4">
		<h4 className="pt-3">Bluefish Development</h4>
		<hr />
		<p>Bluefish is an open source project, released under the GNU GPL licence. Bluefish development is mostly coordinated on the bluefish-community mailinglist (see below). On the list, both users, developers and testers can give their opinion on new features, bug fixes and GUI improvements.</p>
		<h4 className="pt-3">Contact</h4>
		<hr />
		<p>If you want to join the community, most activity takes place on the mailing lists. Please use the mailing lists for general questions about the program or the development. You can contact olivier (at) bluefish.openoffice.nl for questions regarding the bluefish project management.</p>
		<a href="https://www.facebook.com/pages/Bluefish/319483734749410" className="btn btn-info btn-sm mb-2">Bluefish is on Facebook</a>
		<p>but most developers are no longer active Facebook users.</p>
		<h4 className="pt-3">Reporting Bugs</h4>
		<hr />
		<p>For bugreports please go to <a href="https://sourceforge.net/p/bluefish/tickets/" target="_blank" rel="noreferrer" className="text-danger">our bugtracker.</a></p>
		<h4 className="pt-3">Mailing lists</h4>
		<hr />
		<p>switched to a new mailinglist to discuss development, features, bugs, ideas, etc. You can subscribe at <a href="https://lists.sourceforge.net/lists/listinfo/bluefish-community" target="_blank" rel="noreferrer" className="text-danger">https://lists.sourceforge.net/lists/listinfo/bluefish-community</a>. There are also <a href="https://sourceforge.net/p/bluefish/mailman/bluefish-community/" target="_blank" rel="noreferrer" className="text-danger">archives for the community list</a>.

		  Our old mailing lists can also be read as newsgroups at gmane bluefish-dev and gmane bluefish-users.</p>
		<h4 className="pt-3">Help needed</h4>
		<hr />
		<p>Help is welcome on various parts:</p>
		<ul className="ml-n3">
		  <li className="mb-2">We are working on <span className="font-weight-bold">more <a href="https://bfwiki.tellefsen.net/index.php/DevelopingPlugins" className="text-danger">plugins</a></span>, which requires some C, gtk or python knowledge</li>
		  <li className="mb-2">Writing the <span className="font-weight-bold">manual</span> in our wiki</li>
		  <li className="mb-2"><span className="font-weight-bold">Translations</span> - several languages are out of date, see the <a href="http://bfwiki.tellefsen.net/index.php/Translations" className="text-danger">WiKi</a></li>
		  <li className="mb-2">Testing</li>
		  <li className="mb-2">Creating packages - we currently lack a <span className="font-weight-bold">Mandrake</span> and a <span className="font-weight-bold">Suse</span> maintainer!</li>
		  <li className="mb-2">Better native Windows support, there are many bugs specific to windows reported!</li>
		  <li className="mb-2">Better native Mac support</li>
		</ul>
		<h4 className="pt-3">Code in Subversion</h4>
		<hr />
		<p>Bluefish uses SVN (Subversion) hosted by  <a href="http://sourceforge.net/projects/bluefish/" className="text-danger">Sourceforge</a> to manage the code. You can <a href="https://sourceforge.net/p/bluefish/code/HEAD/tree/trunk/bluefish/" className="text-danger">browse the repository</a> on-line.

		To build the latest Bluefish version from SVN:</p>
		<div className="bg-light px-sm-2">
		  <p className="text-monospace mb-1 text-break">svn co svn://svn.code.sf.net/p/bluefish/code/trunk/bluefish</p>
		  <p className="text-monospace mb-1">cd bluefish</p>
		  <p className="text-monospace mb-1">./autogen.sh</p>
		  <p className="text-monospace mb-1">./configure</p>
		  <p className="text-monospace mb-1">make</p>
		  <p className="text-monospace mb-1">su -c "make install"</p>
		</div>
		<p className="mt-3">For more information see the wiki page <a href="http://bfwiki.tellefsen.net/index.php/Compiling_Bluefish_from_source" className="text-danger">Compiling Bluefish from source code</a>.</p>
		<h4 className="pt-3">Bleeding edge Debian/Ubuntu packages</h4>
		<hr />
		<p>There is a Bluefish-snapshots PPA at <a href="https://launchpad.net/~klaus-vormweg/+archive/ubuntu/bluefish-snapshots" className="text-danger">https://launchpad.net/~klaus-vormweg/+archive/ubuntu/bluefish-snapshots</a>. Use these at your own risk, the software in these packages is still under development!</p>

		<p>Debian/Ubuntu packages can also be created from the subversion repository.  <span className="font-weight-bold">These are NOT official packages and should only be distributed as "bluefish-unstable". Only use the script and the created packages if you follow the development. For "normal" users, official packages are <Link href="/downloads" className="text-danger">available here</Link></span>.</p>
		<div className="bg-light px-sm-2">
		  <p className="text-monospace mb-1 text-break">svn co svn://svn.code.sf.net/p/bluefish/code/trunk/bluefish</p>
		  <p className="text-monospace mb-1">cd bluefish</p>
		  <p className="text-monospace mb-1">./make-deb.sh</p>
		</div>
		<h6 className="pt-3">Other projects from Bluefish developers</h6>
		<hr />
		<p>Olivier Sessink is also known for:</p>
		<ul className="ml-n3">
		  <li className="mb-2"><a href="http://olivier.sessink.nl/directoryassistant/" className="text-danger">Directory Assistant</a> - an LDAP addressbook frontend</li>
		  <li className="mb-2"><a href="https://olivier.sessink.nl/jailkit/" className="text-danger">Jailkit</a> - a set of utilities to limit user accounts</li>
		  <li className="mb-2"><a href="https://olivier.sessink.nl/scannedonly/" className="text-danger">Scannedonly</a> - a scalable high performance Samba anti virus module</li>
		  <li className="mb-2"><a href="http://rro.sourceforge.net/" className="text-danger">Risk Reduction Overview</a> or Risico Reductie Overzicht - a risk management tool</li>
		  <p>Daniel Leidert is also known for:</p>
		  <li className="mb-2"><a href="https://qa.debian.org/developer.php?login=daniel.leidert@wgdd.de" className="text-danger">lots of Debian packages</a>, and <a href="https://bugs.launchpad.net/~dleidert" className="text-danger">Ubuntu packages</a></li>
		</ul>
	  </div>
	</>
  )
}
