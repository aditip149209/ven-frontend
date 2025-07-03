import { useState, useEffect } from "react"


export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {

    }, []);

    return isMobile;
}
