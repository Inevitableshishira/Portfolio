import { FaInstagram, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-white">
      <div className="flex gap-10 text-3xl">
        <a href="https://www.instagram.com/shishira.18" target="_blank"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/shishirabj/" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/Inevitableshishira" target="_blank"><FaGithub /></a>
        <a href="tel:+919113859879"><FaPhone /></a>
      </div>
    </section>
  );
}
