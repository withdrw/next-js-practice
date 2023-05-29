import { useRouter } from "next/router"
import styles from "../styles/Navbar.module.css"
import Link from "next/link"

export default function Navbar(){



    const {search} = useRouter()
    console.log(search)
    




    console.log(styles)


    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <Link href={'/'}>
                </Link>
                <li>Home</li>
                <Link href='/posts'>
                <li>Posts</li>
                </Link>
                <Link href='/users'>
                <li>Users</li>
                </Link> 
                <form>
        this is the : {search}
                <input placeholder="search"   />

                </form>
            </ul>
        </nav>
    )
}