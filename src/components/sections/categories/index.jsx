import { Container } from '~/shared/shells'
import { TextFieldTitle } from '~/shared/fields/TextFields'

import { Category } from './ui/Card'

import { ContentCateg } from '~/data/categories.data'

const Categories = () => {
  return (
    <section className='py-32'>
      <Container>
        <TextFieldTitle
          text_color='text-black'
          text_center='text-center'
          text_size='text-4xl'
          margin_bottom='mb-12'
        >
          Choose A Category
        </TextFieldTitle>

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
