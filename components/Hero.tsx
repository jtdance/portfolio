import React from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'

type Props = {}

export default function Hero({}: Props) {
    const [text] = useTypewriter({
    words: [
        "Hello, My name is Justin Dance",
        "Guy-who-loves-Monster.tsx",
        "<ButLovesToCodeMore />"
        ],
    loop: true,
    delaySpeed: 2000,
    })
  return (
    <div>
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='#f7ab0a' />
        </h1>
    </div>
  );
}