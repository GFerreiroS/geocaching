import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Cluster } from "../component/cluster";
import { Context } from "../store/appContext";
import { UploadImage } from "../component/upload";
import { NewPassword } from "../component/newPassword";


export const MiPerfil = () => {
    const params = useParams();
    const { store, actions } = useContext(Context);
    const [urlImage, seturlImage] = useState("https://objetivoligar.com/wp-content/uploads/2017/03/blank-profile-picture-973460_1280.jpg");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [password, setPassword] = useState("");

    const [showDiv1, setShowDiv1] = useState(true);
    const [showDiv2, setShowDiv2] = useState(false);
    const [showDiv3, setShowDiv3] = useState(false);
    const [showDiv4, setShowDiv4] = useState(false);
    const [showDiv5, setShowDiv5] = useState(false);
    const [showDiv6, setShowDiv6] = useState(false);
    const [showDiv7, setShowDiv7] = useState(false);
    const [showDiv8, setShowDiv8] = useState(false);
    const [showDiv9, setShowDiv9] = useState(false);
    const [showDiv10, setShowDiv10] = useState(false);
    const [showDiv11, setShowDiv11] = useState(false);
    const [showDiv12, setShowDiv12] = useState(false);
    const [showDiv13, setShowDiv13] = useState(false);
    const [pendingCaches, setPendingCaches] = useState([]);
    const [approvedCaches, setApprovedCaches] = useState([]);
    const [declinedCaches, setDeclinedCaches] = useState([]);
    const [getPendingCaches, setGetPendingCaches] = useState([]);
    const [error, setError] = useState("");
    const [perfilComment, setPerfilComment] = useState([]);



    useEffect(() => {
        setEmail(store.currentUser.email);
        setName(store.currentUser.name);
        setCountry(store.currentUser.country);
        setCity(store.currentUser.city);
        getCachesPendingUser();
        getCachesApproved();
        getCachesDeclined();
        setPassword(store.currentUser.password);
    }, [store.currentUser])

    useEffect(() => {
        if (store.admin) {
            getCachesPending();
            getCacheComment();
        }
    }, [store.admin])


    const reportedComments = async (id) => {
        const response = await fetch(
            process.env.BACKEND_URL + "/api/reported-comments",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
                body: JSON.stringify({
                    id: id,
                }),
            }
        );
        const responsetoJson = await response.json();
        if (response.ok) {
            getCacheComment();
        } else {
            setError(responsetoJson.response);
        }
    };

    const reportedCommentsViolence = async (id) => {
        const response = await fetch(
            process.env.BACKEND_URL + "/api/reported-comments-violence",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
                body: JSON.stringify({
                    id: id,
                }),
            }
        );
        const responsetoJson = await response.json();
        if (response.ok) {
            getCacheComment();
        } else {
            setError(responsetoJson.response);
        }
    };

    const getCacheComment = async () => {
        const respuesta = await fetch(process.env.BACKEND_URL + "/api/perfil-cache-comment");
        const data = await respuesta.json();
        setPerfilComment(data);
    };

    const deleteComments = async (id) => {
        const response = await fetch(process.env.BACKEND_URL + "/api/delete-comments", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify({
                id: id,
            })

        });

        if (response.ok) {
            getCacheComment();
        }

    };

    const acceptCache = async (id) => {
        const response = await fetch(
            process.env.BACKEND_URL + "/api/admin_accept_cache",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
                body: JSON.stringify({
                    id: id,
                }),
            }
        );
        const responsetoJson = await response.json();
        if (response.ok) {
            getCachesPending();
        } else {
            setError(responsetoJson.response);
        }
    };

    const declineCache = async (id) => {
        const response = await fetch(
            process.env.BACKEND_URL + "/api/admin_decline_cache",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
                body: JSON.stringify({
                    id: id,
                }),
            }
        );
        const responsetoJson = await response.json();
        if (response.ok) {
            getCachesPending();
        } else {
            setError(responsetoJson.response);
        }
    };

    const getCachesPending = async () => {
        const response = await fetch(process.env.BACKEND_URL + "/api/admin_cache_moderation", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        const data = await response.json();
        setPendingCaches(data.results)
    };

    const getCachesApproved = async () => {
        const response = await fetch(process.env.BACKEND_URL + "/api/user_cache_approved", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        const data = await response.json();
        setApprovedCaches(data.results)
    };

    const getCachesDeclined = async () => {
        const response = await fetch(process.env.BACKEND_URL + "/api/user_cache_declined", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        const data = await response.json();
        setDeclinedCaches(data.results)
    };

    const getCachesPendingUser = async () => {
        const response = await fetch(process.env.BACKEND_URL + "/api/user_cache_pending", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        const data = await response.json();
        setGetPendingCaches(data.results)
    };

    const mostrarDatosPersonales = () => {
        setShowDiv1(true);
        setShowDiv2(false);
        setShowDiv3(false);
        setShowDiv4(false);
        setShowDiv5(false);
        setShowDiv6(false);
        setShowDiv7(false);
        setShowDiv8(false);
        setShowDiv9(false);
        setShowDiv10(false);
        setShowDiv11(false);
        setShowDiv12(false);
        setShowDiv13(false);
    };

    const mostrarcachesPropios = () => {
        setShowDiv1(false);
        setShowDiv2(true);
        setShowDiv3(false);
        setShowDiv4(false);
        setShowDiv5(false);
        setShowDiv6(false);
        setShowDiv7(false);
        setShowDiv8(false);
        setShowDiv9(false);
        setShowDiv10(false);
        setShowDiv11(false);
        setShowDiv12(false);
        setShowDiv13(false);

    };

    const mostrarcachesEncontrados = () => {
        setShowDiv1(false);
        setShowDiv2(false);
        setShowDiv3(true);
        setShowDiv4(false);
        setShowDiv5(false);
        setShowDiv6(false);
        setShowDiv7(false);
        setShowDiv8(false);
        setShowDiv9(false);
        setShowDiv10(false);
        setShowDiv11(false);
        setShowDiv12(false);
        setShowDiv13(false);

    };


    const mostrarCachesFavoritos = () => {
        setShowDiv1(false);
        setShowDiv2(false);
        setShowDiv3(false);
        setShowDiv4(true);
        setShowDiv5(false);
        setShowDiv6(false);
        setShowDiv7(false);
        setShowDiv8(false);
        setShowDiv9(false);
        setShowDiv10(false);
        setShowDiv11(false);
        setShowDiv12(false);
        setShowDiv13(false);

    };

    const mostrarPostsFavoritos = () => {
        setShowDiv1(false);
        setShowDiv2(false);
        setShowDiv3(false);
        setShowDiv4(false);
        setShowDiv5(true);
        setShowDiv6(false);
        setShowDiv7(false);
        setShowDiv8(false);
        setShowDiv9(false);
        setShowDiv10(false);
        setShowDiv11(false);
        setShowDiv12(false);
        setShowDiv13(false);

    };

    const mostrarCachesCreadosEnviados = () => {
        setShowDiv1(false);
        setShowDiv2(true);
        setShowDiv3(false);
        setShowDiv4(false);
        setShowDiv5(false);
        setShowDiv6(true);
        setShowDiv7(false);
        setShowDiv8(false);
        setShowDiv9(false);
        setShowDiv10(false);
        setShowDiv11(false);
        setShowDiv12(false);
        setShowDiv13(false);

    };

    const mostrarCachesCreadosAprobados = () => {
        setShowDiv1(false);
        setShowDiv2(true);
        setShowDiv3(false);
        setShowDiv4(false);
        setShowDiv5(false);
        setShowDiv6(false);
        setShowDiv7(true);
        setShowDiv8(false);
        setShowDiv9(false);
        setShowDiv10(false);
        setShowDiv11(false);
        setShowDiv12(false);
        setShowDiv13(false);

    };

    const mostrarCachesCreadosRechazados = () => {
        setShowDiv1(false);
        setShowDiv2(true);
        setShowDiv3(false);
        setShowDiv4(false);
        setShowDiv5(false);
        setShowDiv6(false);
        setShowDiv7(false);
        setShowDiv8(true);
        setShowDiv9(false);
        setShowDiv10(false);
        setShowDiv11(false);
        setShowDiv12(false);
        setShowDiv13(false);

    };

    const mostrarCachesEncontradosEnviados = () => {
        setShowDiv1(false);
        setShowDiv2(false);
        setShowDiv3(true);
        setShowDiv4(false);
        setShowDiv5(false);
        setShowDiv6(false);
        setShowDiv7(false);
        setShowDiv8(false);
        setShowDiv9(true);
        setShowDiv10(false);
        setShowDiv11(false);
        setShowDiv12(false);
        setShowDiv13(false);

    };

    const mostrarCachesEncontradosAprobados = () => {
        setShowDiv1(false);
        setShowDiv2(false);
        setShowDiv3(true);
        setShowDiv4(false);
        setShowDiv5(false);
        setShowDiv6(false);
        setShowDiv7(false);
        setShowDiv8(false);
        setShowDiv9(false);
        setShowDiv10(true);
        setShowDiv11(false);
        setShowDiv12(false);

    };

    const mostrarCachesEncontradosRechazados = () => {
        setShowDiv1(false);
        setShowDiv2(false);
        setShowDiv3(true);
        setShowDiv4(false);
        setShowDiv5(false);
        setShowDiv6(false);
        setShowDiv7(false);
        setShowDiv8(false);
        setShowDiv9(false);
        setShowDiv10(false);
        setShowDiv11(true);
        setShowDiv12(false);
        setShowDiv13(false);

    };

    const cambiarPassword = () => {
        setShowDiv1(null);
        setShowDiv2(false);
        setShowDiv3(false);
        setShowDiv4(false);
        setShowDiv5(false);
        setShowDiv6(false);
        setShowDiv7(false);
        setShowDiv8(false);
        setShowDiv9(false);
        setShowDiv10(false);
        setShowDiv11(false);
        setShowDiv12(true);
        setShowDiv13(false);

    };

    const mostrarAdmin = () => {
        setShowDiv1(false);
        setShowDiv2(false);
        setShowDiv3(false);
        setShowDiv4(false);
        setShowDiv5(false);
        setShowDiv6(false);
        setShowDiv7(false);
        setShowDiv8(false);
        setShowDiv9(false);
        setShowDiv10(false);
        setShowDiv11(false);
        setShowDiv12(false);
        setShowDiv13(true);

    };



    return (


        <div className="container cuerpo">
            <h1 className={`${showDiv1 || showDiv2 || showDiv3 || showDiv4 || showDiv5 || showDiv13 ? "text-center mb-5" : "text-center  mb-5 "}`}>GeoCaching - My Profile</h1>
            <div className=" row row-cols-lg-2 row-cols-md-2 row-cols-sm-1">

                <div className={`${showDiv1 || showDiv2 || showDiv3 || showDiv4 || showDiv5 || showDiv13} mx-auto`}>


                    <button className={`${showDiv1 ? "w-100 mx-auto bg-primary text-white" : "w-100 mx-auto"} btn btn-outline-primary `} onClick={mostrarDatosPersonales}>Datos Personales </button>
                    <button className={`${showDiv2 ? "w-100 mx-auto bg-primary text-white" : "w-100 mx-auto"} btn btn-outline-primary `} onClick={mostrarcachesPropios}> Cachés Registrados </button>
                    <button className={`${showDiv3 ? "w-100 mx-auto bg-primary text-white" : "w-100 mx-auto"} btn btn-outline-primary `} onClick={mostrarcachesEncontrados}> Cachés Encontrados </button>
                    <button className={`${showDiv4 ? "w-100 mx-auto bg-primary text-white" : "w-100 mx-auto"} btn btn-outline-primary `} onClick={mostrarCachesFavoritos}> Cachés Favoritos </button>
                    <button className={`${showDiv5 ? "w-100 mx-auto bg-primary text-white" : "w-100 mx-auto"} btn btn-outline-primary mb-5 `} onClick={mostrarPostsFavoritos}> Posts Favoritos </button>
                    {store.admin ? <button className={`${showDiv13 ? "w-100 mx-auto bg-primary text-white" : "w-100 mx-auto"} btn btn-outline-primary mt-5`} onClick={mostrarAdmin}> Admin panel </button> : null}
                </div>

                <div className="  mt-5">

                    {showDiv1 ? (
                        <div className=" border border-dark border border-2 rounded registro container my-5">
                            <div>
                                <h2 className="text-center my-5 text-danger">Perfil</h2>
                            </div>
                            <div className=" d-flex ">
                                <UploadImage urlImage={urlImage} apiURL="/api/upload" />
                            </div>
                            <label htmlFor="name" className="form-label mt-4 fw-bold">Nombre</label>
                            <input type="text" className="form-control" id="name" value={name}
                                onChange={(e) => { setName(e.target.value); }} placeholder={store.currentUser.name} />
                            <label htmlFor="email" className="form-label mt-3 fw-bold">Email</label>
                            <input type="email" className="form-control" id="email" value={email}
                                onChange={(e) => { setEmail(e.target.value); }} placeholder={store.currentUser.email} />
                            <label htmlFor="disabledTextInput" className="form-label mt-3 fw-bold">Password</label>
                            <input className="form-control text-dark" type="password" aria-label="Disabled input example" disabled readOnly onChange={(e) => { setPassword(e.target.value); }} value={password} placeholder={"..................."} />
                            <div className="d-flex justify-content-end my-3">
                                <NewPassword />
                            </div>
                            <label htmlFor="country" className="form-label mt-1 fw-bold">País</label>
                            <input type="text" className="form-control" id="country" value={country}
                                onChange={(e) => { setCountry(e.target.value); }} placeholder={store.currentUser.country} />
                            <label htmlFor="city" className="form-label mt-3 fw-bold">City</label>
                            <input type="text" className="form-control" id="city" value={city}
                                onChange={(e) => { setCity(e.target.value); }} placeholder={store.currentUser.city} />
                            <div className="d-flex justify-content-end">
                                <button className="mb-5 mt-5 btn btn-danger btn-sm" onClick={(e) => {
                                    e.preventDefault();
                                    actions.getUpdateUser(email, name, country, city)
                                }}>Guardar Cambios </button>

                            </div>
                        </div>
                    ) : null}
                    {showDiv2 ? (
                        <div className="border border-dark border border-2 rounded registro container my-5 " >
                            <h2 className="text-center text-danger my-5">Mis Cachés Registrados</h2>
                            <div className="text-center mb-4">
                                <div className="" aria-label="Basic checkbox toggle button group" >
                                    <button type="button " className="btn btn-warning mx-2 my-2" onClick={mostrarCachesCreadosEnviados}>Cachés Enviados <i className="fa-solid fa-rocket"></i></button>
                                    <button type="button " className="btn btn-success mx-2" onClick={mostrarCachesCreadosAprobados}>Cachés Aprobados <i className="fa-solid fa-face-smile"></i></button>
                                    <button type="button " className="btn btn-danger mx-2 my-2" onClick={mostrarCachesCreadosRechazados} >Cachés Rechazados <i className="fa-solid fa-heart-crack"></i></button>
                                </div>
                            </div>
                        </div>
                    ) : null}
                    {showDiv3 ? (
                        <div className="border border-dark border border-2 rounded registro container my-5">
                            <h2 className="text-center text-danger my-5">Mis Cachés Encontrados</h2>
                            <div >
                                <div className="text-center mb-4">
                                    <div className="" aria-label="Basic checkbox toggle button group" >
                                        <button type="button " className="btn btn-warning mx-2 my-2" onClick={mostrarCachesEncontradosEnviados}>Cachés Enviados <i className="fa-solid fa-rocket"></i></button>
                                        <button type="button " className="btn btn-success mx-2" onClick={mostrarCachesEncontradosAprobados}>Cachés Aprobados <i className="fa-solid fa-face-smile"></i></button>
                                        <button type="button " className="btn btn-danger mx-2 my-2" onClick={mostrarCachesEncontradosRechazados} >Cachés Rechazados <i className="fa-solid fa-heart-crack"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}
                    {showDiv4 ? (
                        <div className="border border-dark border border-2 rounded registro container my-5">
                            <h2 className="text-center text-danger my-5">Mis Cachés Favoritos</h2>
                            <div className="container mb-5 row row-cols-lg-2 mx-auto g-3 text-center">

                                {store.currentUser.favorites <= 0 ?
                                    <h2 className="mx-auto text-primary "> No tienes nada</h2> :
                                    store.currentUser.favorites.map((favorites) => {
                                        return (
                                            <div className="col-sm-1 col-md-4 ">
                                                <div className=" esquinaCarta card " key={favorites.id}>
                                                    <img src="https://i.etsystatic.com/17054662/r/il/537ada/3528158523/il_340x270.3528158523_hjw9.jpg" className="imageCard card-img-top " alt="..." />
                                                    <div className="card-body text-center">
                                                        <h4 className="card-title">{favorites.cache.state}</h4>
                                                        <h5 className="card-title">{favorites.cache.city}</h5>
                                                        <p className="card-text">{favorites.cache.name}</p>
                                                        <Link to={"/perfil-cache/" + favorites.cache.id} className="text-decoration-none" onClick={() => window.scrollTo(0, 0)}>
                                                            <button href="#" className="btn btn-primary"><i class="fa-solid fa-earth-americas"></i></button>
                                                        </Link>
                                                        <button onClick={() => {
                                                            actions.createFavoritesCaches(favorites.cache.id);
                                                        }} type="button" class="btn btn-danger mx-1">Delete</button>
                                                    </div>
                                                </div>
                                            </div>

                                        );
                                    })
                                }
                            </div>
                        </div>
                    ) : null}
                    {showDiv5 ? (
                        <div className="border border-dark border border-2 rounded registro container my-5">
                            <h2 className="text-center text-danger my-5">Mis Posts Favoritos</h2>
                            <div className="container mb-5 row row-cols-lg-2 mx-auto g-3 text-center">

                                {store.currentUser.favorites <= 0 ?
                                    <h2 className="mx-auto text-primary "> No tienes nada</h2> :
                                    store.currentUser.favorites.map((favorites) => {
                                        return (
                                            <div className="col-sm-1 col-md-4 ">
                                                <div className=" esquinaCarta card " key={favorites.id}>
                                                    <img src="https://i.etsystatic.com/17054662/r/il/537ada/3528158523/il_340x270.3528158523_hjw9.jpg" className="imageCard card-img-top " alt="..." />
                                                    <div className="card-body text-center">
                                                        <h4 className="card-title">{favorites.cache.state}</h4>
                                                        <h5 className="card-title">{favorites.cache.city}</h5>
                                                        <p className="card-text">{favorites.cache.name}</p>
                                                        <Link to={"/perfil-cache/" + favorites.cache.id} className="text-decoration-none" onClick={() => window.scrollTo(0, 0)}>
                                                            <a href="#" className="btn btn-primary"><i class="fa-solid fa-earth-americas"></i></a>
                                                        </Link>
                                                        <button onClick={() => {
                                                            actions.createFavoritesCaches(favorites.cache.id);
                                                        }} type="button" class="btn btn-danger mx-1">Delete</button>
                                                    </div>
                                                </div>
                                            </div>

                                        );
                                    })
                                }
                            </div>
                        </div>

                    ) : null}
                    {showDiv6 ? (
                        <div className=" bg-light border border-dark border border-2 rounded container my-5">
                            <h2 className="text-center my-5 text-decoration-underline">Mis Cachés Enviados</h2>
                            <div className="container mb-5 row row-cols-lg-2 mx-auto g-3 text-center">
                                {getPendingCaches <= 0 ?
                                    <h2 className="mx-auto text-primary "> No tienes nada</h2> :
                                    getPendingCaches.map((caches) => {
                                        return (
                                            <div className="col-sm-1 col-md-4 ">
                                                <div className=" esquinaCarta card " key={caches.id}>
                                                    <img src="https://i.etsystatic.com/17054662/r/il/537ada/3528158523/il_340x270.3528158523_hjw9.jpg" className="imageCard card-img-top " alt="..." />
                                                    <div className="card-body">
                                                        <h4 className="card-title">{caches.state}</h4>
                                                        <h5 className="card-title">{caches.city}</h5>
                                                        <p className="card-text">{caches.name}</p>
                                                        <Link to={"/perfil-cache/" + caches.id} className="text-decoration-none" onClick={() => window.scrollTo(0, 0)}>
                                                            <a href="#" className=" botonBonito btn btn-primary"><i className="fa-solid fa-earth-americas"></i></a>
                                                        </Link>
                                                        <button onClick={() => {
                                                            actions.createFavoritesCaches(caches.id);
                                                        }} type="button" className={store.currentUser.favorites.map(favorite => favorite.cache.id).includes(caches.id) ? "btn btn-outline-danger mx-1 botonBonito" : "btn btn-outline-warning mx-1 botonBonito "} ><i class="fa-solid fa-heart"></i></button>
                                                        {error ? <p className="alert alert-warning mt-2">{error}</p> : null}
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    })}
                            </div>
                        </div>
                    ) : null}
                    {showDiv7 ? (
                        <div className=" bg-light border border-dark border border-2 rounded container my-5 " >
                            <h2 className="text-center my-5 text-decoration-underline">Mis Cachés Aprobados</h2>
                            <div className="container mb-5 row row-cols-lg-2 mx-auto gx-3 text-center g-3">
                                {approvedCaches <= 0 ?
                                    <h2 className="mx-auto text-primary "> No tienes nada</h2> :
                                    approvedCaches.map((caches) => {
                                        return (
                                            <div className="col-sm-1 col-md-4 ">
                                                <div className=" esquinaCarta card " key={caches.id}>
                                                    <img src="https://i.etsystatic.com/17054662/r/il/537ada/3528158523/il_340x270.3528158523_hjw9.jpg" className="imageCard card-img-top " alt="..." />
                                                    <div className="card-body">
                                                        <h4 className="card-title">{caches.state}</h4>
                                                        <h5 className="card-title">{caches.city}</h5>
                                                        <p className="card-text">{caches.name}</p>
                                                        <Link to={"/perfil-cache/" + caches.id} className="text-decoration-none" onClick={() => window.scrollTo(0, 0)}>
                                                            <a href="#" className=" botonBonito btn btn-primary"><i className="fa-solid fa-earth-americas"></i></a>
                                                        </Link>
                                                        <button onClick={() => {
                                                            actions.createFavoritesCaches(caches.id);
                                                        }} type="button" className={store.currentUser.favorites.map(favorite => favorite.cache.id).includes(caches.id) ? "btn btn-outline-danger mx-1 botonBonito" : "btn btn-outline-warning mx-1 botonBonito "} ><i class="fa-solid fa-heart"></i></button>
                                                        {error ? <p className="alert alert-warning mt-2">{error}</p> : null}
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    })}
                            </div>
                        </div>
                    ) : null}
                    {showDiv8 ? (
                        <div className="bg-light  border-dark border border-2 rounded container my-5">
                            <h2 className="text-center my-5 text-decoration-underline ">Mis Cachés Rechazados</h2>
                            <div className="container mb-5 row row-cols-lg-2 mx-auto gx-3 text-center g-3">
                                {declinedCaches <= 0 ?
                                    <h2 className="mx-auto text-primary "> No tienes nada</h2> :
                                    declinedCaches.map((caches) => {
                                        return (
                                            <div className="col-sm-1 col-md-4 ">
                                                <div className=" esquinaCarta card " key={caches.id}>
                                                    <img src="https://i.etsystatic.com/17054662/r/il/537ada/3528158523/il_340x270.3528158523_hjw9.jpg" className="imageCard card-img-top " alt="..." />
                                                    <div className="card-body">
                                                        <h4 className="card-title">{caches.state}</h4>
                                                        <h5 className="card-title">{caches.city}</h5>
                                                        <p className="card-text">{caches.name}</p>
                                                        <Link to={"/perfil-cache/" + caches.id} className="text-decoration-none" onClick={() => window.scrollTo(0, 0)}>
                                                            <a href="#" className=" botonBonito btn btn-primary"><i className="fa-solid fa-earth-americas"></i></a>
                                                        </Link>
                                                        <button onClick={() => {
                                                            actions.createFavoritesCaches(caches.id);
                                                        }} type="button" className={store.currentUser.favorites.map(favorite => favorite.cache.id).includes(caches.id) ? "btn btn-outline-danger mx-1 botonBonito" : "btn btn-outline-warning mx-1 botonBonito "} ><i class="fa-solid fa-heart"></i></button>
                                                        {error ? <p className="alert alert-warning mt-2">{error}</p> : null}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                            </div>
                        </div>
                    ) : null}
                    {showDiv9 ? (
                        <div className=" bg-light border border-dark border border-2 rounded container my-5">
                            <h2 className="text-center my-5 text-decoration-underline">Mis Cachés Enviados</h2>
                            <div className="container mb-5 row row-cols-lg-2 mx-auto gx-3 text-center g-3">
                                {getPendingCaches <= 0 ?
                                    <h2 className="mx-auto text-primary "> No tienes nada</h2> :
                                    getPendingCaches.map((caches) => {
                                        return (
                                            <div className="col-sm-1 col-md-4 ">
                                                <div className=" esquinaCarta card " key={caches.id}>
                                                    <img src="https://i.etsystatic.com/17054662/r/il/537ada/3528158523/il_340x270.3528158523_hjw9.jpg" className="imageCard card-img-top " alt="..." />
                                                    <div className="card-body">
                                                        <h4 className="card-title">{caches.state}</h4>
                                                        <h5 className="card-title">{caches.city}</h5>
                                                        <p className="card-text">{caches.name}</p>
                                                        <Link to={"/perfil-cache/" + caches.id} className="text-decoration-none" onClick={() => window.scrollTo(0, 0)} >
                                                            <a href="#" className=" botonBonito btn btn-primary"><i className="fa-solid fa-earth-americas"></i></a>
                                                        </Link>
                                                        <button onClick={() => {
                                                            actions.createFavoritesCaches(caches.id);
                                                        }} type="button" className={store.currentUser.favorites.map(favorite => favorite.cache.id).includes(caches.id) ? "btn btn-outline-danger mx-1 botonBonito" : "btn btn-outline-warning mx-1 botonBonito "} ><i class="fa-solid fa-heart"></i></button>
                                                        {error ? <p className="alert alert-warning mt-2">{error}</p> : null}
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    })}
                            </div>
                        </div>
                    ) : null}
                    {showDiv10 ? (
                        <div className=" bg-light border border-dark border border-2 rounded container my-5 " >
                            <h2 className="text-center my-5 text-decoration-underline">Mis Cachés Aprobados</h2>
                            <div className="container mb-5 row row-cols-lg-2 mx-auto gx-3 text-center g-3">
                                {approvedCaches <= 0 ?
                                    <h2 className="mx-auto text-primary "> No tienes nada</h2> :
                                    approvedCaches.map((caches) => {
                                        return (
                                            <div className="col-sm-1 col-md-4 ">
                                                <div className=" esquinaCarta card " key={caches.id}>
                                                    <img src="https://i.etsystatic.com/17054662/r/il/537ada/3528158523/il_340x270.3528158523_hjw9.jpg" className="imageCard card-img-top " alt="..." />
                                                    <div className="card-body">
                                                        <h4 className="card-title">{caches.state}</h4>
                                                        <h5 className="card-title">{caches.city}</h5>
                                                        <p className="card-text">{caches.name}</p>
                                                        <Link to={"/perfil-cache/" + caches.id} className="text-decoration-none" onClick={() => window.scrollTo(0, 0)}>
                                                            <a href="#" className=" botonBonito btn btn-primary"><i className="fa-solid fa-earth-americas"></i></a>
                                                        </Link>
                                                        <button onClick={() => {
                                                            actions.createFavoritesCaches(caches.id);
                                                        }} type="button" className={store.currentUser.favorites.map(favorite => favorite.cache.id).includes(caches.id) ? "btn btn-outline-danger mx-1 botonBonito" : "btn btn-outline-warning mx-1 botonBonito "} ><i class="fa-solid fa-heart"></i></button>
                                                        {error ? <p className="alert alert-warning mt-2">{error}</p> : null}
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    })}
                            </div>
                        </div>
                    ) : null}
                    {showDiv11 ? (
                        <div className="bg-light  border-dark border border-2 rounded container my-5">
                            <h2 className="text-center my-5 text-decoration-underline">Mis Cachés Rechazados</h2>
                            <div className="container mb-5 row row-cols-lg-2 mx-auto gx-3 text-center g-3">
                                {declinedCaches <= 0 ?
                                    <h2 className="mx-auto text-primary "> No tienes nada</h2> :
                                    declinedCaches.map((caches) => {
                                        return (
                                            <div className="col-sm-1 col-md-4 ">
                                                <div className=" esquinaCarta card " key={caches.id}>
                                                    <img src="https://i.etsystatic.com/17054662/r/il/537ada/3528158523/il_340x270.3528158523_hjw9.jpg" className="imageCard card-img-top " alt="..." />
                                                    <div className="card-body">
                                                        <h4 className="card-title">{caches.state}</h4>
                                                        <h5 className="card-title">{caches.city}</h5>
                                                        <p className="card-text">{caches.name}</p>
                                                        <Link to={"/perfil-cache/" + caches.id} className="text-decoration-none" onClick={() => window.scrollTo(0, 0)} >
                                                            <a href="#" className=" botonBonito btn btn-primary"><i className="fa-solid fa-earth-americas"></i></a>
                                                        </Link>
                                                        <button onClick={() => {
                                                            actions.createFavoritesCaches(caches.id);
                                                        }} type="button" className={store.currentUser.favorites.map(favorite => favorite.cache.id).includes(caches.id) ? "btn btn-outline-danger mx-1 botonBonito" : "btn btn-outline-warning mx-1 botonBonito "} ><i class="fa-solid fa-heart"></i></button>
                                                        {error ? <p className="alert alert-warning mt-2">{error}</p> : null}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                            </div>
                        </div>
                    ) : null}
                    {showDiv12 ? (
                        <div>
                            <div>
                                <h2 className="text-center mb-5">Cambiar contraseña</h2>
                            </div>
                            <label htmlFor="passwActual" className="form-label mt-3">Contraseña Actual</label>
                            <input type="password" className="form-control" id="passwActual" />
                            <label htmlFor="changePasswd" className="form-label mt-3">Cambiar contraseña</label>
                            <input type="password" className="form-control" id="changePasswd" />
                            <label htmlFor="confirmPasswd" className="form-label mt-3">Confirmar contraseña</label>
                            <input type="password" className="form-control" id="confirmPasswd" />
                            <div className="d-flex justify-content-end my-3">
                                <button type="button" className="btn btn-danger btn-sm">Actualizar Cambios</button>
                            </div>
                        </div>
                    ) : null}
                    {showDiv13 ? (
                        <div className="border border-dark border border-2 rounded registro container my-5">
                            <h2 className="text-center text-danger my-5">Admin Panel</h2>
                            <h2 className="text-center mb-5 text-decoration-underline">Nuevos caches</h2>
                            <div className="container mb-5 row row-cols-lg-2 mx-auto gx-3 text-center g-3">
                                {pendingCaches.map((caches) => {
                                    return (
                                        <div className="col-sm-1 col-md-4 ">
                                            <div className=" esquinaCarta card " key={caches.id}>
                                                <img src="https://i.etsystatic.com/17054662/r/il/537ada/3528158523/il_340x270.3528158523_hjw9.jpg" className="imageCard card-img-top " alt="..." />
                                                <div className="card-body">
                                                    <h4 className="card-title">{caches.state}</h4>
                                                    <h5 className="card-title">{caches.city}</h5>
                                                    <p className="card-text">{caches.name}</p>
                                                    <button
                                                        className="btn btn-success btn-sm mt-1"
                                                        onClick={(e) => {
                                                            setError(false);
                                                            acceptCache(caches.id);
                                                        }}
                                                    >Aprobar</button>
                                                    <button
                                                        className="btn btn-danger btn-sm mx-1 mt-1"
                                                        onClick={(e) => {
                                                            setError(false);
                                                            declineCache(caches.id);
                                                        }}
                                                    >Rechazar</button>
                                                    <Link to={"/perfil-cache/" + caches.id} className="text-decoration-none" onClick={() => window.scrollTo(0, 0)} >
                                                        <button className="btn btn-primary btn-sm mt-1">Ver Detalles</button>
                                                    </Link>
                                                    {error ? <p className="alert alert-warning mt-2">{error}</p> : null}
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })}
                            </div>
                            <h2 className="text-center mb-5 text-decoration-underline">Comentarios Denunciados</h2>
                            <div className="container mb-5 row row-cols-lg-1 mx-auto gx-3 text-center">
                                {perfilComment.filter(comment => comment.is_spam).map((comment, i) => {
                                    return (
                                        <div key={i} class="container row border-bottom-0 border-dark border-top border-top-2 mt- mb-3 mx-auto ">
                                            <div className="tamn col-lg-2 col-md-2 col-sm-3 border-bottom border-end border-primary my-2 justify-content-start align-items-start">
                                                <h6 className="tamano">{comment.user.name}</h6>
                                                <img src={comment.user.profile_image_url ? comment.user.profile_image_url : urlImage} alt="Imagen del usuario" class="img-fluid w-25 pb-3" />
                                                <div className="mb-3" >
                                                    <button type="button" class="btn btn-danger btn-sm" onClick={() => deleteComments(comment.id)}>Eliminar Comentario</button>
                                                    <button type="button" class="btn btn-danger btn-sm" onClick={() => reportedComments(comment.id)}>Ignorar Denuncia</button>

                                                </div>
                                            </div>
                                            <div className="col-lg-10 col-md-10 col-sm-8 my-2">
                                                <h6 className="tamano">{comment.title}</h6>
                                                <p className="tamano">{comment.text}</p>
                                                {comment.is_spam ? <p className="tamano text-danger">Motivo: Spam</p> : null}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>


                        </div>
                    ) : null}
                </div>
            </div>

        </div>
    );
}

