import React from 'react'

import { AuthorsContent } from './data/authors.data'

import { Container } from '~/shared/shells'
import { TextFieldTitle } from '../about-us/ui/TextFields'
import { AuthorCard } from './ui/Card'

const Authors = () => {
  return (
    <div className='pt-32 pb-24'>
      <Container>
        <TextFieldTitle text_center={'text-center'}>
          List of Authors
        </TextFieldTitle>

        <ul className='grid grid-cols-authors gap-8'>
          {AuthorsContent?.map(obj => (
            <AuthorCard key={obj.id} obj={obj} />
          ))}
        </ul>
      </Container>
    </div>
  )
}

export default Authors
