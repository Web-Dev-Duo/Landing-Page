let headerLinks = [
	{
		name: "Projects",
		link: "#"
	},
	{
		name: "Contact Us",
		link: "#"
	}
]

function Header() {
	return <div>
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					STARTUP
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						{
							headerLinks.map(headerLink => {
								return <li className="nav-item">
									<a className="nav-link" aria-current="page" href={headerLink.link}>
										{headerLink.name}
									</a>
								</li>
							})
						}
					</ul>
				</div>
			</div>
		</nav>
	</div>
}

export default Header;