import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Signup } from '../../Components/Signup/Signup';
import './LandingPage.css';

export class LandingPage extends Component {
    render() {
        return (
            <div>
                <header>
                    {/* <NavLink to="/signup"><button>Sign Up</button></NavLink>
                    <NavLink to="/login"><button>Login</button></NavLink> */}
                </header>
                <div id="grid-container">
                    {/* Hero Section containing two buttons */}

                    <div id="grid-item1">

                        <div id="grid-item1-1">
                            <p className="herotitle">Hilbo Habbins</p>
                            <NavLink to="/signup"><button id="signbtn">Sign Up</button></NavLink>
                            <br/>
                            <NavLink to="/login"><button id="logbtn">Login</button></NavLink>
                        </div>

                         <div id="grid-item1-2">
                            {/* <img src="https://static.dribbble.com/users/486498/screenshots/4953685/landingpage-.jpg" /> */}
                        </div>

                    </div>




                    {/* How it works section containing instructions */}
                    <div id="grid-itemx">
                      <p className="sectiontitle">How it works</p>

                    </div>
                    <div id="grid-item2">

                        <div id="sub1">
                            <img className="subImage" src="https://i.imgur.com/dd8NfDs.png"/>
                             <p className="subTitle">1. Add your Habits </p>
                             <p className="subText" > Set up your Habits to your list to create your daily routines and start your progress</p>
                        </div>
                        <div id="sub2">
                             <img className="subImage"   src="https://i.imgur.com/6FoOo5E.png"/>
                              <p className="subTitle">2. See your daily Habits </p>
                             <p className="subText" >Stay on-track with your habits by viewing your habits for the day.</p>

                        </div>  
                        <div id="sub3">
                              <img className="subImage" src="https://i.imgur.com/V4HnIXF.png"/>
                              <p className="subTitle">3. See your Progress</p>
                             <p className="subText" >View your progress on your habits by checking in with your current habit streak.</p>

                        </div>  

                    </div>

                    {/* Why it works section with statistics */}
                    <div id="grid-item3">
                        <p className="sectiontitle">Why it works</p>
                        <p id="sub-Text3">Habit tracking provides visual proof of your hard work—a subtle reminder of how far you've come. Plus, the empty square you see each morning can motivate you to get started because you don't want to lose your progress by breaking your streak.</p>

                    </div>

                    {/* Testimonials/reviews section with cards */}
                    {/* <p className="sectiontitle">Reviews</p> */}
                    <div id="grid-item4">

                        <div id="sub1">
                            <img className="stars" src="https://uploads-ssl.webflow.com/5d3aa39f8474c472841a7dfc/5eb90f1a4d5e4b369fc400b7_customer-review-five-star%402x.png" />
                             <p className="quoteTitle">"It's so quick and easy to use. Highly personable and perfect for anything you want to track." </p>
                             <p className="subText">Yassine</p>
                        </div>
                        <div id="sub2">
                            <img className="stars" src="https://uploads-ssl.webflow.com/5d3aa39f8474c472841a7dfc/5eb90f1a4d5e4b369fc400b7_customer-review-five-star%402x.png" />
                              <p className="quoteTitle">"I have tried them all, finally something that is worth it. User friendly, nice dashboards, hitting all my habits!" </p>
                             <p className="subText" >Cindy</p>

                        </div>  
                        <div id="sub3">
                              <img className="stars" src="https://uploads-ssl.webflow.com/5d3aa39f8474c472841a7dfc/5eb90f1a4d5e4b369fc400b7_customer-review-five-star%402x.png" />
                              <p className="quoteTitle">"Very good for starting small. I remember downloading a similar app without a limit and I was very quickly overwhelmed by the number of goals I set for myself."</p>
                             <p className="subText" >Bob</p>

                        </div>  
                    </div>

                    <div id="grid-item5">
                        <Signup />
                    </div>

                    {/* Footer with contact information */}
                    <div id="grid-item6">
                          <p> 
                            Hero Image &copy; <a href="https://dribbble.com/shots/4953685-Schedule-chat-organize">Cami, Dribble</a> |      
                            Sub Images &copy; <a href="https://www.uistore.design/items/free-remote-work-illustrations/?ref=lapaninja">Oblik Studio, uistore</a>
                          </p>
                          {/* <p> </p> */}
                    </div>

                </div> 
                {/* End of Grid container */}
        </div>
        )
    }
}

export default LandingPage;
