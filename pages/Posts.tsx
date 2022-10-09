import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import Navbar from '../components/Navbar'
import Feed from './Feed'
import Bounty from './Bounty'
import Landing from './landing'

import globals from '../styles/globals.css'
import dashboardcss from '../styles/dashboard.css'
import navbarcss from '../styles/navbar.css'
import landingcss from '../styles/landing.css'
import { useRouter } from 'next/router'

import 'bootstrap/dist/css/bootstrap.css'
// import the function from test.tsx
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { apolloClient } from './client/ApolloClient';
import { gql } from '@apollo/client'
import { piggyAbi, erc20Abi } from '../constants/abis'

// const router = useRouter()

const Home: NextPage = () => {

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

  const [clientWindowHeight, setClientWindowHeight] = useState<number>(0)

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


  return (
    <div>
      <Head>
        <title>FreeLensers</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Bounty />
        {/*<Feed />*/}
        {/*<Landing />*/}
          <div>
            {/* Create button to call function from test.tsx */}
            <button onClick={connectWallet}>Connect Wallet</button>
            <button onClick={getMessage}>Get Message</button>
            <button onClick={authenticate}>Authenticate</button>
            <input type="text" value={ethAmount} onChange={(e) => setEthAmount(e.target.value)} />
            <button onClick={depositEther}>Deposit Ether</button>
            <input type="text" value={tokenAddress} onChange={(e) => setTokenAddress(e.target.value)} />
            <input type="text" value={tokenAmount} onChange={(e) => setTokenAmount(e.target.value)} />      
            <button onClick={depositToken}>Deposit Token</button>

          </div>
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

export default Home
