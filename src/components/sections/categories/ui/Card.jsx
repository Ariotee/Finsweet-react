import { TextFieldTitle, TextFieldInfo } from '~/shared/fields/TextFields'

export const Category = ({ imageUrl, name, info }) => {
  return (
    <li className='p-8 cursor-pointer border border-solid border-border-dark transition-all ease-in-out duration-[500ms] hover:bg-accent'>
      <div className='flex items-center justify-start'>
        <img src={imageUrl} />
      </div>

      <TextFieldTitle
        text_size='text-[28px]'
        margin_bottom='mb-1'
        margin_top='mt-4'
        text_color='text-black'
      >
        {name}
      </TextFieldTitle>
      <TextFieldInfo text_color='text-gray'>{info}</TextFieldInfo>
    </li>
  )
}
