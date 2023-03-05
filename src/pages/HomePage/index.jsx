import "./index.css"
function HomePage() {
	return (
		<div id="container">
			<section id="img1" className="img">
				<div className="content">
					<ruby>张  <rp>(</rp><rt>Zhāng</rt><rp>)</rp></ruby>  
					<ruby>家  <rp>(</rp><rt>jiā</rt><rp>)</rp></ruby>  
					<ruby>界  <rp>(</rp><rt>jiè</rt><rp>)</rp></ruby>
				</div>
			</section>
			<section id="img2" className="img">
				<div className="content">
					{" "}
					<p>
						ZhangJiaJie is a prefecture-level city in the northwestern part of Hunan Province,
						China. Located in the hinterland of Wuling Mountains, the terrain is
						dominated by mountains. Limestone is widely distributed, and there
						are many landforms such as karst, peak forests, and caves.{" "}
					</p>{" "}
				</div>
			</section>
			<section id="img3" className="img">
				<div className="content">
					{" "}
					<p>
						The city has a total area of 9,534 square kilometers and a
						population of 1.524 million. The Tujia nationality accounts for more
						than 60% of the population. The Municipal People's Government is
						located in Yongding District. Zhangjiajie is a famous tourist city.
						Wulingyuan's sandstone and peak forest landscape is rare in the
						world. In December 1992, it was listed as a world natural heritage
						by UNESCO.
					</p>{" "}
				</div>
			</section>
			<section id="img4" className="img">
				<div className="content">
					{" "}
					<p>
						Get up close and personal with the mountains from Avatar. Don't just
						be impressed by videos and pictures. Travel to see the real ones -
						they are only a day's journey from you.
					</p>{" "}
				</div>
			</section>
			<section id="img5" className="img">
				<div className="content">
					{" "}
					<p>
						Escape from your busy routine to see the most beautiful scenery and
						rejuvenate your mind and body.
					</p>{" "}
				</div>
			</section>
		</div>
	);
}

export default HomePage;
