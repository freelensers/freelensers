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
						<h1 className="title">Entry upload</h1>
						<form action="javascript:void(0);" className="modal-content needs-validation">
							<div className="form-container">
								<div className="form row">
									<div className="form-col col-12">
										<label htmlFor="description" className="form-label">Description</label>
										<input id="description" className="form-control" type="text" placeholder="Share a description about your entry" required />
									</div>
								</div>
								<div className="form row">
									<div className="form-col col-12">
										<label htmlFor="link" className="form-label">Link</label>
										<input id="description" className="form-control" type="text" placeholder="Share a link with your entry" />
									</div>
								</div>
								<div className="form row">
									<div className="form-col col-12">
										<label htmlFor="files" className="form-label">and / or</label>
										<input id="files" className="form-control" type="file" />
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