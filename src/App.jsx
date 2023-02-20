import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Navbar />}>
					<Route index element={<NoMatch />} />
					<Route path="lodging" element={<NoMatch />} />
					<Route path="restaurants" element={<NoMatch />} />
					<Route path="attractions" element={<NoMatch />} />

					{/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
					<Route path="*" element={<NoMatch />} />
				</Route>
			</Routes>
		</div>
	);
}
function NoMatch() {
	return (
		<div>
			<h2>Nothing to see here!</h2>
			<p>
				<Link to="/">Go to the home page</Link>
			</p>
		</div>
	);
}

export default App;


// unordered_set<std::string> uniqueStrings;
//     vector<string> result;
//     for( auto & strings : text){
//         int freq[26] = {0};
//         for(char c : strings){
//             freq[c-'a']++;
//         }
//         string sortedString = "";
//         for(int i = 0; i < 26 ; i++){
//             if(freq[i]>1)
//                 sortedString += string(freq[i], i + 'a');
//         }
//         if(uniqueStrings.find(sortedString) == uniqueStrings.end() ){
//             result .push_back(strings);
//             uniqueStrings.insert(sortedString);
//         }
//     }
//     sort(result.begin(), result.end());
//     return result;


// int getUniqueCharacter(string s) {
//     std::unordered_map<char, int> freq;
//     for(char character: s){
//         freq[character]++;
//     }
//     for(int i = 0 ; i < s.size(); i++){
//         if(freq[s[i]] == 1){
//             return i +1;
//         }
//     }
//     return -1;
// }

// function counts(teamA, teamB) {
//     // Write your code here
//     let result = [];
//     // inplementation in non decreasing order with comparator
//     teamA.sort((a,b) => a-b);
//     for(let i = 0; i < teamB.length;i++ ){
//         let goals = teamB[i];
//         // find every a that less that teamB[i] goals
//         let count = teamA.filter((a)=> a<= goals).length;
//         result.push(count);
//     }
//     return result;
// }