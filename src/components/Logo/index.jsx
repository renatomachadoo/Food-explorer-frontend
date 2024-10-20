import theme from "../../styles/theme";

export function Logo({ color = theme.COLORS.CAKE_100 }){
    return (
        <svg width="43" height="48" viewBox="0 0 43 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5706 0.216553L42.9737 12.0919V35.8426L21.5706 47.7179L0.167517 35.8426V12.0919L21.5706 0.216553Z" fill={color}/>
        </svg>
    )
}