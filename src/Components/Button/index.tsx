import './styles.scss'

interface Props {
  width?: string;
  className?: string;
  margin?: string;
  padding?: string;
  fontSize?: string;
}

function Button({ children, width, className, margin, padding, fontSize }: React.PropsWithChildren<Props>) {
  return (
    <div style={{ width, margin, padding, fontSize }} className={"button " + className}>
      {children}
    </div>
  )
}

export default Button