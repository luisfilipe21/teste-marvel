import { forwardRef } from "react"
import { MainInputDiv } from "../../styles/body"

interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }


export const FromInput = forwardRef<HTMLInputElement, InputProps>(({ ...rest }, ref) => {

    return (
        <MainInputDiv>
            <label>{rest.placeholder} </label>
            <input
                ref={ref}
                {...rest}
            />
        </MainInputDiv>

    )
})