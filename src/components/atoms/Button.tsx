type Props = {
    children: JSX.Element | JSX.Element[]
}

export const Button = ({ children }: Props) => {
    return (
        <button className="flex gap-2 hover:bg-slate-800 px-2 py-1 rounded-lg transition-all ">{children}</button>
    )
}
