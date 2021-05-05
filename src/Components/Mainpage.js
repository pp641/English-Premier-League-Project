import React from 'react'
import Data1 from './Yearwiserecord/2010-11'
import Data2 from './Yearwiserecord/2011-12'
import Data3 from './Yearwiserecord/2012-13'
import Data4 from './Yearwiserecord/2013-14'
import Data5 from './Yearwiserecord/2014-15'
import Data6 from './Yearwiserecord/2015-16'
import Data7 from './Yearwiserecord/2016-17'
import Data8 from './Yearwiserecord/2017-18'
import Data9 from './Yearwiserecord/2018-19'
import Data10 from './Yearwiserecord/2019-20'
import {BrowserRouter as Router,Switch,Route,Link  } from 'react-router-dom'
import {Navbar, Nav } from 'react-bootstrap'


const Year = () =>        
<Navbar  fixed="top" bg="dark" variant="dark">
    <Nav className="mr-auto ">
        <Link className = "mx-4" to = "/2010-11"> 2010-11</Link>
        <Link  className = "mx-4" to = "/2011-12"> 2011-12</Link>

        <Link className = "mx-4" to = "/2012-13"> 2012-13</Link>

        <Link className = "mx-4" to = "/2013-14"> 2013-14</Link>
        <Link className = "mx-4" to = "/2014-15"> 2014-15</Link>
        <Link className = "mx-4" to = "/2015-16"> 2015-16</Link>
        <Link className = "mx-4" to = "/2016-17">2016-17</Link>
        <Link className = "mx-4" to = "/2017-18"> 2017-18</Link>
        <Link className = "mx-4" to = "/2018-19">2018-19</Link>
        <Link className = "mx-4" to = "/2019-20"> 2019-20</Link>


    </Nav>
    </Navbar>

                
function Mainpage() {
    return (
            <Router> 
                <Year/>
                <Switch>
                <Route  exact path="/2010-11" component = {Data1}/>
                <Route  exact path="/2011-12"  component ={Data2}/>
                <Route path="/2012-13" exact component = {Data3}/>
                <Route path="/2013-14" exact component = {Data4}/>
                <Route path="/2014-15" exact component = {Data5}/>
                <Route path="/2015-16" exact component = {Data6}/>
                <Route path="/2016-17" exact component = {Data7}/>
                <Route path="/2017-18" exact component = {Data8}/>
                <Route path="/2018-19" exact component = {Data9}/>     
                <Route path="/2019-20" exact component = {Data10}/>

                </Switch>
            </Router>
    )
}

export default Mainpage
