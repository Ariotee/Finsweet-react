import { Container } from '~/shared/shells'
import { TextFieldInfo, TextFieldTitle } from '../about-us/ui/TextFields'

const JoinTeam = () => {
  return (
    <div className='pb-32'>
      <Container>
        <div className='flex justify-center'>
          <div className='flex flex-col justify-center items-center max-w-[414px]'>
            <TextFieldTitle text_center='text-center'>
              Join our team to be a part of our story
            </TextFieldTitle>
            <TextFieldInfo text_center='text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </TextFieldInfo>
            <div className='mt-8'>
              <a
                href='#'
                className='block py-4 px-12 bg-accent font-sen font-bold text-[18px] leading-[133%] text-black'
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default JoinTeam
