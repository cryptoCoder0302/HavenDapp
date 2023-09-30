import { useContext } from 'react';
import { Context } from '../contexts/BgsProvider';

const useBgs = () => {
  const { bgs } = useContext(Context);
  return bgs;
}

export default useBgs;