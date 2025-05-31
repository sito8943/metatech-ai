import {useTranslation} from "react-i18next";
import {Link} from "react-router";

export const Navbar = () => {
    const {t} = useTranslation()

    return (
        <header className="absolute">
            <div>
                <Link to="/">
                    {t("_pages:app.name")}
                </Link>
            </div>
            <nav>

            </nav>
        </header>
    );
};
