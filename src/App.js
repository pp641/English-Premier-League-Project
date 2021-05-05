import React from 'react'
import HeaderComponent from './Components/HeaderComponent';
import Mainpage from './Components/Mainpage';
const urls =
 [
{
  year :  "2010-11",
  url  :  "https://raw.githubusercontent.com/openfootball/football.json/master/2010-11/en.1.json"
},
{
  year :  "2011-12",
  url  :  "https://raw.githubusercontent.com/openfootball/football.json/master/2011-12/en.1.json"
},
{
  year :  "2012-13",
  url  :  "https://raw.githubusercontent.com/openfootball/football.json/master/2012-13/en.1.json"
},
{
  year :  "2013-14",
  url  :  "https://raw.githubusercontent.com/openfootball/football.json/master/2013-14/en.1.json"
},
{
  year :  "2014-15",
  url  :  "https://raw.githubusercontent.com/openfootball/football.json/master/2014-15/en.1.json"
},
{
  year :  "2015-16",
  url  :  "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json"
},
{
  year :  "2016-17",
  url  :  "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json"
},
{
  year :  "2017-18",
  url  :  "https://raw.githubusercontent.com/openfootball/football.json/master/2017-18/en.1.json"
},
{
  year :  "2018-19",
  url  :  "https://raw.githubusercontent.com/openfootball/football.json/master/2018-19/en.1.json"
},
{
  year :  "2019-20",
  url  :  "https://raw.githubusercontent.com/openfootball/football.json/master/2019-20/en.1.json"
}
]

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <Mainpage />
      {console.log(urls)}
      
    </div>
  );
}

export default App;
