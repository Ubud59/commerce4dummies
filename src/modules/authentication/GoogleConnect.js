import React from 'react'

function GoogleConnect(props) {
  return(
    <div>
      <div className="g-signin2" data-onsuccess="googleConnectCallback"></div>
    </div>
  )
}

export default GoogleConnect
