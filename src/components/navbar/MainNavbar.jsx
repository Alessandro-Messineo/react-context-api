import { NavLink } from "react-router-dom";

const links = [
    { path: '/', label: 'Home' },
    { path: '/chi-siamo', label: 'Chi siamo' },
    { path: '/prodotti', label: 'Prodotti' }
]

export default function MainNavBar() {
    return (
            <nav>
                <ul>
                    {links.map((link, index) => (
                        <li key={index}>
                            <NavLink to={link.path}>{link.label}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
    )
}