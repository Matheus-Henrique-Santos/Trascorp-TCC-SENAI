import React, { Component, useState } from "react";
import Dimensions from "react-dimensions";
import MapGL, { Layer, Marker, Popup} from "react-map-gl";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import "./css/styles.css";
import MarkerIcon from "./assets/marker.png";

import Solicitacao from '../solicitacao/index';

const TOKEN =
  "pk.eyJ1IjoibWFyY29zZmVsaXBlYmMyMjExIiwiYSI6ImNrZmVyMDZvOTA0cDUycXB6NnNiOThvY3EifQ.0G40IBXMUl8gHMufTcTPKw";

const Map = ({ containerWidth, containerHeight }) => {
  //useEffect
  //vai carregar as informações do usuário
  //setViewport passando a latitude e longitude do usuário
  // setViewport({...viewport, latitude: latitudeUser,longitude: longitudeUser })

  const [viewport, setViewport] = useState({
    latitude: -23.5285921,
    longitude: -46.8977048,
    zoom: 12.8,
    bearing: 0,
    pitch: 0,
  });



  // const { containerWidth: width, containerHeight: height } = this.props;
  return (
    <MapGL
      width={containerWidth}
      height={containerHeight}
      {...viewport}
      mapStyle="mapbox://styles/mapbox/light-v9"
      mapboxApiAccessToken={TOKEN}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      <Marker
        latitude={-23.5285921}
        longitude={-46.8977048}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <MarkerCard motorista={null}/>
      </Marker>
      <Popup
        latitude={-23.5285921}
        longitude={-46.8977048}
        offsetLeft={-20}
        offsetTop={-10}
      >

        <PopupCard/>
      
      </Popup>
    </MapGL>
  );
};

const MarkerCard = ({ motorista}) => {
  return (
    <div style={{ width: "3vw", height: "5vh", overflow: "hidden"}}>
      <img src={MarkerIcon} alt="Motorista" style={{width: "90%", height: "90%", cursor: "pointer"}}/>
    </div>
  );
};



const PopupCard = () => {
  const history = useHistory();
  return (
    // <Solicitacao/>
    <div style={{width: "15vw", borderRadius: "10px", display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div style={{width: "100%", paddingTop: "1vh", paddingBottom: "1vh", borderTopLeftRadius: "7px", borderTopRightRadius: "7px", backgroundColor: "#221F3B", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", fontWeight: "bold"}}>
        Solicite um transporte
      </div>
      <div style={{width: "100%", paddingTop: "1vh", paddingBottom: "1vh", paddingLeft: "5%", paddingRight: "5%", backgroundColor: "#EBEBEB", borderBottomLeftRadius: "7px", borderBottomRightRadius: "7px", display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
        <label style={{fontWeight: "bold", color: "#000000"}}>Nome do motorista</label>
        <span>João da Silva</span>
        <div style={{width: "100%", display: "flex", justifyContent: "flex-end", marginTop: "1vh"}}>
          <div style={{width: "30%", backgroundColor: "#6F4A8E", paddingTop: "0.3vh", paddingBottom: "0.3vh", textAlign: "center", color: "#FFFFFF", fontWeight: "bold", borderRadius: 5, cursor: "pointer"}}>
            <span onClick={() => {history.push("/orcamento")}}>Solicitar</span>
          </div>  
        </div>
      </div>
    </div>
  );
};  

const DimensionedMap = Dimensions()(Map);
const myMap = () => (
  <DimensionedMap />
);

export default myMap;
