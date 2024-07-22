import { PartnersContent } from '~/data/partners.data'

import { Container } from '~/shared/shells'
import { PartnerItem } from './ui/PartnerItem'

const Partners = () => {
  return (
    <div className='pb-5'>
      <Container>
        <ul className='flex items-center justify-between'>
          {PartnersContent?.map(obj => (
            <PartnerItem key={obj.id} obj={obj} />
          ))}
        </ul>
      </Container>
    </div>
  )
}

export default Partners
