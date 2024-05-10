'use client';

import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/react";

import { useState, useEffect } from "react";

import AblyPubSub from "./ably-pubsub";

export default function TexEditor() {
    let [tex, setTex] = useState("");
    let [text, setText] = useState("");

    useEffect(() => {
        // check for .typeset directly, rather than just
        // window.MathJax, otherwise it still seems to bug out
        if (typeof window?.MathJax !== "undefined" && typeof window?.MathJax.typeset !== "undefined") {
            // console.log("mathjax is present?");
            window.MathJax.typeset();
            // console.log("useEffect typeset dynamic?");
        }
    }, [tex]);

    return (
        <div>
            <AblyPubSub />

            <div>
                <Textarea
                    label="Your whiteboard"
                    placeholder="Enter TeX here"
                    className="max-w-xs"
                    value={text}
                    onValueChange={(value: string) => {
                        setText(value);
                        if (value.length > 0) {
                            setTex("$$" + value + "$$");
                        }
                        else {
                            setTex("");
                        }
                    }}
                />
            </div>

            <div>
                {tex}
            </div>

            <div>
                <Button>
                    Submit
                </Button>
                <Button
                    onPress={() => {
                        setText("");
                        setTex("");
                    }}
                >
                    Clear
                </Button>


            </div>

        </div >

    );
}
