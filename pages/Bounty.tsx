import type { NextPage } from 'next'

import Image from 'next/image'
import Navbar from '../components/Navbar'
import dashboardcss from '../styles/dashboard.css'

import 'bootstrap/dist/css/bootstrap.css'

const Bounty: NextPage = () => {
	return (
		<main>
        	<Navbar />
        	<section className="container dashboard-container view-bounty">
        		<div className="row dashboard-row">
        			<div className="column left-col">
        				<div className="content">
        					<div className="cards">
        						<div className="container card-container">
        							<div className="top row">
        								<div className="col f-col">
        									<img src="assets/img/pp-placeholder.png" className="pp" alt="Profile Picture" />
        								</div>
        								<div className="col s-col">
        									<h1 className="name">Stani Lens</h1>
        									<h2 className="username">@stani.lens</h2>
        								</div>
        								<div className="col t-col">
        									<p className="timestamp">2 hours ago</p>
        								</div>
        							</div>
        							<div className="middle row">
        								<div className="col f-col"></div>
        								<div className="col s-col">
        									<p className="text">
        										Hey! I just published a new bounty. Feel free to check it out here. <a className="link">https://lensty.xyz/bounty/fui2389fhsn</a>
        									</p>
        								</div>
        								<div className="col t-col"></div>
        							</div>
        							<div className="middle bottom row">
        								<div className="col f-col"></div>
        								<div className="col s-col">
        									<p className="text">Prize</p>
        									<p className="prize">
        										$1000 USD as a prize
        									</p>
        								</div>
        								<div className="col s-col">
        									<p className="text">Live Until</p>
        									<p className="text">9/10/2022</p>
        								</div>
        								<div className="col f-col"></div>
        								<div className="col s-col">
        									<p className="text">Current applicants</p>
        									<p className="text">2/3</p>
        								</div>
        							</div>
        							<div className="middle bottom row">
        								<div className="col f-col"></div>
        								<div className="col s-col">
        									<button className="btn-type-2">
        										View entries
        									</button>
        								</div>
        								<div className="col s-col text-end">
        									<button className="btn-type-1">
        										View bounty
        									</button>
        								</div>
        							</div>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div className="column right-col">
        				<div className="content">
        					<div className="cards profile">
        						<div className="container card-container">
        							<div className="header row">
        								<img src="assets/img/pp-placeholder.png" className="pp" alt="Profile Picture" />
        								<h1 className="title">I??igo Zepeda</h1>
        								<h2 className="username">@inigo.lens</h2>
        							</div>
        							<div className="middle row">
        								<p className="text">
        									UI UX designer and software engineer living in Mexico
        								</p>
        							</div>
        							<div className="bottom row">
        								<div className="col-6">
        									<big>712</big>
        									<p className="text text-start">Followers</p>
        								</div>
        								<div className="col-6">
        									<big>233</big>
        									<p className="text text-start">Following</p>
        								</div>
        							</div>

        						</div>
        					</div>
        				</div>
        			</div>
        		</div>
        	</section>
      	</main>
	)
}

export default Bounty