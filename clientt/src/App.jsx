//import { useState } from 'react'

import { Box, styled } from '@mui/material'
import Header from './components/Header'
import InfoHeader from './components/InfoHeader'
import './App.css'
import Articles from './components/Articles'

const Containers = styled(Box)`
 width:60%;
 margin:'50px auto 0 auto';
 padding-top:16px;
 margin-left:250px;
 padding:10px;
`

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
     <Box>
      <Header />
      <Containers>
      <InfoHeader />
      <Articles />
      </Containers>
     </Box>
     
    </>
  );
}

export default App
