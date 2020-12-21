import React from 'react'
import ReactDOM from 'react-dom'
//import Header from './components/Header'
//import Main from './components/Main'
//import Footer from './components/Footer'
import './index.css'
import{BrowserRouter,Route,Link} from "react-router-dom"
import Photo1 from './photo1'



function Header(){
const headline='Home exercises'
return (
<div id= 'header1'>
<h1>{headline}</h1>
</div>
	)

}
<hr/>

function Footer(){

return (
<div>
<hr/>
    

<div id='footer1'>

  <h2><a href="https://mail.google.com">Sport@gmail.com</a></h2>
    <h2><a href="">tell:123456789</a></h2>

</div>   
<br/><br/>

</div>
	)

}

function Main(){


const id='201710165'
const FirstName='Alaa'
const lastName='Etoom'
const photourl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfq3rtdAgDYt30_dXmGpMrH1zbUy5YyKvOng&usqp=CAU.jpg"                                                                           
const photour2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMJpACkKMKhZ-vzS6jKpnE5WXilrxak0P4qQ&usqp=CAU.jpg"
const photour3="https://static.thenounproject.com/png/2150525-200.png"
const photour4="https://p14cdn4static.sharpschool.com/UserFiles/Servers/Server_697798/Image/Departments/Student%20Services/Athletics-sports-images-banner-color.fw.png"


return (

<div> 


      <br/><br/><br/>
 
 <img src={photour4}width='1600px' height='250'/>
      <br/><br/><br/><br/>
      <div id='pargraph1'>

     
    <i> Sport includes all forms of competitive physical activity or games which,
    through casual or organized participation, at least in part aim to use, 
    maintain or improve physical ability and skills while providing enjoyment to participants,
     and in some cases, entertainment for spectators. 

        </i> 
      
</div>
      <br/><br/><br/><br/><br/>      <br/><br/>
      <br/><br/>

<div className='photo'>
<BrowserRouter>
 <div id='photo10'>
<br/><br/>
 <Link to ='/Photo1'>
 <img src={photourl}width='500px'/></Link>
 <h1>Daily sport</h1>
</div>
<div id ='photo11'>
 <Link to='/Photo1'>                                                                                                                                                   
 <img src={photour2}width='500px'/> </Link>

 <h1>Calculate calories</h1>
</div>
<div id='photo12'>
 <Link to='/Photo1'>                                                                                                                                          
<img src={photour3}width='500px'/>
</Link>
 <h1>calendar</h1>

</div> 
<Route path="/Photo1" exact component={Photo1}/>                                                                                                          
</BrowserRouter> 
</div>

<br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/>

</div>
	)

}
<hr/>

ReactDOM.render(
   <div>
     <Header/>
     <Main/>
     <Footer/>
      
         </div>,
    document.getElementById('root'));





    