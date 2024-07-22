import { Container } from '~/shared/shells'
import { TextFieldTitle } from '~/shared/fields/TextFields'

import { AuthorsContent } from '~/data/authors.data'

import { AuthorCard } from './ui/Card'

const Authors = () => {
  return (
    <section className='pt-32 pb-24'>
      <Container>
        <TextFieldTitle
          text_center='text-center'
          text_color='text-black'
          text_size='text-4xl'
          margin_bottom='mb-12'
        >
          List of Authors
        </TextFieldTitle>

        <ul className='grid grid-cols-authors gap-8'>
          {AuthorsContent?.map(obj => (
            <AuthorCard key={obj.id} obj={obj} />
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default Authors
