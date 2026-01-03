import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const useAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 0,
    });

    return () => {
      AOS.refresh();
    };
  }, []);
};

export const refreshAOS = () => {
  AOS.refresh();
};
