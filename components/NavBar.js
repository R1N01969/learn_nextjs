import Link from "next/link";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from './NavBar.module.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const NavBar = () => {
	return(
		<>
			<div className={styles.navbar}>
				<Link href="http://localhost:3000">
					<a className={styles.home}>
						<HomeOutlinedIcon fontSize="large" />
					</a>
				</Link>
				<Link href="http://localhost:3000">
					<a className={styles.post}>
						<PostAddOutlinedIcon fontSize="large" />
					</a>
				</Link>
				<input className={styles.form} type="text" placeholder="検索ワードを入力"/>
				<Link href="http://localhost:3000">
					<a className={styles.user}>
						<PersonOutlinedIcon fontSize="large" />
					</a>
				</Link>
			</div>
		</>
	)
}

export default NavBar