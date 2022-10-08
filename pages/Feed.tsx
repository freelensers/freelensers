import type { NextPage } from 'next'

import Image from 'next/image'
import dashboardcss from '../styles/dashboard.css'

const Feed: NextPage = () => {

	const fAccordion = () => {
		var toggler = document.getElementById("Active-Bounties-toggler");
    	var elem = document.getElementById("Active-Bounties-content");
    	if (elem.classList.contains("show")) {
    		toggler.setAttribute("data-show", "false");
    		elem.classList.remove("show");
    	} else {
    		toggler.setAttribute("data-show", "true");
    		elem.classList.add("show");
    	}
  	};

	return (
		<section className="container dashboard-container feed-container">
			<div className="row dashboard-row">
				<div className="column left-col">
					<div className="header">
						<h1 className="title">Feed</h1>
					</div>
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
								<div className="bottom row">
									<div className="col f-col"></div>
									<div className="col s-col">
										<a className="icon">
											<img src="assets/icons/comment_icon.svg" alt="Comment icon" />
										</a>
										<a className="icon">
											<img src="assets/icons/like_icon.svg" alt="Like icon" />
										</a>
										<a className="icon">
											<img src="assets/icons/rt_icon.svg" alt="Re-Tweet icon" />
										</a>
										<a className="icon">
											<img src="assets/icons/save_icon.svg" alt="Save icon" />
										</a>
									</div>
									<div className="col t-col">
										<a className="text icon"><img src="assets/icons/copy_icon.svg" alt="Copy icon" />Copy</a>
									</div>
								</div>
							</div>
						</div>
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
								<div className="bottom row">
									<div className="col f-col"></div>
									<div className="col s-col">
										<a className="icon">
											<img src="assets/icons/comment_icon.svg" alt="Comment icon" />
										</a>
										<a className="icon">
											<img src="assets/icons/like_icon.svg" alt="Like icon" />
										</a>
										<a className="icon">
											<img src="assets/icons/rt_icon.svg" alt="Re-Tweet icon" />
										</a>
										<a className="icon">
											<img src="assets/icons/save_icon.svg" alt="Save icon" />
										</a>
									</div>
									<div className="col t-col">
										<a className="text icon"><img src="assets/icons/copy_icon.svg" alt="Copy icon" />Copy</a>
									</div>
								</div>
							</div>
						</div>
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
								<div className="bottom row">
									<div className="col f-col"></div>
									<div className="col s-col">
										<a className="icon">
											<img src="assets/icons/comment_icon.svg" alt="Comment icon" />
										</a>
										<a className="icon">
											<img src="assets/icons/like_icon.svg" alt="Like icon" />
										</a>
										<a className="icon">
											<img src="assets/icons/rt_icon.svg" alt="Re-Tweet icon" />
										</a>
										<a className="icon">
											<img src="assets/icons/save_icon.svg" alt="Save icon" />
										</a>
									</div>
									<div className="col t-col">
										<a className="text icon"><img src="assets/icons/copy_icon.svg" alt="Copy icon" />Copy</a>
									</div>
								</div>
							</div>
						</div>
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
								<div className="bottom row">
									<div className="col f-col"></div>
									<div className="col s-col">
										<a className="icon">
											<img src="assets/icons/comment_icon.svg" alt="Comment icon" />
										</a>
										<a className="icon">
											<img src="assets/icons/like_icon.svg" alt="Like icon" />
										</a>
										<a className="icon">
											<img src="assets/icons/rt_icon.svg" alt="Re-Tweet icon" />
										</a>
										<a className="icon">
											<img src="assets/icons/save_icon.svg" alt="Save icon" />
										</a>
									</div>
									<div className="col t-col">
										<a className="text icon"><img src="assets/icons/copy_icon.svg" alt="Copy icon" />Copy</a>
									</div>
								</div>
							</div>
						</div>
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
								<div className="bottom row">
									<div className="col f-col"></div>
									<div className="col s-col">
										<a className="icon">
											<img src="assets/icons/comment_icon.svg" alt="Comment icon" />
										</a>
										<a className="icon">
											<img src="assets/icons/like_icon.svg" alt="Like icon" />
										</a>
										<a className="icon">
											<img src="assets/icons/rt_icon.svg" alt="Re-Tweet icon" />
										</a>
										<a className="icon">
											<img src="assets/icons/save_icon.svg" alt="Save icon" />
										</a>
									</div>
									<div className="col t-col">
										<a className="text icon"><img src="assets/icons/copy_icon.svg" alt="Copy icon" />Copy</a>
									</div>
								</div>
							</div>
						</div>
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
								<div className="bottom row">
									<div className="col f-col"></div>
									<div className="col s-col">
										<a className="icon">
											<img src="assets/icons/comment_icon.svg" alt="Comment icon" />
										</a>
										<a className="icon">
											<img src="assets/icons/like_icon.svg" alt="Like icon" />
										</a>
										<a className="icon">
											<img src="assets/icons/rt_icon.svg" alt="Re-Tweet icon" />
										</a>
										<a className="icon">
											<img src="assets/icons/save_icon.svg" alt="Save icon" />
										</a>
									</div>
									<div className="col t-col">
										<a className="text icon"><img src="assets/icons/copy_icon.svg" alt="Copy icon" />Copy</a>
									</div>
								</div>
							</div>
						</div>
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
								<div className="bottom row">
									<div className="col f-col"></div>
									<div className="col s-col">
										<a className="icon">
											<img src="assets/icons/comment_icon.svg" alt="Comment icon" />
										</a>
										<a className="icon">
											<img src="assets/icons/like_icon.svg" alt="Like icon" />
										</a>
										<a className="icon">
											<img src="assets/icons/rt_icon.svg" alt="Re-Tweet icon" />
										</a>
										<a className="icon">
											<img src="assets/icons/save_icon.svg" alt="Save icon" />
										</a>
									</div>
									<div className="col t-col">
										<a className="text icon"><img src="assets/icons/copy_icon.svg" alt="Copy icon" />Copy</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="column right-col">
					<div className="content">
						<div className="cards w-posts">
							<div className="container card-container accordion">
								<div className="header row">
									<h1 id="Active-Bounties-toggler" className="title" onClick={fAccordion} data-show="false">Active bounties<img src="assets/icons/arrow_down_icon.svg" className="icon" alt="Chevron icon" /></h1>
								</div>
								<div id="Active-Bounties-content" className="middle row posts collapse">
									<div className="post">
										<div className="top row">
											<div className="col-8">
												<h1 className="name">Stani Lens</h1>
												<h2 className="username">by @stani.lens</h2>
											</div>
											<div className="col-4">
												<p className="timestamp">10 hours ago</p>
											</div>
										</div>
										<div className="middle row">
											<div className="col-12">
												<p className="text">
													Hey! I just published a new bounty. Feel free to check it out here. <a className="link">https://lensty.xyz/bounty/fui2389fhsn</a>
												</p>
											</div>
										</div>
										<div className="bottom row">
											<div className="col-6">
												<p className="prize">
													$1000 USD as a prize
												</p>
											</div>
											<div className="col-6 text-end">
												<button className="btn-type-1">
													View bounty
												</button>
											</div>
										</div>
									</div>
									<div className="post">
										<div className="top row">
											<div className="col-8">
												<h1 className="name">Stani Lens</h1>
												<h2 className="username">by @stani.lens</h2>
											</div>
											<div className="col-4">
												<p className="timestamp">10 hours ago</p>
											</div>
										</div>
										<div className="middle row">
											<div className="col-12">
												<p className="text">
													Hey! I just published a new bounty. Feel free to check it out here. <a className="link">https://lensty.xyz/bounty/fui2389fhsn</a>
												</p>
											</div>
										</div>
										<div className="bottom row">
											<div className="col-6">
												<p className="prize">
													$1000 USD as a prize
												</p>
											</div>
											<div className="col-6 text-end">
												<button className="btn-type-1">
													View bounty
												</button>
											</div>
										</div>
									</div>
									<div className="post">
										<div className="top row">
											<div className="col-8">
												<h1 className="name">Stani Lens</h1>
												<h2 className="username">by @stani.lens</h2>
											</div>
											<div className="col-4">
												<p className="timestamp">10 hours ago</p>
											</div>
										</div>
										<div className="middle row">
											<div className="col-12">
												<p className="text">
													Hey! I just published a new bounty. Feel free to check it out here. <a className="link">https://lensty.xyz/bounty/fui2389fhsn</a>
												</p>
											</div>
										</div>
										<div className="bottom row">
											<div className="col-6">
												<p className="prize">
													$1000 USD as a prize
												</p>
											</div>
											<div className="col-6 text-end">
												<button className="btn-type-1">
													View bounty
												</button>
											</div>
										</div>
									</div>
									<div className="post">
										<div className="top row">
											<div className="col-8">
												<h1 className="name">Stani Lens</h1>
												<h2 className="username">by @stani.lens</h2>
											</div>
											<div className="col-4">
												<p className="timestamp">10 hours ago</p>
											</div>
										</div>
										<div className="middle row">
											<div className="col-12">
												<p className="text">
													Hey! I just published a new bounty. Feel free to check it out here. <a className="link">https://lensty.xyz/bounty/fui2389fhsn</a>
												</p>
											</div>
										</div>
										<div className="bottom row">
											<div className="col-6">
												<p className="prize">
													$1000 USD as a prize
												</p>
											</div>
											<div className="col-6 text-end">
												<button className="btn-type-1">
													View bounty
												</button>
											</div>
										</div>
									</div>
									<div className="post">
										<div className="top row">
											<div className="col-8">
												<h1 className="name">Stani Lens</h1>
												<h2 className="username">by @stani.lens</h2>
											</div>
											<div className="col-4">
												<p className="timestamp">10 hours ago</p>
											</div>
										</div>
										<div className="middle row">
											<div className="col-12">
												<p className="text">
													Hey! I just published a new bounty. Feel free to check it out here. <a className="link">https://lensty.xyz/bounty/fui2389fhsn</a>
												</p>
											</div>
										</div>
										<div className="bottom row">
											<div className="col-6">
												<p className="prize">
													$1000 USD as a prize
												</p>
											</div>
											<div className="col-6 text-end">
												<button className="btn-type-1">
													View bounty
												</button>
											</div>
										</div>
									</div>
									<div className="post">
										<div className="top row">
											<div className="col-8">
												<h1 className="name">Stani Lens</h1>
												<h2 className="username">by @stani.lens</h2>
											</div>
											<div className="col-4">
												<p className="timestamp">10 hours ago</p>
											</div>
										</div>
										<div className="middle row">
											<div className="col-12">
												<p className="text">
													Hey! I just published a new bounty. Feel free to check it out here. <a className="link">https://lensty.xyz/bounty/fui2389fhsn</a>
												</p>
											</div>
										</div>
										<div className="bottom row">
											<div className="col-6">
												<p className="prize">
													$1000 USD as a prize
												</p>
											</div>
											<div className="col-6 text-end">
												<button className="btn-type-1">
													View bounty
												</button>
											</div>
										</div>
									</div>
									<button className="btn-type-2">View all bounties</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Feed