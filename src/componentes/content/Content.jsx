import React from 'react'

export const Content = (greeting) => {
  return (
    <main className='w-100 d-flex flex-wrap justify-content-around'>
        {greeting.children}

    </main>
  )
}
