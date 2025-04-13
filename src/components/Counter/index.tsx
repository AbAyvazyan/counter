import { FC } from "react"

type TCounter = {
    count: number
}

const Counter: FC<TCounter> = ({ count }) => {
    return <div>
        {count}
    </div>
}

export default Counter