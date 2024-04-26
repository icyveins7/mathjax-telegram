import Image from "next/image";

import MathJax from "./mathjax";

import TexEditor from "./ui/tex-editor";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <MathJax />


      <TexEditor />
    </main>
  );
}
