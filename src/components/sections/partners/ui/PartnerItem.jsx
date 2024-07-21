export const PartnerItem = ({ obj }) => {
  return (
    <li className='partners__list-item'>
      <img src={obj.logotypeUrl} alt={obj.alt} />
    </li>
  )
}
