import {useCallback, useEffect} from "react";

function useEscapeKey(onClose) {
    const handleEscKey = useCallback(
        (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        document.addEventListener("keyup", handleEscKey, false);

        return () => {
            document.removeEventListener("keyup", handleEscKey, false);
        };
    }, [handleEscKey]);
}

export default useEscapeKey;