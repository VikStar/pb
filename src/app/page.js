import Image from "next/image";
import styles from "./page.module.scss";
import Icon from "@/components/Icon";
import { FaMapPin, FaPhone, FaRegEnvelope, FaInstagram } from "react-icons/fa6";
import logo from '../../public/perky_brews_logo.svg';

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.logo}>
                    <Image src={logo} alt="Persky Brews" />
                </div>
                <div className={styles.links}>
                    <a href="https://instagram.com/perkybrews.pl">
                        <Icon><FaInstagram /></Icon>
                        @perkybrews.pl
                    </a>
                    <a href="tel:+48453233653">
                        <Icon><FaPhone /></Icon>
                        +48 453 233 653
                    </a>
                    <a href="https://maps.app.goo.gl/3NkontTpf8NNMhHj7" target="_blank">
                        <Icon><FaMapPin /></Icon>
                        Poselska 18, Kraków
                    </a>
                    <a href="mailto:contact@perkybrews.pl">
                        <Icon><FaRegEnvelope /></Icon>
                        contact@perkybrews.pl
                    </a>
                </div>
            </main>
        </div>
    );
}
