import Card from "../components/shared/Card"
import { Link } from "react-router-dom"

function AboutPage() {
	return (
		<Card>
			<div className="about">
				<h1>About This Project</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, magni consectetur, dicta numquam nobis, ratione blanditiis id minus dolorum
					quae tempore. Porro corrupti tenetur, non incidunt eaque tempora inventore aliquid?
				</p>
				<p>Version: 1.0.0</p>
				<p>
					<Link to="/">Back to Home</Link>
				</p>
			</div>
		</Card>
	)
}

export default AboutPage
