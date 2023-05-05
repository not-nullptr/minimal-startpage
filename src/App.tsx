import { useEffect } from "react";

function App() {
	return (
		<div className="main">
			<div className="container">
				<h1>welcome back!</h1>
				<div>missed me? i know {"<3"}</div>
				{/* <input
					onKeyUp={(e) => {
						if (e.key !== "Enter") return;
						e.preventDefault();
						window.location.href = `https://google.com/search?q=${
							(e.target as HTMLInputElement).value
						}`;
					}}
					type="search"
					placeholder="search google for..."
				/> */}
			</div>
		</div>
	);
}

export default App;
