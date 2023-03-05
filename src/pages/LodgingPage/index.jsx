import forest from "../../assets/forest.jpg";
import hotel1 from "../../assets/hotel1.png";
import hotel2 from "../../assets/hotel2.jpeg";
import hotel3 from "../../assets/hotel3.jpeg";
import "./index.css";
function LodgingPage() {
	return (
		<div>
			<img className="img-header" src={forest} />
			<div className="img-container">
				<img className="img-hotel-right" src={hotel1} />
				<section>
					<p>
						<span style={{ fontWeight: "bold" }}>Location: </span>{" "}
						Nanzhuangping, Yongding District, Zhangjiajie City
					</p>
					<p style={{ fontWeight: "bold" }}>Five Star Hotel</p>
					<p>
						It is the only place to enter and exit Zhangjiajie Hehua Airport. It
						is about 5-10 minutes walk from Tianmenshan Cableway Company. When
						going out of the airport to any hotel in the city, you must pass
						through Dacheng Shanshui Hotel. Those who have higher requirements
						for accommodation can choose to stay in this hotel. It is also close
						to the train station and bus station, only 5-10 minutes by taxi,
						very convenient
					</p>
				</section>
			</div>

			<div className="img-container" style={{ justifyContent: "flex-end" }}>
				<section>
					<p>
						<span style={{ fontWeight: "bold" }}>Location: </span> Zhangdiping,
						Sanguansi Township
					</p>
					<p style={{ fontWeight: "bold" }}>
						Five Star Villa-Style Boutique Resort Hotel
					</p>
					<p>
						The hotel is adjacent to the Huanglong Cave in the south and the
						Grand Canyon in the north. The hotel uses the cultural elements of
						the Miao and Tujia ethnic groups in western Hunan.
					</p>
				</section>
				<img className="img-hotel-left" src={hotel2} />
			</div>

			<div className="img-container" style={{marginBottom:"-5%"}}>
				<img className="img-hotel-right" src={hotel3} />
				<section>
					<p>
						<span style={{ fontWeight: "bold" }}>Location: </span> Tianzishan
						Town
					</p>
					<p style={{ fontWeight: "bold" }}>Boutique Feature Inn</p>
					<p>
						It is relatively remote and quiet, and enjoys the tranquility and
						pastoral life of living in the mountains. Generally, tourists enter
						the park from the forest park, take an eco-car from the top of the
						mountain to the Tianzishan ticket station, if you want to watch
						the sunrise, it is especially good to live here. It is only 50
						meters away from the entrance ticket station of Tianzi Mountain in
						Forest Park. The first store and the second store are decorated in
						the style of Tujia. There is also a swimming pool at the entrance of
						the second store. Those who live in the first store and the second
						store can swim in the swimming pool.
					</p>
				</section>
			</div>
		</div>
	);
}

export default LodgingPage;
