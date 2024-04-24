'use client';

import {Button} from "@nextui-org/button";
import {Textarea} from "@nextui-org/react";

import {useState, useEffect} from "react";
import MathJax from "./mathjax";

export default function TexEditor() {
  let [tex, setTex] = useState("");

  // useEffect(()=>{
  //   if( typeof window?.MathJax !== "undefined"){
  //     console.log("dynamic typeset useEffect");
  //     window.MathJax.typeset();
  //   }
  // },[tex]);


  return (
    <div>
      <div>
        <Textarea
          label="Description"
          placeholder="Enter TeX here"
          className="max-w-xs"
          onValueChange={(value: string) => {
            setTex(value);
          }}
        />
      </div>

      <div>
        <Button onClick={() => {
          try{
            window.MathJax.typeset();
            console.log("typeset?");
          } catch(e){
            console.log(e);
          }
        }}>
          Submit
        </Button>
      </div>

      <div>
        This is some static latex.
        $$
          \gamma = x^2 \tau
        $$

      </div>

      <div>
        $$
        {tex}
        $$
      </div>

    </div>

  );
}
