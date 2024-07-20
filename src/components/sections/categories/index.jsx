import React from 'react'

import { Container } from '~/shared/shells'
import { Category } from './ui/Card'

import { ContentCateg } from './data/Categories'

const Categories = () => {
  return (
    <section className='py-32'>
      <Container>
        <h2 className='text-center mb-12 font-sen text-black font-bold text-4xl leading-[133%] tracking-[-0.06em]'>
          Choose A Category
        </h2>

        <ul className='grid grid-cols-category gap-8'>
          {ContentCateg.map(({ id, imageUrl, name, info }) => (
            <Category key={id} imageUrl={imageUrl} name={name} info={info} />
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default Categories
