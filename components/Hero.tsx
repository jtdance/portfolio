import React from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

function Hero({}: Props) {
    const [text] = useTypewriter({
    words: [
        "Hello, My name is Justin Dance",
        "Guy-who-loves-monster.tsx",
        "<ButLovesToCodeMore />"
        ],
    loop: true,
    delaySpeed: 2000,
    })
  return (
      <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
          <BackgroundCircles />
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='#f7ab0a' />
        </h1>
    </div>
  );
}

export default Hero