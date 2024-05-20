import { forwardRef } from "react"

interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }


export const FromInput = forwardRef<HTMLInputElement, InputProps>(({ ...rest }, ref) => {

    return (
        <div>
            <label>{rest.placeholder} </label>
            <input
                ref={ref}
                {...rest}
            />
        </div>

    )
})