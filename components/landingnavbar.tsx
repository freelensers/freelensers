import { useRouter } from 'next/router'
import Link from 'next/link'

const LandingNavBar = ()=> {
    return <>
        <nav className="navbar">
            <Link href="/"><a className="navbar-brand">Freelensers</a></Link>
            <div className="nav-items">
                <Link href="/Feed" className="GreenButton"> Launch app</Link>
            </div>
        </nav>
    </>
}
export default LandingNavBar