import Link from "next/link"
import styles from "./NavBar.module.scss"

export const NavBar = () => {
	return (
		<div className={styles.links}>
			<Link href={"/"}>Main</Link>
			<Link href={"/characters"}>Characters</Link>
		</div >
	)
}
