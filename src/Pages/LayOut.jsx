import { Header } from '../Components/Header'
import { Outlet } from 'react-router-dom';

const LayOut = () => {
    return (
        <section>
            <Header />
            <Outlet />
        </section>
    )
}

export { LayOut }