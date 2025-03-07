import React, { useEffect, useState } from 'react';

function Shimmer() {
  const [showShimmer, setShowShimmer] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowShimmer(false);
  //   }, 5000); // 10 seconds

  //   return () => clearTimeout(timer); // Cleanup the timer on unmount
  // }, []);

  return (
    <>
      <div className="loading-shimmer">
        {showShimmer ? (
          <div className="shim-card-container">
            {Array.from({ length: 10 }).map((_, index) => (
              <div className="card shimmer-container" key={index}>
                <div className="card">
                  <div className="image"></div>
                  <div className="content shimmer-content-container">
                    <div className="shimmer-content"></div>
                    <div className="shimmer-content"></div>
                    <div className="shimmer-content"></div>
                    <div className="shimmer-content"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="not-found-message">
            <h2>Oops! Not found what you're looking for.</h2>
          </div>
        )}
        {showShimmer && (
          <div className="loadingIcon">
            <div className="loader"></div>
          </div>
        )}
      </div>
    </>
  );
}

export default Shimmer;