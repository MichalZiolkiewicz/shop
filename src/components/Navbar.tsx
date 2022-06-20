import React from 'react'
//@ts-ignore
import styled from "styled-components";

const Element = styled('a')`
  list-style: none;
  text-decoration: none;
  color: hsl(219, 9%, 45%);
  width: 100%;
  padding: 30px 15px;
  height: 100%;
  box-sizing: border-box;
  border-bottom: 4px solid transparent;


  &:hover{
    border-bottom: 4px solid hsl(26, 100%, 55%);
  }
`

const ListWrapper = styled('ul')`
  margin-left: 50px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`


const menuElements = [
    {name: 'Collections', path: '#'},
    {name: 'Men', path: '#'},
    {name: 'Women', path: '#'},
    {name: 'About', path: '#'},
    {name: 'Contact', path: '#  '},
]

const Navbar = () => {
    return (
        <nav>
            <ListWrapper>
                {menuElements.map(item => (
                    <Element href={item.path} key={item.name}><li>{item.name}</li></Element>
                ))}
            </ListWrapper>
        </nav>
    )
}

export default Navbar;
