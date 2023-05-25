import { Outlet, Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../css/index.css"

function Layout() {

    const location = useLocation();

    return (
        <div className="container mt-5 p-3 border bg-light">

            <Helmet>
                {
                    location.pathname === '/' ?
                        (
                            <title>B.shop | Home</title>
                        ) : ""
                }
                {
                    location.pathname === '/' ?
                        (
                            <title>B.shop | Contact</title>
                        ) : ""
                }
                {
                    location.pathname === '/' ?
                        (
                            <title>B.shop | About</title>
                        ) : ""
                }
                {
                    location.pathname === '/' ?
                        (
                            <title>B.shop | Product</title>
                        ) : ""
                }
            </Helmet>

            <nav className="navbar navbar-expand-lg bg-secondary rounded">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold" href="#"><span className="text-light">B.</span>Shop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav rounded bg-dark p-1 ms-auto">
                            <li className="nav-item">
                                <Link to="/" className={`text-light nav-link ${(location.pathname === `/`) ? `fw-bold text-decoration-underline active` : ``}`}>HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className={`text-light nav-link ${(location.pathname === `/about`) ? `fw-bold text-decoration-underline active` : ``}`}>ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className={`text-light nav-link ${(location.pathname === `/contact`) ? `fw-bold text-decoration-underline active` : ``}`}>CONTACT</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className={`text-light nav-link ${(location.pathname === `/products`) ? `fw-bold text-decoration-underline active` : ``}`}>PRODUCTS</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main>
                <Outlet />
            </main>

            <footer className="bg-secondary rounded mt-5 p-1">
                <div className="bg-dark rounded p-1 text-light m-1 text-center">
                    <h4>B.Shop Corporation</h4>
                    <p>Mumbai, India</p>
                    <br />
                    WD63 &copy; || 2023, All Rights Reserved.
                </div>
            </footer>
        </div>
    )
}

export default Layout