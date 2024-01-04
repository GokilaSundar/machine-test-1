import React from 'react'
import Product from '../../../components/Product'
import { useParams, useSearchParams } from 'react-router-dom'

const Page = () => {
    const {id} = useParams()
    // console.log(id)
  return (
    <div>
        <Product id={id}/>
    </div>
  )
}

export default Page