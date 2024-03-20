import astronautas from "../img/astronautas.gif";
import logo from "../img/logo.jpg"
import style from "./PageCosmo.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function PageCosmo() {
    return (
<body>
  <header className={style.container}>
<img className ={style.logo} src={logo} alt="Logo" />
<nav className={style.mainNav}>
    <a className={style.navLink} href="/">About</a>
    <a className={style.navLink} href="/">Portfolio</a>
    <a className={style.navLink} href="/">Job</a>
    <a className={style.navLink} href="/">Contact</a>
</nav>
  </header>

<main className={style.container}>
<div className={style.columnLeft}>
        <h1 className={style.mainTitle}><span>404</span>Lost in Space</h1>
        <p className={style.description}>You have reached the edge oh the universe. The page you requested could not be found. Don't worry and return to the previous page.</p>
        <div className={style.btnList}>
        <a className={style.btn} href="/">GO HOME</a>
        <a className={style.btn} href="/">BACK</a>
        </div>
    </div>
    <div className={style.columnRight}>
    <img className={style.mainImg} src={astronautas} alt="Astronautas raso zinute namo, nes isskrido is kosmosa." />
   </div>
</main>

<footer className={style.container}>
    <div className={style.socials}>
        <a className={style.socialLink} href="/"></a>
        <FontAwesomeIcon icon={faFacebook} />
        <a className={style.socialLink} href="/"></a>
        <FontAwesomeIcon icon={faTwitter} /> 
        <a className={style.socialLink} href="/"></a>
        <FontAwesomeIcon icon={faInstagram} />
        <a className={style.socialLink} href="/"></a>
        <FontAwesomeIcon icon={faLinkedin} />
        </div>
        <p className={style.copyrightText}>&copy 2024 - All rights reserved</p>
    </footer>
</body>
);
}


export { PageCosmo };