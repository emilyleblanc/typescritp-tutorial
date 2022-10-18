
//react team has defined css propperties as "React.CSSProperties"
//in our types object we define styles as such
type ContainerProps = {
    styles: React.CSSProperties
}

export default function Container({styles}:ContainerProps) {
  return (
    <div style={styles}>Container text gor here</div>
  )
}
