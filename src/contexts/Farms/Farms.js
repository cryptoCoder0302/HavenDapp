import React, { useState } from 'react';

import useBgs from '../../hooks/useBgs';
import { getFarms } from '../../contracts/utils';

import Context from './context';

const Farms = ({ children }) => {
  const [unharvested] = useState(0);

  const bgs = useBgs();
  const farms = getFarms(bgs);
  

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms;
