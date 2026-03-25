import { Text, TouchableOpacity } from "react-native";
import { buttonStyles } from "../styles/buttonStyles";

export function Button({ children, size = "normal", variant = "primary", border = "redondo", ...props}){
    const buttonStyle = [
        buttonStyles.buttonBase,
        variant === "delete" && buttonStyles.buttonDelet,
        border === "radius" && buttonStyles.radius
    ]

    const textStyle = [
        buttonStyles.buttonText,
        size === "small" && buttonStyles.historyText
    ]
    return(
        <TouchableOpacity {...props} style={buttonStyle}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    )
}