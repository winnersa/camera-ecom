import Link from 'next/link'
import React from 'react'

const DetailsError = ({title}) => {
  return (
    <React.Fragment>
      <div>Errror on: {title}</div>
      <Link href={'/'}>Go to home</Link>
    </React.Fragment>
  )
}

export default DetailsError