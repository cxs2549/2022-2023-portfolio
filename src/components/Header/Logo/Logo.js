import { Link } from 'react-router-dom'
import face from '../../../assets/face.jpg'
const Logo = () => {
return (
<Link to="/" className="pl-4">
    <img src={face} className="w-14 h-14 rounded-full" alt="" />
</Link>
)
}
export default Logo