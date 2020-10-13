import styled from 'styled-components'

export const NavWrapper = styled.nav`
width:20%;
position:fixed;
top:0;
right:0;
bottom:0;
    direction:rtl;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items: center;
    border-left:1px solid #222;
    transition:all .5s ease-in-out;
img{
    display:block;
    
}
ul{
    list-style-type:none;
    width:100%;
    height:75%;
    display:flex;
    justify-content:space-around;
    flex-direction:column;
    li a{
        font-size:1.5rem;
        color:#000;
        text-decoration:none;
        font-weight:bold;
    }
};
@media (max-width:1150px){
    right:${props => props.toggle? '0':'-20%' };
    opacity:${props => props.toggle? '1':'0' };
    transition:all .5s linear;
}
`