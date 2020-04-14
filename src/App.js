import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // for( var i = 0; i<10; i++){
  //   console.log(i);
  // }

  // var name = "Kshitij";
  // var funcNameSexiness= () => {if (name=="Kshitij"){
  //   console.log("Sexy name")
  // }
  // else{
  //   console.log("Not a sexy name")
  // }}
  
  // var myList = ["Kshitij", "Sanidhya"];
  // var myMap = myList.map(
  //   (name) => {
  //     console.log({name});
  //     console.log("Hi I am here finally");
  //     return <p className="classNameLOL"> hi {name} </p>
  //   }
  // )


  // var buttonCLickLOL = () => {
  //   console.log("This is the funtion for button lcick");
  // }

  // var inputFunc = (event) => {
  //   console.log(event.target.value);
  // }
  return (
    <div className="App">
        <head>
          <title>Kshitij Personal website</title>
          <link rel="stylesheet" href="styles.css" />
        </head>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <img src={require("/Users/kshitijjain/Desktop/Dartmouth Classes/DALI Web Dev Course/myappwebsite/src/myimages/Android.png")} alt="Dahell Is the foto"/> */}

{/* {myMap}
{funcNameSexiness} */}
<div class="profile">
  <table width="100%">
    <tr>
      <td width="50%"><h2>Hi!</h2>
        <p>It's Kshitij here</p>
        <p>This is the place which will soon be my anime review and travel blog.</p>
        <p>In the meantime, here is a little preview of the things I am interested in.</p>
      </td>
      <td width="50%">
        {/* <img src={require("/Users/kshitijjain/Desktop/Dartmouth Classes/DALI Web Dev Course/myappwebsite/src/myimages/Berk.png")} alt="Should have image here" class="circlepic" /> */}
        <img src={require("./Berk.png")} alt="Should have image here" class="circlepic" />
      </td>
    </tr>
  </table>
</div>

{/* <button onClick={buttonCLickLOL}>Kshitij</button>
<input type="text" onChange={inputFunc} /> */}
<div class="skills">

<h2>My Skills</h2>
<table class="has3">
<tr>
  <td class="tdhas3"><div class="skill-row">
    <h3>Website Development</h3>
    <p>Intermediate level web develpoper with basic knowledge of HTML and CSS</p>
  </div>
  </td>
  <td class="tdhas3"><div class="skill-row">
    <h3>Android Studio</h3>
    <p>Intermediate level programmer in Android Studio. Plan to learn Swift to migrate sills to iOS development.</p>
  </div>
  </td>
  <td class="tdhas3"><div class="skill-row">
    <h3>Python and JAVA</h3>
    <p>Academic experience with Python and object oriented programming JAVA </p>
  </div>
  </td>
</tr>
<tr>
  <td class="tdhas3">
    <img src={require("./myimages/Webdevcode.png")} class="skillimg" alt="" />
  </td>
  <td class="tdhas3">
    <img src={require("/Users/kshitijjain/Desktop/Dartmouth Classes/DALI Web Dev Course/myappwebsite/src/myimages/Android.png")} class="skillimg" alt="" />
  </td>
  <td class="tdhas3">
    <img src={require("/Users/kshitijjain/Desktop/Dartmouth Classes/DALI Web Dev Course/myappwebsite/src/myimages/javacode.png")} class="skillimg" alt="" />
  </td>
</tr>
</table>
</div>


<hr />
<hr />
<hr />
<br />

<h2>Very weird skills but anyway..</h2>
<div class="Weirdskills">
<table class="has2">
<tr>
  <td class="tdhas2"><div class="skill-row">
    <h3>Being horrendous at frisbee</h3>
    <p>Ultimate Frisbee: The national sport of the nation of Dartmouth. I suck at it.
      It is throwing a disk, just throwing a disk. I cannot throw a disk</p>
  </div>
  </td>
  <td class="tdhas2"><div class="skill-row">
    <h3>Binging anime for days</h3>
    <p>Shingeki no kyojin(Attack on titan), Naruto Shippuden, Boku no hero acadeica, Shokugeki no souma(Food wars), Code Geass; Talk to me about each and any anime you have watched.</p>
  </div>
  </td>
</tr>
<tr>
  <td class="tdhas2">
    <img src={require("/Users/kshitijjain/Desktop/Dartmouth Classes/DALI Web Dev Course/myappwebsite/src/myimages/frisbee.jpg")} class="skillimg" alt="" />
  </td>
  <td class="tdhas2">
    <img src={require("/Users/kshitijjain/Desktop/Dartmouth Classes/DALI Web Dev Course/myappwebsite/src/myimages/AOT.jpg")} class="skillimg" alt="" />
  </td>
</tr>
</table>
</div>


<hr />
<hr />

<div class="contact-me">
  <h2>Hey! Get In Touch</h2>
  <h4>Found any bugs, got any suggestions on how I can make this website better or maybe just some anime recommendations then</h4>
  <h3 > Hit me up</h3>
  <p>Click below to send me an email</p>
  <p>Also check out  my facebook and LinkedIn</p>
  <a class="btn" href="mailto:jkshitij77@gmail.com">Email me</a>
  <br />
  <a class="footer-link" href="https://www.linkedin.com/in/kshitij-jain-1a57b5165">LinkedIn</a>
  <a class="footer-link" href="https://www.facebook.com/kshitij.jain.359">Facebook</a>
</div>

<p>Kshitij Jain, 2020</p>

    </div>
  );
}

export default App;
