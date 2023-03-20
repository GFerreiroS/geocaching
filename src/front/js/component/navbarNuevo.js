import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import logonuevo from "../../img/logonuevo.png"
import person from "../../img/person.png"
import { Buscador } from "../component/buscador";



export const NavbarNuevo = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const [showSearch, setShowSearch] = useState(false);
    const [showSearchMobile, setShowSearchMobile] = useState(false);




    const mostrarBuscador = () => {
        setShowSearch(!showSearch);

    };

    const mostrarBuscadorMobile = () => {
        setShowSearchMobile(!showSearchMobile);

    };

    return (
        <div>
            <ul className="nav justify-content-center alert alert-primary p-1 border-0">
                {store.userActive ? (
                    <>
                        <div className="navbar-logo col-6 me-auto">
                            <a href="/">
                                <img src={logonuevo} alt="Descripción del logo" />
                            </a>
                        </div>
                        <li className="nav-item d-none d-lg-block">
                            <Link to="/demo" className="nav-link active " onClick={() => setShowSearch(false)} aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item d-none d-lg-block" onClick={() => setShowSearch(false)}>
                            <Link to="/mi-Perfil" className="nav-link active" aria-current="page">
                                Faqs
                            </Link>
                        </li>
                        <li className="nav-item d-none d-lg-block" onClick={() => setShowSearch(false)}>
                            <Link to="/blog" className="nav-link active " aria-current="page">
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item dropdown d-none d-lg-block" onClick={() => setShowSearch(false)}>
                            <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                                Cachés
                            </Link>
                            <ul className="dropdown-menu ">
                                <li className="nav-item d-none d-lg-block " onClick={() => setShowSearch(false)}>
                                    <Link to="/tipos-de-caches" className="  nav-link active desplegable" aria-current="page">
                                        Tipos de Cachés
                                    </Link>
                                </li>
                                <li className="nav-item d-none d-lg-block de" onClick={() => setShowSearch(false)}>
                                    <Link to="/reg_cache" className="  nav-link active desplegable" aria-current="page">
                                        Registro de Cachés
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <div className="dropdown-center ">
                            <button className="btn btn-secondary dropdown-toggle d-none d-lg-block" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-solid fa-user"></i>
                            </button>
                            <ul className="dropdown-menu">

                                <Link to="/mi-Perfil" className="text-decoration-none">
                                    <button className="dropdown-item" href="#">Mi perfil</button>
                                </Link>

                                <button
                                    className="dropdown-item nav-item me-1 text-danger text-aling"
                                    onClick={async () => {
                                        if (await actions.logout()) {
                                            navigate("/");
                                        }
                                    }}>Logout</button>


                            </ul>
                        </div>
                        <li className="nav-item d-none d-lg-block ">
                            <Link to="/mi-Perfil" className="nav-link active text-danger" aria-current="page">
                                Hola {store.currentUser.name}
                            </Link>
                        </li>
                        <li className="nav-item d-none d-lg-block">
                            <button type="button" className="btn btn-light" onClick={mostrarBuscador}><i className="fa-sharp fa-solid fa-magnifying-glass"></i></button>
                        </li>

                    </>
                ) : (
                    <>
                        <div className="navbar-logo col-6 me-auto">
                            <a href="/">
                                <img src={logonuevo} alt="Descripción del logo" />
                            </a>
                        </div>
                        <li className="nav-item d-none d-lg-block">
                            <Link to="/" className="nav-link active" aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item d-none d-lg-block">
                            <Link to="/" className="nav-link active" aria-current="page">
                                Faqs
                            </Link>
                        </li>
                        <li className="nav-item d-none d-lg-block">
                            <Link to="/login" className=" altaLogin nav-link active" aria-current="page">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item d-none d-lg-block">
                            <Link to="/register" className="altaRegister nav-link active" aria-current="page">
                                Register
                            </Link>
                        </li>

                    </>
                )}


            </ul>

            {showSearch ? (
                <Buscador />) : null}

            <div className="container Orbital position-fixed end-0 mx-5 d-block d-md-none">
                <a className="btn btn-secondary btn-floating d-block d-md-none " data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    <i className=" fas fa-bars fa-1x"></i>
                </a>

                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menú</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        {store.userActive ? (
                            <>
                                <button type="button" className="btn btn-light" onClick={mostrarBuscadorMobile}><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
                                <a className="dropdown-item" href="/demo">Home</a>
                                <a className="dropdown-item" href="/blog">Blog</a>
                                <a className="dropdown-item" href="/blog">Faqs</a>
                                <div className="dropdown  mx-2">
                                    <p className="p-2 dropdown-toggle" data-bs-toggle="dropdown">
                                        Cachés
                                    </p>
                                    <ul className="dropdown-menu">
                                        <a className="dropdown-item" href="/tipos-de-caches">Tipos de Cachés</a>
                                        <a className="dropdown-item" href="/reg_cache">crear Caché</a>
                                    </ul>
                                </div>
                                <hr className="dropdown-divider" />
                                <a className="dropdown-item" href="/mi-Perfil">Mi Perfil</a>
                                <p className="nav-item mx-3 text-danger"
                                    onClick={async () => {
                                        if (await actions.logout()) {
                                            navigate("/");
                                        }
                                    }}
                                >
                                    Logout
                                </p>

                                {showSearchMobile ? (
                                    <Buscador />) : null}
                            </>) : (<>
                                <a class="dropdown-item" href="/">Home</a>
                                <a class="dropdown-item" href="/blog">Faqs</a>
                                <hr className="dropdown-divider" />
                                <a class="dropdown-item text-primary" href="/login">Login</a>
                                <a class="dropdown-item text-success" href="/register">Register</a>
                            </>)}
                    </div>
                </div>

            </div>

        </div>

    );

};