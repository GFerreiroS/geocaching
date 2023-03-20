import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ClustersCaches } from "../component/clustersCaches";
import { Context } from "../store/appContext";
import "../../styles/clusters.css";
import Tenerife from "../../img/Tenerife.png";
import LasPalmas from "../../img/LasPalmas.png";
import Sevilla from "../../img/Sevilla.png";
import Cadiz from "../../img/Cadiz.png";
import Malaga from "../../img/Malaga.png";
import Almeria from "../../img/Almeria.png";
import Huelva from "../../img/Huelva.png";
import Granada from "../../img/Granada.png";
import Cordoba from "../../img/Cordoba.png";
import Jaen from "../../img/Jaen.png";
import Tarragona from "../../img/Tarragona.png";
import Lleida from "../../img/Lleida.png";
import Barcelona from "../../img/Barcelona.png";
import Gerona from "../../img/Gerona.png";
import Toledo from "../../img/Toledo.png";
import Guadalajara from "../../img/Guadalajara.png";
import CiudadReal from "../../img/CiudadReal.png";
import Albacete from "../../img/Albacete.png";
import Cuenca from "../../img/Cuenca.png";
import Madrid from "../../img/Madrid.png";

export const CachesSegmentacion = () => {

    const { store, actions } = useContext(Context);
    const params = useParams();
    const [cacheUbicacion, setCacheUbicacion] = useState({});



    return (

        <div>

            <div className="container">
                <h1 className="text-center mt-4 mb-3">
                    {store.caches.some(cache => cache.state === params.tipos) ? `Cachés en ${params.tipos}` : null}
                    {store.caches.some(cache => cache.size === params.tipos) ? `Cachés ${params.tipos}s` : null}
                    {store.caches.some(cache => cache.difficulty === params.tipos) ? `Cachés con dificultad ${params.tipos}` : null}
                </h1>
                <p>Bienvenido a nuestro sitio web sobre geocaching, donde podrás vivir una experiencia única y emocionante mientras exploras el mundo en busca de tesoros escondidos. Conviértete en parte de una extensa comunidad de descubridores; todo ello combinando senderismo, emoción de un juego, tesoros ocultos y momentos inolvidables. ¡Comienza tu aventura ahora!</p>
            </div>
            <div className="container mb-5 row row-cols-lg-4 mx-auto gx-3">
                {store.caches.filter(
                    cache =>
                        cache.size === params.tipos ||
                        cache.difficulty === params.tipos).map((cache) => {
                            return (
                                <div class="card " key={cache.id}>
                                    <img src="https://thumbs.dreamstime.com/z/ciudad-de-mapas-con-ruta-gps-y-geo-navegaci%C3%B3n-para-entrega-en-la-calle-ubicaci%C3%B3n-app-map-road-town-park-river-cartograf%C3%ADa-229179316.jpg" class="card-img-top" alt="..." />
                                    <div class="card-body text-center">
                                        <h4 className="card-title">{cache.state}</h4>
                                        <h5 class="card-title">{cache.city}</h5>
                                        <p class="card-text">{cache.name}</p>
                                        <Link to={"/perfil-cache/" + cache.id} className="text-decoration-none">
                                            <a href="#" className="btn btn-primary"><i class="fa-solid fa-earth-americas"></i></a>
                                        </Link>
                                        <button onClick={() => {
                                            actions.createFavoritesCaches(cache.id);
                                        }} type="button" className={store.currentUser.favorites.map(favorite => favorite.cache.id).includes(cache.id) ? "btn btn-outline-danger mx-1" : "btn btn-outline-warning mx-1"} ><i class="fa-solid fa-heart"></i></button>

                                    </div>
                                </div>
                            )
                        })}

            </div>

            <div className=" container mx-auto text-center">
                <h2 className="text-center  mb-5">
                    {store.caches.some(cache => cache.state === params.tipos) ? `Cachés en provincias de ${params.tipos}` : null}
                </h2>
                {params.tipos === "Andalucía" ? (
                    <div className="container row row-cols-lg-3 g-3 mx-auto mb-4">
                        <ClustersCaches link="/caches-provincias/Almería" image={Almeria} />
                        <ClustersCaches link="/caches-provincias/Granada" image={Granada} />
                        <ClustersCaches link="/caches-provincias/Malaga" image={Malaga} />
                        <ClustersCaches link="/caches-provincias/Jaen" image={Jaen} />
                        <ClustersCaches link="/caches-provincias/Córdoba" image={Cordoba} />
                        <ClustersCaches link="/caches-provincias/Sevilla" image={Sevilla} />
                        <ClustersCaches link="/caches-provincias/Cádiz" image={Cadiz} />
                        <ClustersCaches link="/caches-provincias/Huelva" image={Huelva} />
                    </div>
                ) : null}
                {params.tipos === "Islas Canarias" ? (
                    <div className="container row row-cols-lg-3 g-3 mx-auto mb-4">
                        <ClustersCaches link="/caches-provincias/Santa Cruz de Tenerife" image={Tenerife} />
                        <ClustersCaches link="/caches-provincias/Las Palmas" image={LasPalmas} />
                    </div>
                ) : null}
                {params.tipos === "Cataluña" ? (
                    <div className="container row row-cols-lg-3 g-3 mx-auto mb-4">
                        <ClustersCaches link="/caches-provincias/Barcelona" image={Barcelona} />
                        <ClustersCaches link="/caches-provincias/Gerona" image={Gerona} />
                        <ClustersCaches link="/caches-provincias/Lleida" image={Lleida} />
                        <ClustersCaches link="/caches-provincias/Tarragona" image={Tarragona} />
                    </div>
                ) : null}
                {params.tipos === "Madrid" ? (
                    <div className="container row row-cols-lg-3 g-3 mx-auto mb-4">
                        <ClustersCaches link="/caches-provincias/Madrid" image={Madrid} />
                    </div>
                ) : null}
                {params.tipos === "Galicia" ? (
                    <div className="container row row-cols-lg-3 g-3 mx-auto mb-4">
                        <ClustersCaches link="/caches-provincias/La Coruña" image={IslasCanariasOk} />
                        <ClustersCaches link="/caches-provincias/Lugo" image={IslasCanariasOk} />
                        <ClustersCaches link="/caches-provincias/Orense" image={IslasCanariasOk} />
                        <ClustersCaches link="/caches-provincias/Pontevedra" image={IslasCanariasOk} />
                    </div>
                ) : null}
                {params.tipos === "Comunidad Valenciana" ? (
                    <div className="container row row-cols-lg-3 g-3 mx-auto mb-4">
                        <ClustersCaches link="/caches-provincias/Alicante" image={IslasCanariasOk} />
                        <ClustersCaches link="/caches-provincias/Castellón" image={IslasCanariasOk} />
                        <ClustersCaches link="/caches-provincias/Valencia" image={IslasCanariasOk} />
                    </div>
                ) : null}
                {params.tipos === "Castilla y Leon" ? (
                    <div className="container row row-cols-lg-3 g-3 mx-auto mb-4">
                        <ClustersCaches link="/caches-provincias/Ávila" image={IslasCanariasOk} />
                        <ClustersCaches link="/caches-provincias/Burgos" image={IslasCanariasOk} />
                        <ClustersCaches link="/caches-provincias/León" image={IslasCanariasOk} />
                        <ClustersCaches link="/caches-provincias/Palencia" image={IslasCanariasOk} />
                        <ClustersCaches link="/caches-provincias/Salamanca" image={IslasCanariasOk} />
                        <ClustersCaches link="/caches-provincias/Segovia" image={IslasCanariasOk} />
                        <ClustersCaches link="/caches-provincias/Soria" image={IslasCanariasOk} />
                        <ClustersCaches link="/caches-provincias/Valladolid" image={IslasCanariasOk} />
                    </div>
                ) : null}
                {params.tipos === "País Vasco" ? (
                    <div className="container row row-cols-lg-3 g-3 mx-auto mb-4">
                        <ClustersCaches link="/caches-provincias/Guipuzkoa" image={IslasCanariasOk} />
                        <ClustersCaches link="/caches-provincias/Álava" image={IslasCanariasOk} />
                        <ClustersCaches link="/caches-provincias/Vizcaya" image={IslasCanariasOk} />
                    </div>
                ) : null}
                {params.tipos === "Castilla y La Mancha" ? (
                    <div className="container row row-cols-lg-3 g-3 mx-auto mb-4">
                        <ClustersCaches link="/caches-provincias/Albacete" image={Albacete} />
                        <ClustersCaches link="/caches-provincias/Ciudad Real" image={CiudadReal} />
                        <ClustersCaches link="/caches-provincias/Cuenca" image={Cuenca} />
                        <ClustersCaches link="/caches-provincias/Guadalajara" image={Guadalajara} />
                        <ClustersCaches link="/caches-provincias/Toledo" image={Toledo} />
                    </div>
                ) : null}
                {params.tipos === "Region de Murcia" ? (
                    <div className="container row row-cols-lg-3 g-3 mx-auto mb-4">
                        <ClustersCaches link="/caches-provincias/Murcia" image={IslasCanariasOk} />
                    </div>
                ) : null}
                {params.tipos === "Aragón" ? (
                    <div className="container row row-cols-lg-3 g-3 mx-auto mb-4">
                        <ClustersCaches link="/caches-provincias/Huesca" image={IslasCanariasOk} />
                        <ClustersCaches link="/caches-provincias/Teruel" image={IslasCanariasOk} />
                        <ClustersCaches link="/caches-provincias/Zaragoza" image={IslasCanariasOk} />
                    </div>
                ) : null}
                {params.tipos === "Islas Baleares" ? (
                    <div className="container row row-cols-lg-3 g-3 mx-auto mb-4">
                        <ClustersCaches link="/caches-provincias/Palma de Mallorca" image={IslasCanariasOk} />
                    </div>
                ) : null}
                {params.tipos === "Extremadura" ? (
                    <div className="container row row-cols-lg-3 g-3 mx-auto mb-4">
                        <ClustersCaches link="/caches-provincias/Cáceres" image={IslasCanariasOk} />
                        <ClustersCaches link="/caches-provincias/Badajoz" image={IslasCanariasOk} />
                    </div>
                ) : null}
                {params.tipos === "Principado de Asturias" ? (
                    <div className="container row row-cols-lg-3 g-3 mx-auto mb-4">
                        <ClustersCaches link="/caches-provincias/Asturias" image={IslasCanariasOk} />
                    </div>
                ) : null}
                {params.tipos === "Comunidad Foral de Navarra" ? (
                    <div className="container row row-cols-lg-3 g-3 mx-auto mb-4">
                        <ClustersCaches link="/caches-provincias/Navarra" image={IslasCanariasOk} />
                    </div>
                ) : null}
                {params.tipos === "Comunidad de Cantabria" ? (
                    <div className="container row row-cols-lg-3 g-3 mx-auto mb-4">
                        <ClustersCaches link="/caches-provincias/Cantabria" image={IslasCanariasOk} />
                    </div>
                ) : null}
                {params.tipos === "Comunidad de La Rioja" ? (
                    <div className="container row row-cols-lg-3 g-3 mx-auto mb-4">
                        <ClustersCaches link="/caches-provincias/La rioja" image={IslasCanariasOk} />
                    </div>
                ) : null}{params.tipos === "Ciudad Autónoma de Ceuta" ? (
                    <div className="container row row-cols-lg-3 g-3 mx-auto mb-4">
                        <ClustersCaches link="/caches-provincias/Ceuta" image={IslasCanariasOk} />
                    </div>
                ) : null}{params.tipos === " Ciudad Autónoma de Melilla" ? (
                    <div className="container row row-cols-lg-3 g-3 mx-auto mb-4">
                        <ClustersCaches link="/caches-provincias/Melilla" image={IslasCanariasOk} />
                    </div>
                ) : null}

            </div>

            <div className="container mx-auto text-center">
                <h2 className="text-center mb-3 mt-5">
                    {store.caches.some(cache => cache.size === params.tipos) ? `Accede a los Cachés ${params.tipos}s más Populares entre Nuestra Comunidad` : null}
                    {store.caches.some(cache => cache.difficulty === params.tipos) ? `Accede a los Cachés con dificultad ${params.tipos} más Populares entre Nuestra Comunidad ` : null}
                    {store.caches.some(cache => cache.city === params.tipos) ? `Accede a los Cachés de ${params.tipos} más Populares entre Nuestra Comunidad ` : null}

                </h2>
                <p>¡No te pierdas la oportunidad de descubrir los tesoros escondidos de la comunidad! Selecciona los cachés más populares y explora los lugares más interesantes alrededor de ti. ¡Te aseguramos una aventura inolvidable llena de sorpresas y descubrimientos!</p>
                <div className="container mb-5 row row-cols-lg-4 mx-auto gx-3">
                    {store.caches.filter(
                        cache => cache.state === params.tipos ||
                            cache.size === params.tipos ||
                            cache.difficulty === params.tipos).map((cache) => {
                                return (
                                    <div className="card" key={cache.id}>
                                        <img src="https://thumbs.dreamstime.com/z/ciudad-de-mapas-con-ruta-gps-y-geo-navegaci%C3%B3n-para-entrega-en-la-calle-ubicaci%C3%B3n-app-map-road-town-park-river-cartograf%C3%ADa-229179316.jpg" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h4 className="card-title">{cache.state}</h4>
                                            <h5 className="card-title">{cache.city}</h5>
                                            <p className="card-text">{cache.name}</p>
                                            <Link to={"/perfil-cache/" + cache.id} className="text-decoration-none">
                                                <a href="#" className="btn btn-primary"><i class="fa-solid fa-earth-americas"></i></a>
                                            </Link>
                                            <button onClick={() => {
                                                actions.createFavoritesCaches(cache.id);
                                            }} type="button" className={store.currentUser.favorites.map(favorite => favorite.cache.id).includes(cache.id) ? "btn btn-outline-danger mx-1" : "btn btn-outline-warning mx-1"} ><i className="fa-solid fa-heart"></i></button>

                                        </div>
                                    </div>
                                )
                            })}

                </div>

            </div>

        </div>
    );
}