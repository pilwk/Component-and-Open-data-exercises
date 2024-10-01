import './Header.css'

export function Header() {
    return (
        <header className='header'>
            <div className="logo">
                <img src={"./src/assets/logo.png"} alt={"logo"} />
            </div>
            <h1>Welcome to product page!</h1>
        </header>
    );
}
