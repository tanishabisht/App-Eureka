import './home.css'
import svgImg1 from "../../Images/collaboration.svg"
import svgImg2 from "../../Images/time.svg"
import svgImg3 from "../../Images/thinking.svg"
import svgImg4 from "../../Images/404.svg"

const Home = () => {
    return (
        <div className='container-fluid container_main'>

            <div className="container_main container">
                <div className="row new">
                    <div className="col New">
                        <h3>WHAT IS IT</h3>
                        <p>They are innovation competitions where people come together to solve challenges.<br/><br/>
                        Generally speaking hackathons are over a weekend and it's rapid development of a solution into a prototype minimum ba product something tangible to show the judges and then the judges decide which project won.</p>
                    </div>
                    <div className="col New">
                        <img src={svgImg1} alt="..." className="image"></img>
                    </div>
                </div>

                <div className="row new">
                    <div className="col New">
                        <img src={svgImg2} alt="..." className="image"></img>
                    </div>
                    <div className="col New">
                        <h3>WHEN DOES IT HAPPEN</h3>
                        <p>They typically take place over a course of a weekend,<br/> but it can run either shorter or longer and can be any time of the weeks.</p>
                    </div>
                </div>

                <div className="row new">
                    <div className="col New">
                        <h3>WHY ENTER</h3>
                        <p>Networking<br/>
                        Mentors are looking for potential talent and offer Competetive person and think quickly on your feet</p>
                    </div>
                    <div className="col New">
                        <img src={svgImg3} alt="..." className="image"></img> 
                    </div>
                </div>

                <div className="row new">
                    <div className="col New">
                        <h3>WHAT ARE WE EXPECTED TO DO<br/>DURING A HACKATHON</h3><br/>
                    </div> 
                </div>

                <div className="row new">
                    <div className="col New">
                        <p>1.Typically a topic area for that hackathon the organizers of the hackathon will also typically give you a set of tools that you can use often you're not obligated in any sense to use them sometimes they have as a criteria that you should use</p>
                        <br/><p>2. Start mingling, netwoking and chatting with each other ...  things that they're interested, personal skill sets<br/>
                        NOTE: you want to have a good complement of skills represented on your team so that you can effectively divide the work and collaborate
                        all the while copious amounts of caffeine are consumed because let's face it half the team stay up straight through the night and don't sleep at all and can't be healthy. </p>
                    </div>
                    <div className="col New">
                        <p>3. Everybody breaks into teams<br/>4. they start building they start hacking and working on their things and just really getting down to it<br/>5. often experts will come through as mentors</p>
                        <br/><p>6. the team's demo what they've built in front of their peers as well as a panel of judges seventh winners are selected and awards are distributed</p>
                    </div>
                </div>

                <div className="row new">
                    <div className="col New">
                    <h3>ESSENCE OF HAKATHON</h3>
                        <p>Hackathons are about learning they're about education they're about community and meeting new people hanging out and seeing what others are up to and just creatively being a part of the community they're about fun</p>
                    </div>
                    <div className="col New">
                        <h3>ORIGIN OF NEW START UPS!</h3>
                        <p>Every now and then projects created at a hackathon will bloom into full-blown startups and be taken on as full-time jobs by the people that created this project.</p>
                    </div>
                </div>

                <div className="row new">
                    <div className="col New">
                        <img src={svgImg4} alt="..." className="image"></img>
                    </div>
                    <div className="col New">
                    <h3>COMMON MISCONCEPTION</h3>
                        <p>Hackathons are exclusively software events not so hackathons can be Hardware events so building physical products or they can be events where you developed develop processes and workflows so ...  so as long as you're doing something that's gonna solve the end problem godspeed you know just go ahead and do it so it doesn't necessarily have to be software let's look at a specific</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home