// import {useMoralis} from "react-moralis"
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useDataContext } from '../context/DataContext'

// Web3Auth
import { useEffect, useState } from "react";
import { Web3Auth } from "@web3auth/web3auth";
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
import RPC from "../pages/Web3RPC";

const clientId = "BDG5gmJwcwIaauNIQXvp403mBSVCF2Hw4jr5YYpZ7dbcAn5cQlo3z58cOzJRCN8BYxwaB4RDJOeKnpfluuXEqOY";

const Navbar = ()=>{

    const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
    const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null);

    useEffect(() => {
        const init = async () => {
          try {
          const web3auth = new Web3Auth({
            clientId,
            chainConfig: {
              chainNamespace: CHAIN_NAMESPACES.EIP155,
              chainId: "0x89",
              rpcTarget: "https://poly-mainnet.gateway.pokt.network/v1/lb/e9d89aaf320a7df1d37be9c6", // This is the public RPC we have added, please pass on your own endpoint while creating an app
            },
          });
    
              setWeb3auth(web3auth);
    
          await web3auth.initModal();if (web3auth.provider) {
                setProvider(web3auth.provider);
              };
            } catch (error) {
              console.error(error);
            }
          };
    
          init();
      }, []);

      const login = async () => {
        if (!web3auth) {
          console.log("web3auth not initialized yet");
          return;
        }
        const web3authProvider = await web3auth.connect();
        setProvider(web3authProvider);
      };
    
      const getUserInfo = async () => {
        if (!web3auth) {
          console.log("web3auth not initialized yet");
          return;
        }
        const user = await web3auth.getUserInfo();
        console.log(user);
      };
    
      const logout = async () => {
        if (!web3auth) {
          console.log("web3auth not initialized yet");
          return;
        }
        await web3auth.logout();
        setProvider(null);
      };
    
      const getChainId = async () => {
        if (!provider) {
          console.log("provider not initialized yet");
          return;
        }
        const rpc = new RPC(provider);
        const chainId = await rpc.getChainId();
        console.log(chainId);
      };
      const getAccounts = async () => {
        if (!provider) {
          console.log("provider not initialized yet");
          return;
        }
        const rpc = new RPC(provider);
        const address = await rpc.getAccounts();
        console.log(address);
      };
    
      const getBalance = async () => {
        if (!provider) {
          console.log("provider not initialized yet");
          return;
        }
        const rpc = new RPC(provider);
        const balance = await rpc.getBalance();
        console.log(balance);
      };
    
      const sendTransaction = async () => {
        if (!provider) {
          console.log("provider not initialized yet");
          return;
        }
        const rpc = new RPC(provider);
        const receipt = await rpc.sendTransaction();
        console.log(receipt);
      };
    
      const signMessage = async () => {
        if (!provider) {
          console.log("provider not initialized yet");
          return;
        }
        const rpc = new RPC(provider);
        const signedMessage = await rpc.signMessage();
        console.log(signedMessage);
      };
    
      const getPrivateKey = async () => {
        if (!provider) {
          console.log("provider not initialized yet");
          return;
        }
        const rpc = new RPC(provider);
        const privateKey = await rpc.getPrivateKey();
        console.log(privateKey);
      };

      const loggedInView = (
        <>
            <button onClick={logout} className="btn-type-2">
            Log Out
        </button>
        </>
      );

      const unloggedInView = (
        <button onClick={login} className="btn-type-2">
          Login
        </button>
      );






    const { openCreateModal } = useDataContext()

    const router = useRouter()

    // const{ enableWeb3 } =useMoralis()

    const nav = () => {
      var nav = document.getElementsByTagName("nav")[0];
      var toggler = document.getElementById("nav-toggler");
      if (toggler.classList.contains("open")) {
        nav.classList.remove("open");
        toggler.classList.remove("open");
      } else {
        nav.classList.add("open");
        toggler.classList.add("open");
      }
    }

    return(
        <nav className="navbar scroll">
            <div className="nav-items">
                <ul>
                    <Link href="/">
                        Freelensers
                    </Link>
                    <Link href='/Feed'>
                        Feed
                    </Link>
                    <li className="nav-item-bounties">
                        Create Bounties 
                    </li>
                </ul>
            </div>
            <div className="nav-items">
              <button className="notif-bell">
                <img src="../assets/icons/bell.svg" alt="Notification Bell" />
              </button>
              <button className="BountyButton" onClick={openCreateModal}>Create Bounty</button>
              <div className="account">
                <div className="grid">{provider ? loggedInView : unloggedInView}</div>
              </div>
              <a href="javascript:;" id="nav-toggler" onClick={nav}>
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
              </a>
            </div>
        </nav>
    )
}

export default Navbar

