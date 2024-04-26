'use client'

import { useEffect } from 'react';

export default function MathJax() {
  // put everything in useEffect
  // so that document/window are found
  useEffect(() => {
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']]
      },
      svg: {
        fontCache: 'global'
      }
    };

    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
    script.async = true;
    // script.defer = true;
    document.head.appendChild(script);
  }, []);



  // return (function () {
  // var script = document.createElement('script');
  // script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
  // script.async = true;
  // document.head.appendChild(script);
  // })();
}
