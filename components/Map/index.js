import React from 'react';
import MapComponent from '../MapComponent';
import addressInfo from '../../utils/addressInfo';


const mapInfo = addressInfo({ iconClassName: 'map-icon' });
const Map = () => <MapComponent mapInfo={mapInfo} />;
export default Map;
