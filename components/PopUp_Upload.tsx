import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import dashboardcss from '../styles/dashboard.css'
import { useDataContext } from '../context/DataContext'


const PopUp = () => {
	const { account } = useDataContext()
	const [description, setDescription] = useState('')
	const [link, setLink] = useState('')
	const [file, setfile] = useState('')

	const uploadFiles = async() =>{
		try{
			await  fetch('',{
				method: 'POST',
				headers:{
					'Content-Type':'application/json'
				},
				body: JSON.stringify({
					description:description,
					link:link,
					file:file
	
				})
			}).then(res => ()=>( console.log(res)))
	
		} catch(error){
			console.log(error)
		}
	}
	const { createModalIsOpen, closeCreateModal } = useDataContext()
	return (
		<div className="darken">
			<section className="popup">
			<button className="close" onClick={closeCreateModal}><img src="../assets/icons/close.svg" alt="Close button" /></button>
				<div className="container popup-container">
					<div className="content popup-content">
						<h1 className="title">Entry upload</h1>
						<form action="javascript:void(0);" className="modal-content needs-validation">
							<div className="form-container">
								<div className="form row">
									<div className="form-col col-12">
										<label htmlFor="description" className="form-label">Description</label>
										<input id="description" className="form-control" type="text" placeholder="Share a description about your entry" required onChange={(e) => setDescription(e.target.value)} />
									</div>
								</div>
								<div className="form row">
									<div className="form-col col-12">
										<label htmlFor="link" className="form-label">Link</label>
										<input id="link" className="form-control" type="text" placeholder="Share a link with your entry"  onChange={(e) => setLink(e.target.value)} />
									</div>
								</div>
								<div className="form row">
									<div className="form-col col-12">
										<label htmlFor="files" className="form-label">or</label>
										<input id="file" className="form-control" type="file"  onChange={(e) => setfile(e.target.value)}/>
									</div>
								</div>
								<div className="form row">
									<button type="submit" className="submit-btn btn-type-2" onClick={closeCreateModal}>Confirm</button>
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