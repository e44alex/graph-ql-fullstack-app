import React, { ReactElement, useEffect, useState } from 'react';

export type WithApiCheckProps = {
  children: ReactElement
}

export const WithApiCheck = ({children}: WithApiCheckProps) => {
  const [connectionChecked, setConnectionChecked] = useState(false)
  const [apiOnline, setApiOnline] = useState(false);

  useEffect(() => {
    if (!connectionChecked) {
      fetch('/health')
        .then(value => setApiOnline(value.ok))
        .catch(() => setApiOnline(false))
        .finally(() => setConnectionChecked(true));
    }
  }, [])

  if (!connectionChecked) {
    return <p>Checking connection...</p>
  }

  if (connectionChecked && !apiOnline) {
    return <p>Api is offline...</p>
  }

  return children;
}