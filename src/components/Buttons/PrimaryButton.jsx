import { getClasses } from "../../lib/Utils";
import classes from "./PrimaryButton.module.css";

const PrimaryButton = ({ children, onClick, transparent }) => {
    return (
        <button className={getClasses(classes.main, transparent ? classes.transparent : "")} onClick={onClick}>
            {children}
        </button>
    )
}

export default PrimaryButton;