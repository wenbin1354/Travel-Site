import mount from "../../assets/mount.png";
import stair from "../../assets/stair.jpeg";
import jing from "../../assets/jing.png";
import plant from "../../assets/plant.png";
import bridge from "../../assets/bridge.png";
import bridge2 from "../../assets/bridge2.jpg";
import fenghuang from "../../assets/fenghuang.jpg";
import fenghuang2 from "../../assets/fenghuang2.jpg";
import cave from "../../assets/cave.jpg";
import cave2 from "../../assets/cave2.jpg";
import "./index.css";
function AttractionPage() {
	return (
		<div>
			<div className="scenery">
				<img src={jing} />
				<img src={plant} />
				<div className="scenery-text">
					<h1>Zhangjiajie National Forest Park</h1>
					<br></br>
					<p>
						Zhangjiajie National Forest Park is located in the branch of Qingyan
						Mountain in Wuling Mountains. The highest point is Tuwangyue Peak,
						1334 meters above sea level, and the lowest point is Shuihuan Simen,
						426 meters above sea level. The bedrock is mainly red sandstone,
						with a small amount of limestone, sand shale and purple shale. The
						soil is light sandy medium-thick yellow soil, the soil with the
						original parent material developed, the soil layer is deep, and the
						soil with the slope-accumulated parent material developed, the soil
						layer is shallow and there are many stones.
					</p>
				</div>
			</div>
			<div className="scenery">
				<img src={mount} />
				<img src={stair} />
				<div className="scenery-text">
					<h1>Tianmen Mountain</h1>
					<br></br>
					<p>
						Tianmen Mountain is located in Yongding District, Zhangjiajie City,
						Hunan Province, China. It is named after the natural wonder Tianmen
						Cave, and is also famous all over the world for Tianmen Cave. It is
						known as "the first sacred mountain in western Hunan" and "the soul
						of Wuling". and "The Soul of Zhangjiajie".
					</p>
				</div>
			</div>
			<div className="scenery">
				<img src={bridge} />
				<img src={bridge2} />
				<div className="scenery-text">
					<h1>Zhangjiajie Grand Canyon Glass Bridge</h1>
					<br></br>
					<p>
						Zhangjiajie Glass footpath is a skywalk bridge in Zhangjiajie,
						Hunan, above the Wulingyuan area. The bridge, built as an attraction
						for tourists, is glass-bottomed and is transparent. When it opened
						it was the longest and tallest glass bottomed bridge in the world.
						The bridge, opened to the public on August 20, 2016, measures 430
						metres in total length and 6 metres in width, and is suspended about
						300 metres above the ground. The bridge spans the canyon between two
						mountain cliffs in Zhangjiajie National Forest Park in the northwest
						of Hunan province. It is designed to carry up to 800 visitors at a
						time. The bridge was designed by Israeli architect Haim Dotan.
					</p>
				</div>
			</div>
			<div className="scenery">
				<img src={fenghuang} />
				<img src={fenghuang2} />
				<div className="scenery-text">
					<h1>Fenghuang Ancient City</h1>
					<br></br>
					<p>
						Fenghuang Ancient City is located in the southwest of Xiangxi Tujia
						and Miao Autonomous Prefecture in Hunan Province. It covers an area
						of ​​about 10 square kilometers. It is composed of 28 ethnic groups
						including Miao, Han, and Tujia. It is a typical minority-inhabited
						area. The ancient city of Fenghuang was built in the 43rd year of
						Emperor Kangxi of the Qing Dynasty, and the ancient city buildings
						of the east gate and the north gate are still there. The Qingshiban
						street, the riverside wooden stilted buildings, Chaoyang Palace,
						Ancient City Museum, Yang Family Ancestral Hall, Shen Congwen's
						Former Residence, Xiong Xiling's Former Residence, Tianwang Temple,
						Dacheng Hall, Longevity Palace and other buildings in the city all
						have the characteristics of the ancient city.
					</p>
				</div>
			</div>
			<div className="scenery">
				<img src={cave} />
				<img src={cave2} />
				<div className="scenery-text">
					<h1>Yellow Dragon Cave</h1>
					<br></br>
					<p>
						Yellow Dragon Cave is located at the east end of Wulingyuan, the
						core scenic spot in Zhangjiajie, about five kilometers away from
						Wulingyuan City. Huanglong Cave was officially opened to the outside
						world in 1984. The total area of ​​the proven cave bottom is 100,000
						square meters, with a total length of 7.5 kilometers and a vertical
						height of 140 meters. It is divided into four floors. Its large
						scale, numerous stalactites, and strange shapes are extremely rare
						in domestic and foreign caves, and it has been praised by Chinese
						and foreign cave experts as the "all-round champion" of caves in the
						world.
					</p>
				</div>
			</div>
		</div>
	);
}

export default AttractionPage;
