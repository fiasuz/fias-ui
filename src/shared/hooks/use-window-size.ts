import { useEffect, useState } from 'react';

interface ISize {
  width: number | undefined;
  height: number | undefined;
}

/**
 * Screen size determination
 * @returns number
 */
const useWindowSize = () => {
  const [size, setSize] = useState<ISize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const getScreenSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    getScreenSize();

    window.addEventListener('resize', getScreenSize);

    return () => {
      window.removeEventListener('resize', getScreenSize);
    };
  }, []);

  return size;
};

export default useWindowSize;
