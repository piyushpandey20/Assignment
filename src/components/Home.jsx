import React from 'react';
import Banner from "../assets/asset 180.png";
import btn1 from "../assets/asset 8.png";
import btn2 from "../assets/asset 9.png";
import stars from "../assets/asset 18.png"
import navIcon from "../assets/asset 0.png"
import navIcon1 from "../assets/asset 1.png"
import navIcon2 from "../assets/asset 2.png"
import navIcon3 from "../assets/asset 3.png"
import navIcon4 from "../assets/asset 4.png"
import sectionh1 from "../assets/asset 19.png"
import sectionh2 from "../assets/asset 20.png"
import card1 from "../assets/asset 21.jpeg"
import card2 from "../assets/asset 26.jpeg"
import card3 from "../assets/asset 30.jpeg"
import card4 from "../assets/asset 34.png"
import card5 from "../assets/asset 38.jpeg"
import card6 from "../assets/asset 42.jpeg"
import card7 from "../assets/asset 45.jpeg"
import mentor from "../assets/asset 70.jpeg"
import mentors from "../assets/asset 71.png"
import {FaDownload,FaPodcast} from "react-icons/fa"

const Home = () => {
  return (
    <div>
        {/* navBar */}
        <div className='navBar w-full flex items-center justify-between '>
            <div className='flex items-center justify-center'>
                <img src={navIcon} className='w-[180px]' />
                <ul className='flex items-center justify-center gap-3'>
                    <li>
                        <img src={navIcon1} className='w-[30px]' />
                    </li>
                    <li>
                        Premium+
                    </li>
                    <li>
                        Blogs
                    </li>
                    <li className='flex items-center justify-center'>
                        <img src={navIcon2} />
                        <p>Podcast</p>
                    </li>
                </ul>
            </div>
            <div className='flex items-center justify-center gap-4 ml-20'>
                <img src={navIcon3} className='w-[30px]' />
                <img src={navIcon4} className='w-[30px]' />
                <button className=' bg-yellow-500 py-1 px-6 rounded-lg hover:shadow-lg'>Login</button>
                <button className=' bg-yellow-500 py-1 px-6 rounded-lg hover:shadow-lg'>Sign Up</button>
            </div>
        </div>

        {/* banner */}
        <div className='bannerBackground flex items-center justify-center'>
            <div className="w-11/12 lg:flex items-center justify-center lg:flex-nowrap md:flex-wrap mt-4">
                <div className='w-[40%] '>
                    <p className=" text-[3.5em] font-semibold">Turn Your Judiciary Dream Into Reality</p>
                    <p className='text-[1.3rem]'>Revolutionize Your Prelims + Mains + Interview Preparation in an Integrated Manner.</p>
                    <div className='bg-white flex justify-center my-4 items-center w-fit border-white rounded-md p-2 font-semibold hover:shadow-md hover:shadow-white hover:cursor-pointer'>
                        #1 Most Downloaded Judicial Services App
                    </div>
                    <div className='flex gap-6 w-[25%] hover:cursor-pointer'>
                        <img src={btn1} />
                        <img src={btn2} />
                    </div>        
                </div>
                <div>
                    <img src={Banner} />
                </div>
            </div>
        </div>

        {/* underBannerLine */}
        <div className='bg-black'>
            <div className='flex items-center justify-center w-11/12 text-white py-2'>
                <p>Why <span className='underline hover:cursor-pointer'>Edzorb Law App</span> is ❤ by Over 10,000+ Users.</p>
                <img src={stars} className='w-16' />
                <p className='underline hover:cursor-pointer'>Read Reviews</p>
            </div>
        </div>

        {/* sectionFeather */}
        <div className='flex items-center justify-center sectionhBackground bg-cover'>
            <img src={sectionh1} />
            <h1 className='text-[1.8em] font-bold leading-5 text-blue-700'>The Edzorb Law Difference</h1>
            <img src={sectionh2} />
        </div>

        {/* Card1  */}
        <div className='w-11/12 flex justify-center items-center hover:scale-110'>
            <div className='border-white mt-10 rounded-xl shadow-lg shadow-black w-10/12'>
                <div className='flex items-center justify-evenly my-4'>
                    <div className=''>
                        <img src={card1} className='w-60 rounded-lg' />
                    </div>
                    <div className='w-[40%]'>
                        <p className='text-[1.6em] font-semibold'>Prelims QBank with Explanations in Visual Learning Format</p>
                        <ul className='list-disc my-5'>
                            <li>High Yield Prelims Questions with Mains Explanations</li>
                            <li>Visual Learning Format, Stories, Animations</li>
                            <li>Precise, Qualitative & Effective with Proven Track Record Across Multiple Prelims Exams of Different States</li>
                            <li>Extensive Subject Wise Coverage of Questions</li>
                            <li>Goldmine for Your Success in Judiciary Exams</li>
                        </ul>
                        <button className=' btnColor text-white p-2 rounded-lg flex items-center justify-center gap-2 '>Download Free<FaDownload /></button>
                    </div>
                </div>
            </div>
        </div>
        {/* Card 2 */}
        <div className='w-11/12 flex justify-center items-center hover:scale-110'>
            <div className='border-white mt-10 rounded-xl shadow-lg shadow-black w-10/12'>
                <div className='flex items-center justify-evenly my-4'>
                    
                    <div className='w-[40%]'>
                        <p className='text-[1.6em] font-semibold'>Mains Test Series & Evaluation Like Never Before</p>
                        <ul className='list-disc my-5'>
                            <li>20 State Specific Mains Test Series with Detailed Evaluation</li>
                            <li>Personalized Guidance with Line to Line Feedback</li>
                            <li>Major Subjects, Criminal Law, Civil Law, Judgment Writing, Essay Writing, Translation, Precis Writing</li>
                            <li>Mains QBank in Q & A Format</li>
                            <li>Mains Oriented Notes, Case Law Notes</li>
                        </ul>
                        <button className=' btnColor text-white p-2 rounded-lg flex items-center justify-center gap-2'>Download Free <FaDownload /></button>
                    </div>
                    <div>
                        <img src={card2} className='w-60 rounded-lg' />
                    </div>
                </div>
            </div>
        </div>
        {/* Card 3 */}
        <div className='w-11/12 flex justify-center items-center hover:scale-110'>
            <div className='border-white mt-10 rounded-xl shadow-lg shadow-black w-10/12'>
                <div className='flex items-center justify-evenly my-4'>
                    <div>
                        <img src={card3} className='w-60 rounded-lg' />
                    </div>
                    <div className='w-[40%]'>
                        <p className='text-[1.6em] font-semibold'>Simplified Notes in Visual Learning Format</p>
                        <ul className='list-disc my-5'>
                            <li>Extensive Coverage of CrPC, CPC, IEA, Constitution etc.</li>
                            <li>Coverage of Minor Subjects – SOGA, TPA, Admin Law</li>
                            <li>Notes Inclusive of Case Laws & Recent Legal Updates</li>
                            <li>Exhaustive & Complete Section to Section Coverage</li>
                        </ul>
                        <button className=' btnColor text-white p-2 rounded-lg flex items-center justify-center gap-2'>Download Free <FaDownload /></button>
                    </div>
                </div>
            </div>
        </div>
        {/* Card 4 */}
        <div className='w-11/12 flex justify-center items-center hover:scale-110'>
            <div className='border-white mt-10 rounded-xl shadow-lg shadow-black w-10/12'>
                <div className='flex items-center justify-evenly my-4'>
                    
                    <div className='w-[40%]'>
                        <p className='text-[1.6em] font-semibold'>Bare Act Revolution</p>
                        <ul className='list-disc my-5'>
                            <li>Bare Act Revolution is a LUXURY, a Concept like NEVER BEFORE</li>
                            <li>Revolutionary Way to Understand Legal Concepts</li>
                            <li>Storyboard, Visual Illustrations, Interactive Learning</li>
                            <li>Nuanced Coverage of Important Legal Concepts</li>
                        </ul>
                        <button className=' btnColor text-white p-2 rounded-lg flex items-center justify-center gap-2'>Download Free <FaDownload /></button>
                    </div>
                    <div>
                        <img src={card4} className='w-60 rounded-lg' />
                    </div>
                </div>
            </div>
        </div>
        {/* Card 5 */}
        <div className='w-11/12 flex justify-center items-center hover:scale-110'>
            <div className='border-white mt-10 rounded-xl shadow-lg shadow-black w-10/12'>
                <div className='flex items-center justify-evenly my-4'>
                    <div>
                        <img src={card5} className='w-60 rounded-lg' />
                    </div>
                    <div className='w-[40%]'>
                        <p className='text-[1.6em] font-semibold'>General Knowledge & Current Affairs</p>
                        <ul className='list-disc my-5'>
                            <li>Holistic Coverage - History, Polity, Geography, Economics, Environment, Static GK & GS topics</li>
                            <li>Lucid, Visual Flashcards, Flow Charts</li>
                            <li>Complete Coverage of NCERT in Question Answer Format</li>
                            <li>Retainable & Fun to Learn</li>
                        </ul>
                        <button className=' btnColor text-white p-2 rounded-lg flex items-center justify-center gap-2'>Download Free <FaDownload /></button>
                    </div>
                </div>
            </div>
        </div>
        {/* Card 6 */}
        <div className='w-11/12 flex justify-center items-center hover:scale-110'>
            <div className='border-white mt-10 rounded-xl shadow-lg shadow-black w-10/12'>
                <div className='flex items-center justify-evenly my-4'>
                    
                    <div className='w-[40%]'>
                        <p className='text-[1.6em] font-semibold'>Flashcards - Case Laws, Legal Maxims, Legal Updates & One Liners</p>
                        <ul className='list-disc my-5'>
                            <li>Up to date Legal Updates with Summaries and Citations</li>
                            <li>Frequently Asked Case Laws from Past Year Question Papers</li>
                            <li>Well Structured Flashcards in Visual Learning Format</li>
                            <li>Easy to Revise & Keep You Exam Ready</li>
                        </ul>
                        <button className=' btnColor text-white p-2 rounded-lg flex items-center justify-center gap-2'>Download Free <FaDownload /></button>
                    </div>
                    <div>
                        <img src={card6} className='w-60 rounded-lg' />
                    </div>
                </div>
            </div>
        </div>
        {/* Card 7 */}
        <div className='w-11/12 flex justify-center items-center hover:scale-110'>
            <div className='border-white mt-10 rounded-xl shadow-lg shadow-black w-10/12'>
                <div className='flex items-center justify-evenly my-4'>
                    <div>
                        <img src={card7} className='w-60 rounded-lg' />
                    </div>
                    <div className='w-[40%]'>
                        <p className='text-[1.6em] font-semibold'>Best Doubt Support & Peer Guidance</p>
                        <ul className='list-disc my-5'>
                            <li>Personalized One to One Mentorship Session</li>
                            <li>Soulspeak Podcast to Help You Relief Stress & Anxiety</li>
                            <li>Right Content, Right Mindset & Right Guidances</li>
                            <li>Free Consultation Related to Judiciary Preparation</li>
                            <li>Edzorb Study Space to Increase Productivity</li>
                        </ul>
                        <button className=' btnColor text-white p-2 rounded-lg flex items-center justify-center gap-2'>Listen To Podcast<FaPodcast/></button>
                    </div>
                </div>
            </div>
        </div>
        {/* Mentorship  */}
        <div className='mentorBackground bg-cover'>
            <div className='w-11/12 flex items-center justify-evenly gap-10'>
                <div className='w-[40%] mt-10'>
                    <img src={mentor} className='scale-75 hover:scale-100' />
                </div>
                <div className='w-[50%]'>
                    <p className='font-semibold text-[1.5em] w-[60%]'>Are You Ready to Begin Your Judiciary Journey? Sign Up Now for Free Mentorship Session.</p>
                    <button className='btnColor text-white p-3 rounded-lg mt-10 mb-5'>Book Now Free MentorShip</button>
                    <div className='flex items-center '>
                        <img src={mentors} className=' h-10' />
                        <p className=' font-medium text-[1.2em]'>Joined by 10,000+ Students</p>
                    </div>
                    
                </div>
            </div>
            

        </div>
        
    </div>
  )
}

export default Home