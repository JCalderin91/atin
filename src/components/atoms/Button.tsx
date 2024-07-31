type Props = {
    children: JSX.Element | JSX.Element[]
}

export const Button = ({ children }: Props) => {
    return (
        <button className="flex gap-2 dark:hover:bg-slate-800 hover:bg-slate-300 px-2 py-1 rounded-lg transition-all ">{children}</button>
    )
}
