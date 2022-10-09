import type { NextPage } from 'next'

import Image from 'next/image'
import dashboardcss from '../styles/dashboard.css'

const PopUp = () => {
	return (
		<div className="darken">
			<section className="popup">
				{/*<button className="close"><img src="./icon/close.svg" alt="close button icon" /></button>*/}
				<div className="container popup-container">
					<div className="content popup-content">
						<h1 className="title">Create your bounty</h1>
						<form action="javascript:void(0);" onSubmit={console.log("Submitted")} className="modal-content needs-validation">
							<div className="form-container">
								<div className="form row">
									<div className="form-col col-12">
										<label for="description" className="form-label">Description</label>
										<input id="description" className="form-control" type="text" placeholder="Share a description about your bounty" required />
									</div>
								</div>
								<div className="form row">
									<div className="form-col col-12">
										<label for="prize" className="form-label">Prize amount</label>
										<div class="input-group">
										  <input id="prize" type="number" className="form-control" placeholder="1000" required />
										  <span className="input-group-text">MATIC</span>
										</div>
									</div>
								</div>
								<div className="form row">
									<div className="form-col col-12">
										<label for="date" className="form-label">Live until</label>
										<input id="date" className="form-control" type="date" required />
									</div>
								</div>
								<div className="form row">
									<div className="form-col col-12">
										<label for="applicants" className="form-label">Number of applicants</label>
										<input id="applicants" className="form-control" type="number" placeholder="3" required />
									</div>
								</div>
								<div className="form row">
									<button type="submit" className="submit-btn btn-type-2">Confirm</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
		</div>
	)
}

export default PopUp