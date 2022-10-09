import type { NextPage } from 'next'

import Image from 'next/image'
import Navbar from '../../components/Navbar'
import dashboardcss from '..../styles/dashboard.css'

import 'bootstrap/dist/css/bootstrap.css'

export const getStaticPaths = async () => {
    const res = await fetch('https://freelensers.azurewebsites.net/api/GetBounties');
    const datos = await res.json();

    const paths = datos.bounties.map((bounty:any) =>{
    return {
      params: { id: bounty.id.toString() }
    }
  })
  return{
    paths,
    fallback:false
  }

  }

  export const getStaticProps = async (context:any) => {
    const id = context.params.id;
    const respuesta = await fetch('https://freelensers.azurewebsites.net/api/GetBounty?id=' + id);
    const data = await respuesta.json();
  
    return {
      props: { bounty: data.bounties[0] }
    }
  }

const Bounty: NextPage = ({bounty}:any) => {
    console.log(bounty)
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
        								
        								</div>
        								<div className="col s-col">
        									<h1 className="name">{formatAddress(bounty.owner)}</h1>
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
                                            {bounty.description}<a className="link">https://lensty.xyz/bounty/fui2389fhsn</a>
        									</p>
        								</div>
        								<div className="col t-col"></div>
        							</div>
        							<div className="middle bottom row">
        								<div className="col f-col"></div>
        								<div className="col s-col">
        									<p className="text">Prize</p>
        									<p className="prize">
        										${bounty.price} USD as a prize
        									</p>
        								</div>
        								<div className="col s-col">
        									<p className="text">Live Until</p>
        									<p className="text">{bounty.liveUntil}</p>
        								</div>
        								<div className="col f-col"></div>
        								<div className="col s-col">
        									<p className="text">Current applicants</p>
        									<p className="text">{bounty.applicantNumber}</p>
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
        								<img src="../assets/img/pp-placeholder.png" className="pp" alt="Profile Picture" />
        								<h1 className="title">Iñigo Zepeda</h1>
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