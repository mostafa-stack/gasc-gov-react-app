import styled from 'styled-components'
import { BsList } from "react-icons/bs";

export default styled(BsList)`
opacity:0;
@media (max-width:1150px){
position:fixed;
top:1rem;
right:1rem;
font-size:2rem;
font-weight:bold;
cursor: pointer;
opacity:1;
transform:rotate(${props=> props.toggle?'-180deg': '0deg'});
transition:all .3s linear;
}`