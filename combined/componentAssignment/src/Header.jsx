import './Header.css'

export function Header({title, path}) {
    return (
        <header className='header'>
            <div className="logo">
                <img src={path} alt={"logo"} />
            </div>
            <h1>{title}</h1>
        </header>
    );
}
