import { getClasses } from '../../lib/Utils';
import classes from './Card.module.css';

const Card = ({ children, isSelected, onClick }) => {
    return (
        <div className={getClasses(classes.main, isSelected ? classes.selected : "")} onClick={onClick}>
            {children}
        </div>
    )
}

export default Card;