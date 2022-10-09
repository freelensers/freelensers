import type { NextPage } from 'next'
import { useDataContext } from '../context/DataContext'
import Image from 'next/image'
import dashboardcss from '../styles/dashboard.css'
import Modal from 'react-modal'
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { WorldIDWidget } from '@worldcoin/id'

import { piggyAbi, erc20Abi } from '../constants/abis'

const PopUp = () => {

	const { createModalIsOpen, closeCreateModal } = useDataContext()

	const [provider, setProvider] = useState<ethers.providers.Web3Provider>()
	const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner>()
	const [account, setAccount] = useState<string>()

	const [description, setDescription] = useState('')
	const [amount, setAmount] = useState('')
	const [token, setToken] = useState('')
	const [tokenAddress, setTokenAddress] = useState('')
	const [deadline, setDeadline] = useState('')
	const [applicants, setApplicants] = useState(0)
	const [txHash, setTxHash] = useState('')
	const [isApproved, setIsApproved] = useState(false)
	const [isVerified, setIsVerified] = useState(false)

	const contractAddress = '0x8aDa712f786F840f1AD1c556Ea47018f0370ef68'

	const connectWallet = async () => {
		try {
			await window.ethereum.request({ method: 'eth_requestAccounts' })
			signer?.getAddress().then((address) => {
				setAccount(address)
				console.log(address)
			}
			)
		} catch (error) {
			console.log(error)
		}
	}

	const depositEther = async () => {
		try {
			const contract = new ethers.Contract(contractAddress, piggyAbi, signer)
			const tx = await contract.depositEther({ value: ethers.utils.parseEther(amount) })
			await tx.wait()
			setTxHash(tx.hash)
			console.log('Transaction successful')
		} catch (error) {
			console.log(error)
		}
	}

	const depositToken = async () => {
    try {
      const contract = new ethers.Contract(contractAddress, piggyAbi, signer)
      const tokenContract = new ethers.Contract(tokenAddress, erc20Abi, signer)
      const decimals = await tokenContract.decimals()
			console.log(decimals)
      const tx = await contract.depositToken(tokenAddress, ethers.utils.parseUnits(amount, decimals))
      await tx.wait()
			setTxHash(tx.hash)
      console.log('Transaction successful')
    } catch (error) {
      console.log(error)
    }
  }

	const checkAllowance = async () => {
		try {
			const contract = new ethers.Contract(tokenAddress, erc20Abi, signer)
			console.log(contract)
			const allowance = await contract.allowance(signer?.getAddress(), contractAddress)
			console.log(allowance)
			if (allowance > 0) {
				setIsApproved(true)
			} else {
				setIsApproved(false)
			}
		} catch (error) {
			console.log(error)
		}
	}

	const approveToken = async () => {
		try {
			const contract = new ethers.Contract(tokenAddress, erc20Abi, signer)
			const tx = await contract.approve(contractAddress, ethers.constants.MaxUint256)
			await tx.wait()
			console.log('Transaction successful')
			setIsApproved(true)
		} catch (error) {
			console.log(error)
		}
	}

	const setAddress = async () => {
		if (token === "MATIC") {
			setTokenAddress("0x0000000000000000000000000000000000000000")
			setIsApproved(true)
		} else if (token === "DERC20") {
			await setTokenAddress("0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1")
		} else if (token === "LINK") {
			await setTokenAddress("0x326C977E6efc84E512bB9C30f76E30c160eD06FB")
		}
	}

	const postBounty = async () => {
		try {
			await fetch('https://freelensers.azurewebsites.net/api/CreateBounty', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					description: description,
					price: amount + " " + token,
					liveUntil: deadline,
					applicantNumber: applicants,
					owner: account,
					tx: txHash
				})
			}).then(res => () => {
					console.log(res)
			})
		} catch (error) {
			console.log(error)
		}
	}
	
	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault()
		let tokenAddress = ""
		console.log(description, amount, token, tokenAddress, deadline, applicants)
		if (token === "MATIC") {
			await depositEther().then(() => postBounty()).then(() => closeCreateModal())
		} else {
			if (isApproved) {
				console.log(description, amount, token, deadline, applicants, account)
				await depositToken().then(() => postBounty()).then(() => closeCreateModal())
			} else {
				await approveToken().then(() => checkAllowance())
			}
		}
	}

	const verifyIdentity = async (verification: any) => {
		try {
			verification["action_id"] = "wid_staging_f3a312cdc8dc4681b54e8227cbe09c7c"
			verification["signal"] = "mySignal"
			console.log(verification)
			setIsVerified(true)
			await fetch('https://freelensers.azurewebsites.net/api/VerifyHumanity', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					ethAddress: account,
					verificationResponse: verification
				})
			
			}).then(res => () => {
					console.log(res)
			})
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		connectWallet()
		if (typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
			const provider = new ethers.providers.Web3Provider(window.ethereum)
			setProvider(provider)
			const signer = provider.getSigner()
			setSigner(signer)
			// other stuff using provider here
		}
		
	}, []);

	useEffect(() => {
		setAddress()
	}, [token])

	useEffect(() => {
		if (tokenAddress !== "0x0000000000000000000000000000000000000000" && tokenAddress !== "") {
			checkAllowance()
		} else {
			setIsApproved(true)
		}
	}, [tokenAddress])

	return (
		<div className="darken">
			<section className="popup">
				<button className="close" onClick={closeCreateModal}><img src="../assets/icons/close.svg" alt="Close button" /></button>
				<div className="container popup-container">
					<div className="content popup-content">
						<h1 className="title">Create your bounty</h1>
						<form action="javascript:void(0);" className="modal-content needs-validation">
							<div className="form-container">
								<div className="form row">
									<div className="form-col col-12">
										<label htmlFor="description" className="form-label">Description</label>
										<input id="description" className="form-control" type="text" placeholder="Share a description about your bounty" required onChange={(e) => setDescription(e.target.value)} />
									</div>
								</div>
								<div className="form row">
									<div className="form-col col-12">
										<label htmlFor="prize" className="form-label">Prize amount</label>
										<div className="input-group">
											<input id="prize" type="number" className="form-control" placeholder="1000" required onChange={(e) => setAmount(e.target.value)} />
											<select className="btn dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" onChange={(e) => setToken(e.target.value)}>
												<option value="" selected disabled hidden>Choose token</option>
												<option value="MATIC">MATIC</option>
												<option value="DERC20">DERC20</option>
												<option value="LINK">LINK</option>
											</select>
										</div>
									</div>
								</div>
								<div className="form row">
									<div className="form-col col-12">
										<label htmlFor="date" className="form-label">Live until</label>
										<input id="date" className="form-control" type="date" required onChange={(e) => setDeadline(e.target.value)} />
									</div>
								</div>
								<div className="form row">
									<div className="form-col col-12">
										<label htmlFor="applicants" className="form-label">Number of applicants</label>
										<input id="applicants" className="form-control" type="number" placeholder="3" required onChange={(e) => setApplicants(parseInt(e.target.value))} />
									</div>
								</div>
								{!isVerified ? (
										<WorldIDWidget
											actionId="wid_staging_f3a312cdc8dc4681b54e8227cbe09c7c"
											signal="mySignal"
											enableTelemetry
											onSuccess={verifyIdentity}
											onError={(error) => console.log(error)}
										/>
									) : (
										<div className="form row">
										{!isApproved ? (
											<button type="submit" className="submit-btn btn-type-2" onClick={approveToken}>Approve</button>
											) : (
											<button type="submit" className="submit-btn btn-type-2" onClick={handleSubmit}>Create</button>
										)}
										</div>
									)}
							</div>
						</form>
						<button onClick={connectWallet}>Connect Wallet</button>
					</div>
				</div>
			</section>
		</div>
	)
}

export default PopUp