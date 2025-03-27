'use client';

import { useEffect } from 'react';
import { edgeConfigStore } from '../src/stores/edge-config-store';

const ConfigFetch = () => {
  useEffect(() => {
    edgeConfigStore.fetchConfigData();
  }, []);

  return null;
};

export default ConfigFetch;
