export const AuthorCard = ({ obj }) => {
  return (
    <li className='flex flex-col items-center py-10 px-7 bg-[#f4f4f4] transition-colors duration-500 ease-in-out hover:bg-[#fbf6ea]'>
      <div className='item_avatar'>
        <img src={obj.avatarUrl} />
      </div>

      <h3 className='mt-5 font-sen font-bold text-[28px] leading-[143%] tracking-[-0.04em] text-black'>
        {obj.name}
      </h3>
      <p className='font-inter font-normal text-sm leading-[143%] text-center text-gray'>
        Content Writer @{obj.companyName}
      </p>
      <ul className='flex items-center justify-center mt-5 gap-4'>
        <li className='item_social-facebook'>
          <img src={obj.facebookIconUrl} />
        </li>
        <li className='item_social-twitter'>
          <img src={obj.twiterIconUrl} />
        </li>
        <li className='item_social-instagram'>
          <img src={obj.instagramIconUrl} />
        </li>
        <li className='item_social-linkedin'>
          <img src={obj.linkedinIconUrl} />
        </li>
      </ul>
    </li>
  )
}
