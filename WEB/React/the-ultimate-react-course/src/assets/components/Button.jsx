import { memo } from "react";

const Button = (prop) => {
    console.log('Button');
    const {increment} = prop
  return (
    <div onClick={increment}>Button</div>
  )
}

export default memo(Button)