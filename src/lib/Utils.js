export const getClasses = (...classes) => {
    return classes.filter(i => i).join(' ');
}