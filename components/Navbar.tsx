// import {useMoralis} from "react-moralis"
import { useRouter } from 'next/router'
import Link from 'next/link'

const Navbar = ()=>{

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
            <Link href="/landing">
                <a className="navbar-brand">Lentsy</a>
            </Link>
            <div className="nav-items">
                <ul>
                    <li>
                        Feed
                    </li>
                    <li>
                        Bounties
                    </li>
                    <li className="nav-item-bounties">
                        Create Bounties 
                    </li>
                </ul>
            </div>
            <div className="nav-items">
                <button className="BountyButton"> Create bounty</button>
                <div className="account">
                    <button className="ConnectButton" onClick={async ()=> {await enableWeb3()}}>Connect</button>
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

