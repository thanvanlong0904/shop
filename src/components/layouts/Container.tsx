import React from 'react'
interface ContainerProp{
    children: React.ReactNode
}
export default function Container({children} : ContainerProp) {
  return (
    <div className=' max-w-7xl m-auto px-4'>{children}</div>
  )
}
