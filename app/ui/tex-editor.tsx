'use client';

import {Button} from "@nextui-org/button";
import {Textarea} from "@nextui-org/react";


export default function TexEditor() {
  let tex: string = "";

  return (
    <div>
      <div>
        <Textarea
          label="Description"
          placeholder="Enter TeX here"
          className="max-w-xs"
          onValueChange={(value: string) => {
            tex = value;
            console.log(tex);
          }}
        />
      </div>

      <div>
        <Button>
          Submit
        </Button>
      </div>

      <div>
        {tex}
      </div>

    </div>

  );
}
