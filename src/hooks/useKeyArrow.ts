import React from "react";
import moment from "moment";

export const useKeyArrow = (setDate: React.Dispatch<React.SetStateAction<string>>) => {
    React.useEffect(() => {
        const listener = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                setDate(prev => moment(prev).subtract(1, "day").format("YYYY-MM-DD"));
            }
            if (e.key === "ArrowRight") {
                setDate(prev => moment(prev).add(1, "day").format("YYYY-MM-DD"));
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, []);
};
