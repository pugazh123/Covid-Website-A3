
import React from 'react'
import  './nav.css'


export const NavBar = () => {
  return (
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
    <img src="https://www.un.org/sites/un2.un.org/files/2020/04/covid-19.svg" width="30" height="30" alt=""></img>
      <a class="navbar-brand" href="/covid"><b>COVID-19</b></a>
      <a class="navbar-brand" href='/about'>About</a>
      <a class="navbar-brand" href="/blog">Blog</a>
      <a class="navbar-brand" href="/emergency">Emergency</a>
    </div>
   
    <ul class="nav navbar-nav navbar-right">
     
      <li><a href="/regis" class="navbar-brand">Register</a></li>
    </ul>
  </div>
</nav>
  )
}