import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import Navbar from '../components/Navbar'
//import Feed from './Feed.tsx'
import Bounty from './Bounty'
import Landing from './landing'
import PostCard from '../components/PostCard'
import BountyPost from '../components/BountyPost'

import globals from '../styles/globals.css'
import dashboardcss from '../styles/dashboard.css'
import navbarcss from '../styles/navbar.css'
import landingcss from '../styles/landing.css'
import { useRouter } from 'next/router'

import 'bootstrap/dist/css/bootstrap.css'
// import the function from test.tsx
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { apolloClient } from '../components/ApolloClient';
import { gql } from '@apollo/client'
import { piggyAbi, erc20Abi } from '../constants/abis'

// const router = useRouter()

const searchPostsQuery = `query Search {
    search(request: {
      query: "Aavegotchi",
      type: PUBLICATION,
      limit: 10
    }) {
      ... on PublicationSearchResult {
         __typename 
        items {
          __typename 
          ... on Comment {
            ...CommentFields
          }
          ... on Post {
            ...PostFields
          }
        }
        pageInfo {
          prev
          totalCount
          next
        }
      }
      ... on ProfileSearchResult {
        __typename 
        items {
          ... on Profile {
            ...ProfileFields
          }
        }
        pageInfo {
          prev
          totalCount
          next
        }
      }
    }
  }
  
  fragment MediaFields on Media {
    url
    mimeType
  }
  
  fragment MirrorBaseFields on Mirror {
    id
    profile {
      ...ProfileFields
    }
    stats {
      ...PublicationStatsFields
    }
    metadata {
      ...MetadataOutputFields
    }
    createdAt
    collectModule {
      ...CollectModuleFields
    }
    referenceModule {
      ...ReferenceModuleFields
    }
    appId
  }
  
  fragment ProfileFields on Profile {
    profileId: id,
    name
    bio
    attributes {
       displayType
       traitType
       key
       value
    }
    isFollowedByMe
    isFollowing(who: null)
    metadataUrl: metadata
    isDefault
    handle
    picture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          ...MediaFields
        }
      }
    }
    coverPicture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          ...MediaFields
        }
      }
    }
    ownedBy
    dispatcher {
      address
    }
    stats {
      totalFollowers
      totalFollowing
      totalPosts
      totalComments
      totalMirrors
      totalPublications
      totalCollects
    }
    followModule {
      ...FollowModuleFields
    }
  }
  
  fragment PublicationStatsFields on PublicationStats { 
    totalAmountOfMirrors
    totalAmountOfCollects
    totalAmountOfComments
  }
  
  fragment MetadataOutputFields on MetadataOutput {
    name
    description
    content
    media {
      original {
        ...MediaFields
      }
    }
    attributes {
      displayType
      traitType
      value
    }
  }
  
  fragment Erc20Fields on Erc20 {
    name
    symbol
    decimals
    address
  }
  
  fragment PostFields on Post {
    id
    profile {
      ...ProfileFields
    }
    stats {
      ...PublicationStatsFields
    }
    metadata {
      ...MetadataOutputFields
    }
    createdAt
    collectModule {
      ...CollectModuleFields
    }
    referenceModule {
      ...ReferenceModuleFields
    }
    appId
    hidden
    reaction(request: null)
    mirrors(by: null)
    hasCollectedByMe
  }
  
  fragment CommentBaseFields on Comment {
    id
    profile {
      ...ProfileFields
    }
    stats {
      ...PublicationStatsFields
    }
    metadata {
      ...MetadataOutputFields
    }
    createdAt
    collectModule {
      ...CollectModuleFields
    }
    referenceModule {
      ...ReferenceModuleFields
    }
    appId
    hidden
    reaction(request: null)
    mirrors(by: null)
    hasCollectedByMe
  }
  
  fragment CommentFields on Comment {
    ...CommentBaseFields
    mainPost {
      ... on Post {
        ...PostFields
      }
      ... on Mirror {
        ...MirrorBaseFields
        mirrorOf {
          ... on Post {
             ...PostFields          
          }
          ... on Comment {
             ...CommentMirrorOfFields        
          }
        }
      }
    }
  }
  
  fragment CommentMirrorOfFields on Comment {
    ...CommentBaseFields
    mainPost {
      ... on Post {
        ...PostFields
      }
      ... on Mirror {
         ...MirrorBaseFields
      }
    }
  }
  
  fragment FollowModuleFields on FollowModule {
    ... on FeeFollowModuleSettings {
      type
      amount {
        asset {
          name
          symbol
          decimals
          address
        }
        value
      }
      recipient
    }
    ... on ProfileFollowModuleSettings {
      type
      contractAddress
    }
    ... on RevertFollowModuleSettings {
      type
      contractAddress
    }
    ... on UnknownFollowModuleSettings {
      type
      contractAddress
      followModuleReturnData
    }
  }
  
  fragment CollectModuleFields on CollectModule {
    __typename
    ... on FreeCollectModuleSettings {
      type
      followerOnly
      contractAddress
    }
    ... on FeeCollectModuleSettings {
      type
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
    }
    ... on LimitedFeeCollectModuleSettings {
      type
      collectLimit
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
    }
    ... on LimitedTimedFeeCollectModuleSettings {
      type
      collectLimit
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
      endTimestamp
    }
    ... on RevertCollectModuleSettings {
      type
    }
    ... on TimedFeeCollectModuleSettings {
      type
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
      endTimestamp
    }
    ... on UnknownCollectModuleSettings {
      type
      contractAddress
      collectModuleReturnData
    }
  }
  
  fragment ReferenceModuleFields on ReferenceModule {
    ... on FollowOnlyReferenceModuleSettings {
      type
      contractAddress
    }
    ... on UnknownReferenceModuleSettings {
      type
      contractAddress
      referenceModuleReturnData
    }
    ... on DegreesOfSeparationReferenceModuleSettings {
      type
      contractAddress
      commentsRestricted
      mirrorsRestricted
      degreesOfSeparation
    }
  }
  `

export async function getStaticProps(){
    const res = await fetch('https://freelensers.azurewebsites.net/api/GetBounties');
    const datos = await res.json();

    const response = await apolloClient.query({
      query: gql(searchPostsQuery),
    })
    console.log(response.data)
    const data = response.data;
    return {
      props: { post: data , bounties: datos.bounties}
    }
  }


const Feed: NextPage = ({post , bounties} : any) => {
  console.log(bounties)

  const [provider, setProvider] = useState<ethers.providers.Web3Provider>()
  const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner>()
  const [address, setAddress] = useState<string>()
  const [signature, setSignature] = useState<string>()
  const [ethAmount, setEthAmount] = useState<string>("0.001")
  const [tokenAddress, setTokenAddress] = useState<string>("0x326C977E6efc84E512bB9C30f76E30c160eD06FB")
  const [tokenAmount, setTokenAmount] = useState<string>("0.001")

  const challengeQuery = `query($request: ChallengeRequest!) {
    challenge(request: $request) {
          text
      }
    }
  `  

  const authenticateQuery = `mutation($request: SignedAuthChallenge!) {
    authenticate(request: $request) {
          accessToken
          refreshToken
      }
    }
  `

  

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      setProvider(provider)
      const signer = provider.getSigner()
      setSigner(signer)
      // other stuff using provider here
    }
  }, []);

  const connectWallet = async () => {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      signer?.getAddress().then((address) => {
        setAddress(address)
      })
    } catch (error) {
      console.log(error)
    }
  }

  const signMessage = async (message: string) => {
    try {
      const signature = await signer?.signMessage(message)
      return signature
    } catch (error) {
      return error
    }
  };

  const getMessage = async () => {
    const response = await apolloClient.query({
      query: gql(challengeQuery),
      variables: {
        request: {
            address: address
        },
      },
    })
    console.log(response.data.challenge.text)
    const signature = await signMessage(response.data.challenge.text)
    console.log('Signature: ', signature)
    setSignature(signature?.toString())
  }

  const getQueryPosts = async () => {
    const response = await apolloClient.query({
      query: gql(searchPostsQuery),
    })
    console.log(response.data)
    const data = response.data;
  }

  const authenticate = async () => {
    try {
      const response = await apolloClient.mutate({
        mutation: gql(authenticateQuery),
        variables: {
          request: {
              address: address,
              signature: signature
          },
        },
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const depositEther = async () => {
    try {
      const contractAddress = '0xBA483fF4C1caB66808434582905eD730A88d6818'
      const contract = new ethers.Contract(contractAddress, piggyAbi, signer)
      const tx = await contract.depositEther({ value: ethers.utils.parseEther(ethAmount) })
      await tx.wait()
      console.log('Transaction successful')
    } catch (error) {
      console.log(error)
    }
  }

  const depositToken = async () => {
    try {
      const contractAddress = '0xBA483fF4C1caB66808434582905eD730A88d6818'
      const contract = new ethers.Contract(contractAddress, piggyAbi, signer)
      const tokenContract = new ethers.Contract(tokenAddress, erc20Abi, signer)
      const allowance = await tokenContract.allowance(address, contractAddress)
      const decimals = await tokenContract.decimals()
      if (allowance < ethers.utils.parseUnits(tokenAmount, decimals)) {
        const tx = await tokenContract.approve(contractAddress, ethers.constants.MaxUint256)
        await tx.wait()
      }
      const tx = await contract.depositToken(tokenAddress, ethers.utils.parseUnits(tokenAmount, decimals))
      await tx.wait()
      console.log('Transaction successful')
    } catch (error) {
      console.log(error)
    }
  }

  const [clientWindowHeight, setClientWindowHeight] = useState<number>(0);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    var nav = document.getElementsByTagName("nav")[0];
    if (window.scrollY >= 100) {
      nav.classList.add("scroll");
    } else {
      nav.classList.remove("scroll");
    }
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);
  });

  // const [bootstrap, setBootstrap] = useState(null);

  const fAccordion = () => {
    var toggler = document.getElementById("Active-Bounties-toggler");
    var elem = document.getElementById("Active-Bounties-content");
    if (elem?.classList.contains("show")) {
        toggler?.setAttribute("data-show", "false");
        elem.classList.remove("show");
    } else {
        toggler?.setAttribute("data-show", "true");
        elem?.classList.add("show");
    }
  };

  const [posts, setdata] = useState([post]);
    console.log(post);

  return (
    <div>
      <Head>
        <title>FreeLensers</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        {/* <Bounty /> */}
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
                        <img src="https://ik.imagekit.io/lensterimg/tr:n-avatar,tr:di-placeholder.webp/https://lens.infura-ipfs.io/ipfs/bafkreid5ycpowwzkkbaqnga355xb3ywpbrgfbiddux2j7ggyqxyilypqdu" className="pp" alt="PP" />
                    </div>
                    <div className="col s-col">
                        <h1 className="name">Iñigo </h1>
                        <h2 className="username">@inigo.lens</h2>
                    </div>
                    <div className="col t-col">
                        <p className="timestamp">2022-10-09T03:41:53.0002</p>
                    </div>
                </div>
                <div className="middle row">
                    <div className="col f-col"></div>
                    <div className="col s-col">
                        <p className="text">
                        Hey! I just published a new bounty. Feel free to check it out here. #Freelensers<a className="link" href='http://localhost:3000/Bounty/11'>http://localhost:3000/Bounty/11</a>
                        </p>
                    </div>
                    <div className="col t-col"></div>
                </div>
            </div>
          </div>
						<>
						{posts.map(inner => (
						<>
							{inner.search?.items?.map((Post : any) => (
							<>
								<PostCard Post={Post}/>
							</>
							))}
						</>
						))}
						

						</>
						{/* <div className="cards">
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
						</div> */}
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
                {bounties.map((bounty: any)=>(
        <>
        <BountyPost bounty ={bounty}/>
        </>
      ))}
									{/*<button className="btn-type-2">View all bounties</button>*/}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        {/*<Landing />*/}
          {/*<div>
            <input type="text" value={ethAmount} onChange={(e) => setEthAmount(e.target.value)} />
            <button onClick={depositEther}>Deposit Ether</button>
            <input type="text" value={tokenAddress} onChange={(e) => setTokenAddress(e.target.value)} />
            <input type="text" value={tokenAmount} onChange={(e) => setTokenAmount(e.target.value)} />      
            <button onClick={depositToken}>Deposit Token</button>

          </div>*/}
      </main>
      {/*<Script
        id="bootstrap-js"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        crossorigin="anonymus"
        onLoad={() => {
          setBootstrap({ bootstrap: window.Bootstrap('sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3') })
        }}
      />*/}

    </div>
  )
}

export default Feed
