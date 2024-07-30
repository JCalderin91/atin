import { TagIcon, UserIcon } from "@/components/atoms/icons"
import { MenuCard } from "@/components/atoms/MenuCard"
import { useAthletes } from "@/hooks/useAthletes"
import { Link } from "react-router-dom"

export const Home = () => {
    const { athletes } = useAthletes()
    return (
        <section>
            <section className="flex gap-1 md:gap-8 items-center justify-center min-h-dvh flex-wrap ">
                <Link to={`athletes`}>
                    <MenuCard iconComponent={(props) => <UserIcon {...props} />}>
                        {`Atletas: ${athletes.length}`}
                    </MenuCard>
                </Link>
                <Link to={`categories`}>
                    <MenuCard iconComponent={(props) => <TagIcon {...props} />}>Categorias</MenuCard>
                </Link>
            </section>
        </section>
    )
}
