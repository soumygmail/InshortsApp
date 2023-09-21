//import React from 'react'
import {AppBar, Toolbar, styled } from '@mui/material';
import { Menu } from '@mui/icons-material';

const StyledHeader = styled(AppBar)`
background: #fff;
height:70px;


`;

const Image = styled("img")({
      height: 40,
      margin:'auto'

})

const MenuIcon = styled(Menu)`
    color: #000;
`;
export default function Header() {

    const url = 'https://tse1.mm.bing.net/th?id=OIP.4Xa4b4cp7gzOjQ8BzjRJmwHaEL&pid=Api&P=0&h=180';
  return (
    <div>
   <StyledHeader position="fixed">
    <Toolbar>
     <MenuIcon />
     <Image src={url} alt="logo" />
      </Toolbar>
   </StyledHeader>
    </div>
  )
}
