import { ComponentProps } from "react"

type Props = ComponentProps<"main">

const PaddedBlock = (props: Props) => {
  return (
    <main className="px-5 md:px-[120px] 2xl:px-[240px]">
      {props.children}
    </main>
  )
}

export default PaddedBlock