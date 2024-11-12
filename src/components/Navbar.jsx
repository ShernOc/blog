function Navbar() {
    // Array of navbar links 
    const links = ["home","About","Contact","Books"]

    // We are going to return the links, and have the key prop included

    return (
        <nav id = "navbar">
                <a key = {links.home} href="./">Home</a>
                <a key = {links.contact} href="./src/components/Contact.jsx">Contact</a>
                <a key = {links.about} href="./src/components/About">About</a>
            </nav>
    
    )
}

export default Navbar;