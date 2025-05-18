import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router";

const routes = ["/", "/About", "/Project", "/Formations", "/Contact"];

const ScrollBehavior = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const touchStartY = useRef(null);

    useEffect(() => {
        const handleWheel = (e) => {
            const currentIndex = routes.indexOf(location.pathname);
            if (e.deltaY > 0 && currentIndex < routes.length - 1) {
                navigate(routes[currentIndex + 1]);
            } else if (e.deltaY < 0 && currentIndex > 0) {
                navigate(routes[currentIndex - 1]);
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
        };
        // eslint-disable-next-line
    }, [location.pathname, navigate]);

    return <>{children}</>;
};

export default ScrollBehavior;