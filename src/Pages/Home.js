import Navigation from "../components/Navigation"
import Hero from "../components/sections/Hero"
import Team from "../components/sections/Team"
import Faq from "../components/sections/Faq"
import About from "../components/sections/About"
import Contact from "../components/sections/Contact"
import Footer from "../components/sections/Footer"
import Navbar from "../components/Navbar"

function Home() {
    return(
        <>
<Navigation/>
{/* <Navbar/> */}
 <Hero/>
<About/>
<Team/>
<Contact/>
<Faq/>
<Footer/>
        </>
    )
}
export default Home