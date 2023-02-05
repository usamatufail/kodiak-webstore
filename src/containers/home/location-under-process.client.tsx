import { ImLocation2 } from 'react-icons/im';
import styles from './location.module.css';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { mapStyles } from '../../data';
import { useCallback } from 'react';
import { useState } from 'react';

const center = {
  lat: -3.745,
  lng: -38.523,
};

// const LocationPin = ({ text }: any) => (
//   <div className={styles['pin']}>
//     <ImLocation2 className={styles['pin-icon']} />
//     <p className={styles['pin-text']}>{text}</p>
//   </div>
// );

const containerStyle = {
  width: '100vw',
  height: '100%',
};

export const Location = () => {
  const [map, setMap] = useState(null);
  // @ts-ignore
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    // googleMapsApiKey: 'YOUR_API_KEY',
  });

  const onLoad = useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);
  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return (
    <div className={`${styles['google-map']} mb-[8px] text-white relative mt-[4px]`}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={5}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{ styles: mapStyles }}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};
