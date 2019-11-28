import React from "react";

import Ad from "./Ad";

function App() {
  return (
    <div>
      <Ad
        name="Vancouver loft"
        img="https://themacnabs.com/wp-content/uploads/2017/03/East-4th-High-Resolution-26-1024x683.jpg"
        price="$230/night"
      />
      <Ad
        name="Gastown highrise"
        img="https://themacnabs.com/wp-content/uploads/2017/03/East-4th-High-Resolution-49-1024x683.jpg"
        price="$250/night"
      />
    </div>
  );
}

export default App;
