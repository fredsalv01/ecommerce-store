import React from 'react'

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  children,
}) => {
  return (
    <div className='mx-auto max-w-7xl h-full'>
      {children}
    </div>
  )
}

export default Container
