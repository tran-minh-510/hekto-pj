import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import storage from "../../helpers/storage";
import { STORAGE_KEYS } from "../../constants";
import { path } from "../../routes";

const AuthMiddleware: React.FC<React.PropsWithChildren> = ({ children }) => {
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        const accessToken = storage.get(STORAGE_KEYS.ACCESS_TOKEN)
        // console.log(location)
        if (!accessToken) {
            navigate(path.login + '?continue_url=' + encodeURIComponent(location.pathname))
        }
    }, [location.pathname, navigate]);
    return <>{children}</>;
};

export default AuthMiddleware;
