import React from 'react';
import Loader from "./Loader";


function WithListLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <div style={{ textAlign: 'center', fontSize: '30px' }}>
        Hold on, fetching data may take some time :)
        <Loader />
      </div>
    );
  };
}
export default WithListLoading;