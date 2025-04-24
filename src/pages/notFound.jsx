import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div>
            <p>404 Not Found</p>
            <Link className="text-blue-600 underline" to={'/home'}>Home</Link>
        </div>
    )
}

export default NotFoundPage;