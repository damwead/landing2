import React from "react";
import Link from "next/link";

const GetInTouch = () => {
  return (
		<>
			<div 
				className="get-in-touch-area ptb-100"
				style={{ backgroundImage: `url(/img/get-in-touch-bg.jpg)` }}
			>
				<div className="container">
					<div className="get-in-touch-content">
						<h2>Did You Like Our Work?</h2>
						<h3>Get In Touch Today!</h3>

						<Link href="/contact" className="default-btn">
							Contact Us
						</Link>
					</div>
				</div>
			</div>
		</>
  );
};

export default GetInTouch;
