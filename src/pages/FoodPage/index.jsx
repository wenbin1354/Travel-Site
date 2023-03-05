import food1 from "../../assets/food1.jpg";
import food2 from "../../assets/food2.jpg";
import food3 from "../../assets/food3.jpg";
import food4 from "../../assets/food4.jpg";
import "./index.css";
function FoodPage() {
	return (
		<div className="food">
			<div className="card">
				<img src={food1} />
				<div className="card-container">
					<h1>Three pots in Zhangjiajie</h1>
					<br></br>
					<p>
						During the Jiajing period of the Ming Dynasty, the imperial court
						recruited chieftain soldiers from western Hunan and Hubei to fight
						against the Japanese. Just in time for the new year, in order not to
						miss the military plane, the chieftain king ordered to celebrate the
						New Year one day in advance, so bacon, tofu, and radish were cooked
						in a pot, which was called "combined vegetables". It later evolved
						into "three pots".
					</p>
				</div>
			</div>
			<div className="card">
				<img src={food2} />
				<div className="card-container">
					<h1>Tujia preserved meat</h1>
					<br></br>
					<p>
						Every year during the twelfth lunar month, people first cut the pork
						into strips, then spread the meat with salt, put it in jars or
						wooden barrels, marinate it for a week, take it out and air-dry it,
						and then smoke it with firewood. When eating bacon, cook the bacon
						in a pot. The steamed bacon is fragrant and appetizing. It is the
						main dish that Tujia people usually serve on the table when
						entertaining guests.
					</p>
				</div>
			</div>
			<div className="card">
				<img src={food3} />
				<div className="card-container">
					<h1>Stewed Chicken with Rock Tripe</h1>
					<br></br>
					<p>
						Umbilicaria esculenta (Rock Tripe) are produced on the cliffs of
						Wulingyuan. People who pick them with ropes around their waists are
						like flying trapeze. Chicken and stew complement each other, with a
						mellow and rich aroma.:
					</p>
				</div>
			</div>
			<div className="card">
				<img src={food4} />
				<div className="card-container">
					<h1>Tujia Braised Pork</h1>
					<br></br>
					<p>
						Tujia buckwheat is a main dish for Tujia people to entertain guests.
						Generally, it is only served as the main dish when local people hold
						banquets or large-scale events. The practice of Zhangjiajie Tujia
						buckle meat is made of streaky pork, which is made by boiling,
						frying, deep-frying, steaming and other processes. When serving, the
						meat is usually covered with dried pickles. Although it is made of
						fatty meat, it does not taste greasy at all, and the taste is
						extremely tender. At present, general restaurants and hotels in
						Zhangjiajie have this dish, which is convenient for tourists to
						taste.
					</p>
				</div>
			</div>
		</div>
	);
}

export default FoodPage;
