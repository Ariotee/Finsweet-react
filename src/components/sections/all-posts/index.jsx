import { TextFieldTitle } from '~/shared/fields/TextFields'
import { Container } from '~/shared/shells'

import { allposts } from '~/data/posts.data'
import { Post } from './ui/Post'

const AllPostList = () => {
  return (
    <section className='my-8'>
      <Container>
        <div className=''>
          <TextFieldTitle
            text_color={'text-black'}
            text_size={'text-5xl'}
            margin_bottom={'mb-8'}
          >
            All posts
          </TextFieldTitle>
          <span className='block h-[1px] bg-gray w-full opacity-[0.32]'></span>
        </div>
        <div className='flex flex-col gap-16 mt-16'>
          {allposts.map(obj => (
            <Post key={obj.id} data={obj} />
          ))}
        </div>
        <div className='flex justify-center mt-16 gap-4 mb-[-100px]'>
          <button className='font-bold text-2xl text-gray leading-133'>
            {'<'} Prev
          </button>
          <button className='font-bold text-[28px] text-black leading-143 tracking-[-0.04em]'>
            Next {'>'}
          </button>
        </div>
      </Container>
    </section>
  )
}

export default AllPostList
