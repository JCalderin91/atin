/* eslint-disable @typescript-eslint/no-explicit-any */

type Props = {
    children: string,
    iconComponent: (props: any) =>JSX.Element
}
export const MenuCard = ({ children, iconComponent }: Props) => {
    return (
        <div className="p-6 h-44 w-56 bg-white dark:bg-slate-700 rounded-lg hover:scale-110 transition-all duration-300 dark:hover:bg-slate-500 hover:bg-slate-200 relative flex items-end text-3xl">{children} {iconComponent({ className: "absolute top-3 right-1 w-24 h-24 opacity-20" })} </div>
    )
}
