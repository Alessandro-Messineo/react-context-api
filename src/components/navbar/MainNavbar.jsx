import { NavLink } from "react-router-dom";
import { useBudgetMode } from "../../context/BudgetContext";

const links = [
    { path: '/', label: 'Home' },
    { path: '/chi-siamo', label: 'Chi siamo' },
    { path: '/prodotti', label: 'Prodotti' }
]

export default function MainNavBar() {

    const { budgetMode, setBudgetMode } = useBudgetMode();

    const toggleBudgetMode = () => {
        setBudgetMode(prev => !prev);
    };

    return (
        <nav>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink to={link.path}>{link.label}</NavLink>
                    </li>
                ))}
            </ul>
            <button onClick={toggleBudgetMode}>
                {budgetMode ? 'Disattiva Modalità Budget' : 'Attiva Modalità Budget'}
            </button>
        </nav>
    )
}