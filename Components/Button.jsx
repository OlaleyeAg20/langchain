

const Button = ({children, ...props}) => {
  return (
    <button className={props.className}>
        {children}
    </button>
  )
}

export default Button