import { useRouter } from 'next/router'
import Link from 'next/link'

const LandingNavBar = ()=> {
    return <>
        <nav className="navbar">
            <Link href="/landing"><a className="navbar-brand">Freelensers</a></Link>
            <div className="nav-items">
                <button className="GreenButton"> Launch app</button>
            </div>
        </nav>
    </>
}
export default LandingNavBar