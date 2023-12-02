import styled from "styled-components"
import { Vector } from "../Icons/icon"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

const VectorContainer=styled.div`
position:absolute;
top:0.5rem;
left:50%;
transform:translateX(-50%);
width:100%;
height:100%;
overflow:hidden;
svg{
width:100%;
height:100%;
}
`
function DrawSvg() {
    const ref=useRef(null)
  return (
<VectorContainer ref={ref}>
<Vector/>
</VectorContainer>
    )
}

export default DrawSvg
