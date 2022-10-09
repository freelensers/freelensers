import { useRouter } from 'next/router'
import Link from 'next/link'

const LandingNavBar = ()=> {
    return <>
        <nav className="navbar">
            <Link href="/">
                <a className="nav-link">
                    <img src="./logo-free.svg" alt="FreeLensers logo" />
                </a>
            </Link>
            <div className="nav-items">
                <Link href="/Feed">
                    <a className="btn-type-2">Launch app</a>
                </Link>
            </div>
        </nav>
    </>
}
export default LandingNavBar