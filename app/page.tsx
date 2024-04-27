'use client'

import Image from "next/image";
import Script from "next/script";

import { useEffect, useState } from "react";

import TexEditor from "./ui/tex-editor";

export default function Home() {

  useEffect(() => {
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']]
      },
      svg: {
        fontCache: 'global'
      }
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


      <Script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js" />

      <TexEditor />
    </main>
  );
}
