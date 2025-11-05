import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router";

const routes = ["/", "/About", "/Stack", "/Project", "/Formations", "/Contact"];

const ScrollBehavior = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const touchStartY = useRef(null);
    const scrollCount = useRef(0);
    const scrollDirection = useRef(null);
    const scrollTimeout = useRef(null);

    useEffect(() => {
        const handleWheel = (e) => {
            e.preventDefault();
            
            const currentDirection = e.deltaY > 0 ? 'down' : 'up';
            
            if (scrollDirection.current !== currentDirection) {
                scrollCount.current = 0;
                scrollDirection.current = currentDirection;
            }

            scrollCount.current++;

            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
            
            if (scrollCount.current >= 3) {
                const currentIndex = routes.indexOf(location.pathname);
                
                if (currentDirection === 'down' && currentIndex < routes.length - 1) {
                    navigate(routes[currentIndex + 1]);
                } else if (currentDirection === 'up' && currentIndex > 0) {
                    navigate(routes[currentIndex - 1]);
                }
                
                scrollCount.current = 0;
                scrollDirection.current = null;
            } else {
                scrollTimeout.current = setTimeout(() => {
                    scrollCount.current = 0;
                    scrollDirection.current = null;
                }, 1000);
            }
        };

        const handleTouchStart = (e) => {
            touchStartY.current = e.touches[0].clientY;
        };

        const handleTouchEnd = (e) => {
            if (touchStartY.current === null) return;
            const touchEndY = e.changedTouches[0].clientY;
            const deltaY = touchStartY.current - touchEndY;
            const currentIndex = routes.indexOf(location.pathname);

            if (deltaY > 50 && currentIndex < routes.length - 1) {
                // Swipe up (scroll down)
                navigate(routes[currentIndex + 1]);
            } else if (deltaY < -50 && currentIndex > 0) {
                // Swipe down (scroll up)
                navigate(routes[currentIndex - 1]);
            }
            touchStartY.current = null;
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("touchstart", handleTouchStart, { passive: false });
        window.addEventListener("touchend", handleTouchEnd, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
        };
        // eslint-disable-next-line
    }, [location.pathname, navigate]);

    return <>{children}</>;
};

export default ScrollBehavior;