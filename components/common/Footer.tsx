import { jacquesFrancois } from "@/utils/font";

const Footer = () => {
    return (
        <footer className={jacquesFrancois.className + " flex justify-center w-full absolute bottom-0"}>
            <p>&copy; 2024 Koyo Mori</p>
        </footer>
    );
}

export default Footer;