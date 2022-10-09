import type { NextPage } from 'next'

import Image from 'next/image'
import dashboardcss from '../styles/dashboard.css'

const ViewBounties: NextPage = () => {
	return (
		<section className="container dashboard-container view-bounties">
			<div className="row dashboard-row">
				<div className="column left-col">
					<div className="content">
						<div className="cards">
							<div className="container card-container pb-4">
								<div className="top row">
									<div className="col f-col">
										<img src="assets/img/pp-placeholder.png" className="pp" alt="Profile Picture" />
									</div>
									<div className="col s-col">
										<h1 className="name">Stani Lens</h1>
										<h2 className="username">by @stani.lens</h2>
									</div>
								</div>
								<div className="middle row">
									<div className="col f-col"></div>
									<div className="col s-col">
										<div className="entries">
											<div className="entry">
												<div className="creator">
													<div className="container">
														<h4 className="title">Entry 1</h4>
														<p className="username">by @waiwol.lens</p>
													</div>
												</div>
												<button className="btn-type-2">View entry</button>
												<button className="btn-type-1">Vote for this</button>
											</div>
											<div className="entry">
												<div className="creator">
													<div className="container">
														<h4 className="title">Entry 2</h4>
														<p className="username">by @inigo.lens</p>
													</div>
												</div>
												<button className="btn-type-2">View entry</button>
												<button className="btn-type-1">Vote for this</button>
											</div>
											<div className="entry">
												<div className="creator">
													<div className="container">
														<h4 className="title">Entry 3</h4>
														<p className="username">by @ilest.lens</p>
													</div>
												</div>
												<button className="btn-type-2">View entry</button>
												<button className="btn-type-1">Vote for this</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ViewBounties