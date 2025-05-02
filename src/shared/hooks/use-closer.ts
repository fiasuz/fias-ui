import React, { useEffect } from 'react';

/**
 * Hook for closing some items when they are unnecessary to the user
 * @param ref For an item that needs to be closed when the outer part is pressed
 * @param closeFunction Closing function
 * @param scrollClose If it shouldn't close when scrolling, false will be sent. Default true
 */

const useCloser = (
  ref: React.RefObject<HTMLElement>,
  closeFunction: () => void,
  scrollClose: boolean = true,
) => {
  useEffect(() => {
    // call function when click outside is ref element
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        closeFunction();
      }
    }

    // call function when page is scrolling
    function handleScroll() {
      if (scrollClose) {
        closeFunction();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [ref, closeFunction]);
};

export default useCloser;
