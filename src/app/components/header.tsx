import React from 'react'
import Image from 'next/image'

const header = () => {
  return (
    <div className="w-full h-14 bg-red-500 flex items-center justify-between p-4">
        <Image src="/rz-icon.png" alt="RZ Transportes" width={100} height={100} />
        <span>wow que padre logo!</span>
        <span>aqui sera tu haeder (el menu) para poder navegar</span>
        <span>todo lo que quieras de colores y así hazmelo saber</span>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1">no me piques...</a>
    </div>
  )
}

export default header