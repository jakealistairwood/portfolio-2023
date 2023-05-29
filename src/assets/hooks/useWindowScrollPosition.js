import { useState, useEffect } from "react"

export const useWindowScrollPositions = () => {
    const [ scrollPosition, setScrollPosition ] = useState({
        scrollX: 0,
        scrollY: 0
    })

    useEffect(() => {
        const updateScrollPosition = () => {
            setScrollPosition({
                scrollX: window.scrollX,
                scrollY: window.scrollY
            })
        }
        window.addEventListener('scroll', updateScrollPosition);
        
        return () => window.removeEventListener('scroll', updateScrollPosition);
    }, [scrollPosition]);

    return scrollPosition;
}