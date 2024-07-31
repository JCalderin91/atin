import { Link } from 'react-router-dom'
import { Button } from '../atoms/Button'
import { ArrowLeftIcon } from '../atoms/icons'

export const BackHomeButton = () => {
    return (
        <Link to={'/'} className='inline-block'>
            <Button >
                <ArrowLeftIcon />
                <span>Volver</span>
            </Button>
        </Link>
    )
}
