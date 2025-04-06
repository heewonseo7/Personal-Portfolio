const Footer = () => {
    const currentYear = new Date().getFullYear();
    const lastUpdated = "April 2025";
    
    return (
        <footer className="w-full py-6 px-4 bg-black text-center">
        <div className="max-w-6xl mx-auto text-white/70 text-sm font-light">
            <p>Copyright © {currentYear} Heewon Seo. All rights reserved.</p>
            <p className="mt-1">Last updated: {lastUpdated}</p>
        </div>
        </footer>
    );
};

export default Footer;