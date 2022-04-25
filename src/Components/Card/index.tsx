import './styles.scss'

interface Props {
  className?: string;
  backgroundColor?: string;
}

function Card({ children, className, backgroundColor }: React.PropsWithChildren<Props>) {
  return (
    <div style={{ backgroundColor }} className={"card-container " + className}>
      {children}
    </div>
  )
}

export default Card