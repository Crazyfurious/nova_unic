import React from 'react'

const Footer = ( {action} ) => {

  const onClickHandler = () => { console.log('Has hecho click') }

  return (
  <>
    <div>Este es mi pie <span>Desde aquí todo</span> de pagina</div> 
    <div>Web en desarrollo</div>
    <button onClick={action}>Haz click aquí</button> 
  </>
  )
}

export default Footer