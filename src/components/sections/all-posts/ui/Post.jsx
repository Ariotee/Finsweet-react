import {
  TextFieldInfo,
  TextFieldSubTitle,
  TextFieldTitle,
} from '~/shared/fields/TextFields'

export const Post = ({ data }) => {
  return (
    <div className='flex gap-8'>
      <div>
        <img src={data.imageURL} />
      </div>

      <div className=' py-[55px] max-w-[624px]'>
        <TextFieldSubTitle
          font_weight={'font-semibold'}
          text_color={'text-purple'}
        >
          {data.subtitle}
        </TextFieldSubTitle>
        <TextFieldTitle
          text_color={'text-black'}
          text_size={'text-4xl'}
          margin_top={'mt-5'}
          margin_bottom={'mb-4'}
        >
          {data.title}
        </TextFieldTitle>
        <TextFieldInfo text_color={'text-gray'}>{data.info}</TextFieldInfo>
      </div>
    </div>
  )
}
