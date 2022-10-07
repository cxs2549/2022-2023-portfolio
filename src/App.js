import { useRoutes } from 'react-router'
import Header from './components/Header/Header'
import Portfolio2 from './views/Portfolio2/Portfolio'

const routes = [
	{ path: '/', element: <Portfolio2 /> },
]

const App = () => {
	const element = useRoutes(routes)
	return (
		<div className="bg-gray-200 h-screen overflow-hidden">
			<Header />
			<main className="overflow-hidden bg-gray-200 ">{element}</main>
		</div>
	)
}

export default App
