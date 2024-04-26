'use client';

// import {Button} from "@nextui-org/button";
import { Textarea } from "@nextui-org/react";

import { useState, useEffect } from "react";

export default function TexEditor() {
  let [tex, setTex] = useState("");

  useEffect(() => {
    // check for .typeset directly, rather than just
    // window.MathJax, otherwise it still seems to bug out
    if (typeof window?.MathJax.typeset !== "undefined") {
      console.log("mathjax is present?");
      window.MathJax.typeset();
      console.log("useEffect typeset dynamic?");
    }
  }, [tex]);

  return (
    <div>
      <div>
        <Textarea
          label="Description"
          placeholder="Enter TeX here"
          className="max-w-xs"
          onValueChange={(value: string) => {
            setTex("$$" + value + "$$");
          }}
        />
      </div>

      <div>
        {tex}
      </div>

    </div>

  );
}
