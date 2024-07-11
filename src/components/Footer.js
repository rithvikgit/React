const Footer = () => {
    const currYear = new Date().getFullYear();
    return (
        <footer className="text-center relative">
            <p>
                Copyright &copy; {currYear}, Made with 💗 by <strong>Rithvik</strong>
            </p>
        </footer>
    );
};

export default Footer;