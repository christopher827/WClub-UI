import { Link } from "react-router-dom"
import styled from "styled-components"

const Btn=styled.button`
display:inline-block;
background-color:${props=>props.theme.text};
color:${props=>props.theme.body};
outline:none;
border:none;
font-size:${props=>props.theme.fontsm};
padding:0.9rem 2.3rem;
border-radius:50px;
cursor:pointer;
transition:all 0.2s ease;
position:relative;
&:hover{
    transform:scale(0.9)
}
`
function Button({text,link}) {
  return (
<Btn>
<Link to={link} aria-label={text} >      <div className="inline-block">
        {text}
      </div></Link>
</Btn>
    )
}
export default Button