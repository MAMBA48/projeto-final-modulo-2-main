import {
  DetailedHTMLProps,
  HtmlHTMLAttributes,
  InputHTMLAttributes
} from 'react'
interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<InputHTMLAttributes>,
    HTMLInputElement
  > {
  label: string
  id: string
}

const Input = ({}: Props) => {
  return (
    <>
      <input type="text" placeholder="text" value={'e'} />
    </>
  )
}
export default Input
