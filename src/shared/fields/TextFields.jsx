export const TextFieldSubTitle = ({
  children,
  text_color = '',
  font_weight = '',
}) => {
  return (
    <p
      className={`${text_color} font-inter ${font_weight} text-base leading-125 tracking-[0.19em] uppercase`}
    >
      {children}
    </p>
  )
}

export const TextFieldTitle = ({
  children,
  text_center = '',
  text_color = '',
  text_size = '',
  margin_bottom = '',
  margin_top = '',
}) => {
  return (
    <h2
      className={`${text_center} ${text_color} ${text_size} ${margin_bottom} ${margin_top} font-sen font-bold leading-133 tracking-[-0.06em]`}
    >
      {children}
    </h2>
  )
}

export const TextFieldInfo = ({
  children,
  text_center = '',
  text_color = '',
  margin_bottom = '',
  margin_top = '',
}) => {
  return (
    <p
      className={`${text_center} ${text_color} ${margin_bottom} ${margin_top} font-inter font-normal text-base leading-175`}
    >
      {children}
    </p>
  )
}
