// import {useMoralis} from "react-moralis"
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useDataContext } from '../context/DataContext'

const Navbar = ()=>{

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
            <Link href="/landing">
                <a className="navbar-brand">Freelensers</a>
            </Link>
            <div className="nav-items">
                <ul>
                    <Link href='/Feed'>
                        Feed
                    </Link>
                    <Link href='/Bounties'>
                        Bounties
                    </Link>
                    <li className="nav-item-bounties">
                        Create Bounties 
                    </li>
                </ul>
            </div>
            <div className="nav-items">
                <button className="BountyButton" onClick={openCreateModal}>Create Bounty</button>
                <div className="account">
                    <button className="ConnectButton">Connect</button>
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

