import styled from 'styled-components'
import Banner from '../Banner'
import Logo from "../Logo"
import {Facebook,Instagram,Twitter,LinkedIn} from "../../Icons/icon"

const Section=styled.section`
min-height:100vh;
width:100vw;
background-color:${props=>props.theme.body};
position:relative;
color:${(props)=>props.theme.text};
display :flex;
flex-direction:column;
`

const Container=styled.div`
width:75%;
margin:2rem auto;
display:flex;
justify-content:space-between;
border-bottom:1px solid ${(props)=>props.theme.text};
@media(max-width:48em){
width:90%;
h1{
  font-family:'Akaya Telivigala',cursive;

}
}
`
const Left=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media(max-width:48em){
  width:100%;
  }
  
`
const IconList=styled.div`
display:flex;
align-items:center;
margin:1rem auto;
&>*{
padding-right:0.5rem;
transition:all 0.2s ease;

&:hover{
transform:scale(1.2)
}
}
`
const MenuItems=styled.ul`
list-style:none;
width:50%;
display:grid;
grid-template-columns:repeat(2,1fr);
grid-template-rows:repeat(3,1fr);
grid-gap:1rem;
@media(max-width:48em){
display:none;
  }
  
`
const Item=styled.li`
width:fit-content;
cursor:pointer;
&::after{
  content:' ';
  display:block;
  width:0%;
  height:2px;
  background-color:${(props)=>props.theme.text};
  transition:width 0.3s ease;
  }
  &:hover::after{
      width:100%
  }
  
`
const Bottom=styled.div`
width:75%;
margin:0 auto;
display:flex;
justify-content:space-between;
align-items:center;
a{
text-decoration:underline;
}
@media(max-width:48em){
flex-direction:column;
width:100%;
span{
margin-bottom:1rem ;
}
}
  
`
function Footer() {
  return (
<Section>
<Banner/>
<Container>
<Left>
<Logo/>
<IconList>
<a href='http://github.com' target='_blank' rel='noopener noreferrer'>
<Facebook/>
</a>
<a href='http://github.com' target='_blank'rel='noopener noreferrer'>
<Instagram/>
</a>
<a href='http://github.com' target='_blank' rel='noopener noreferrer'>
<Twitter/>
</a>
<a href='http://github.com' target='_blank' rel='noopener noreferrer'>
<LinkedIn/>
</a>

</IconList>
</Left>
<MenuItems>
<Item>Solutions</Item>
<Item>Marketing</Item>
<Item>Analytics</Item>
<Item>Partners</Item>
<Item>Insights</Item>
<Item>API Status</Item>

</MenuItems>
</Container>
<Bottom>
<span>&copy; {new Date().getFullYear()} The W Club. All right reserved </span>
<span>Made with &#10084; by <a href="http://github.com" target='_blank' rel='noopener noreferrer'>
  Chris
  </a></span>
</Bottom>
</Section>
    )
}
export default Footer