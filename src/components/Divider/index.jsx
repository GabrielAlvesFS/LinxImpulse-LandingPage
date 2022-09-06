import { DividerStyle } from "./style"

export function Divider({children}){
  return (
    <DividerStyle>
      <span className="line"></span>
      <p>{children}</p>
      <span className="line"></span>
    </DividerStyle>
  )
}
