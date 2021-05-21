export const convertShortPriorityToLong = (shortPriority) =>{
    switch (shortPriority) {
        case "L":
            return "Low";
        case "M":
            return "Medium";
        case "H":
            return "High";
        case "C":
            return "Critical";
        default:
            return "Low";
    }
}
