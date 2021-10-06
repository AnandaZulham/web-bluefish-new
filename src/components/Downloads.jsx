import {Link} from 'wouter'

export default function Downloads() {
  return (
	<>
	  <div className="container-fluid mt-4">
		<h3>Official Bluefish releases and documentation</h3>
		<hr />
		<p>The latest stable version is Bluefish 2.2.12 which can be downloaded from our download server in Annaberg-Buchholz, Germany: </p>
		<a href="http://www.bennewitz.com/bluefish/stable/source/" className="btn btn-primary btn-sm" target="_blank" rel="noreferrer">Source Code</a>
		<p className="mt-3">Availability of binary packages might take a short while:</p>
		<ul className="list-unstyled d-flex flex-wrap align-items-center">
		  <li><a href="http://www.bennewitz.com/bluefish/stable/binaries/fedora/" className="btn btn-primary btn-sm mr-2" target="_blank" rel="noreferrer">Fedora Linux Packages</a></li>
		  <li><a href="http://www.bennewitz.com/bluefish/stable/binaries/macosx/" className="btn btn-primary btn-sm my-2 mr-2" target="_blank" rel="noreferrer">OSX Installer</a></li>
		  <li><a href="http://www.bennewitz.com/bluefish/stable/binaries/win32/" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Win32 Installer</a></li>
		</ul>
		<p>Alternatively some files are also available through Sourceforge:</p>
		<a href="https://sourceforge.net/projects/bluefish/files/" className="btn btn-primary btn-sm" target="_blank" rel="noreferrer">Sourceforge.net</a>
		<h4 className="mt-3">Installers and packages</h4>
		<p>The Bluefish wiki has a page <a href="https://bfwiki.tellefsen.net/index.php/Installing_Bluefish">how to install Bluefish</a> on various different operating systems and distributions, such as Debian, Ubuntu, Fedora, Gentoo, Mac OSX, AltLinux, OpenSolaris and Windows.</p>
		<ul className="list-unstyled d-flex flex-wrap align-items-center">
		  <li><a href="http://bfwiki.tellefsen.net/index.php/Installing_Bluefish#Installing_the_very_latest_on_Ubuntu_Linux" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm mb-2 mr-2">Ubuntu Linux</a></li>
		  <li><a href="http://bfwiki.tellefsen.net/index.php/Installing_Bluefish#Installing_the_very_latest_release_on_Debian" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm mb-2 mr-2">Debian Linux</a></li>
		  <li><a href="http://bfwiki.tellefsen.net/index.php/Installing_Bluefish#Installing_the_very_latest_on_Fedora_with_yum" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm mb-2 mr-2">Fedora Linux</a></li>
		  <li><a href="http://bfwiki.tellefsen.net/index.php/Installing_Bluefish#Installing_Bluefish_on_Mac_OS_X" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm mb-2 mr-2">OSX</a></li>
		  <li><a href="http://bfwiki.tellefsen.net/index.php/Installing_Bluefish#Installing_Bluefish_on_Windows_XP_or_newer" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm mb-2 mr-2">Windows</a></li>
		</ul>
		<h4 className="pt-3">Install From Source Code</h4>
		<p>The 2.2.12 release requires <a href="https://www.gtk.org/" target="_blank" rel="noreferrer">gtk-2 (gtk 2.20 or newer) or gtk-3 (preferably 3.4 or newer)</a> and optionally <a href="http://www.abisource.com/projects/enchant/" target="_blank" rel="noreferrer">libenchant</a> for spell checking, <a href="http://live.gnome.org/Gucharmap" target="_blank" rel="noreferrer">libgucharmap</a> for the character map plugin, and <a href="https://www.python.org/" target="_blank" rel="noreferrer">python</a> version 2 or 3 for the <a href="https://code.google.com/archive/p/zen-coding/" target="_blank" rel="noreferrer">zencoding</a> plugin and integrated tools like jsmin, and cssmin.</p>
		<h4 className="pt-3">Check your download</h4>
		<p>If you want to make that the file you've downloaded is not corrupted check the SHA-1 checksums:</p>
		<div className="bg-light px-sm-2">
		  <p className="mb-1 text-monospace text-break">2a9473b08c464a38b63cb68ac3bc8e5624bc29fc  bluefish-2.2.12.tar.bz2</p>
		  <p className="text-monospace text-break">bc77fbef97998761552e1afaed2151c7d93adc5b  bluefish-2.2.12.tar.gz</p>
		</div>
		<p>If you want to make sure that the file is guaranteed to be identical to the file released by the bluefish team, download the digital signature (the .sig file) and place it next to the source tarball, and check it with key <span className="text-primary">B78DFBA1</span>:</p>
		<div className="bg-light px-sm-2">
		  <p className="mb-1 text-monospace text-break">gpg --recv-keys --keyserver pgp.mit.edu 0xB78DFBA1</p>
		  <p className="text-monospace text-break">gpg --verify bluefish-2.2.12.tar.bz2.sig</p>
		</div>
		<p>this should show</p>
		<div className="bg-light px-sm-2">
		  <p className="mb-1 text-monospace text-break">gpg: Signature made do 05 nov 2020 21:57:08 CET</p>
		  <p className="mb-1 text-monospace text-break">gpg:                using RSA key 64979277BAFF2D4CB637AC3B291C63A6B78DFBA1</p>
		  <p className="mb-1 text-monospace text-break">gpg: Good signature from "Olivier Sessink " [unknown]</p>
		  <p className="mb-1 text-monospace text-break">gpg: WARNING: This key is not certified with a trusted signature!</p>
		  <p className="mb-1 text-monospace text-break">gpg:          There is no indication that the signature belongs to the owner.</p>
		  <p className="mb-1 text-monospace text-break">Primary key fingerprint: 6497 9277 BAFF 2D4C B637  AC3B 291C 63A6 B78D FBA1</p>
		</div>
		<h4 className="pt-3">Source code in the version control system</h4>
		<hr />
		<p>Bluefish code is managed in Subversion. You can get the very latest code from the SourceForge.net SVN repository. Check the development page for instructions.</p>
		<h4 className="pt-3">Contributed data</h4>
		<hr />
		<p>There are several different sets of contributed data. If you have anything please send it to the bluefish team!</p>
		<ul className="list-unstyled">
		  <Link href="/icons">'made with Bluefish' icons</Link>
		  <li><a href="https://bfwiki.tellefsen.net/index.php/Main_Page">contributed data in the wiki, a couple of language definition files</a></li>
		</ul>
	  </div>
	</>
  )
}
