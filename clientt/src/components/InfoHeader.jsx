import React from 'react'
import { Box}  from '@mui/material';
import { Typography, styled} from '@mui/material'

const Container = styled(Box)`
    background: #f44336;
    color:#ffffff;
    display:flex;
    align-items:center;
    justify-content:center;
    height: 78px;
    margin-bottom:30px;
    margin-top:80px
  
    
    
    
    
 
 `;

const Image = styled("img")({
    height: 25,
   
   
    'R-last-child':{
      margin: '5px'
    }
})

const Text = styled(Typography)`
  font-size: 14px;
  font-weight:bold;
  margin:5px;
  padding:10px;
 
`;






const InfoHeader = () => {

  const appleStore = "https://tse1.mm.bing.net/th?id=OIP.cZAnQX_39-S3rs0Z6VkdJgAAAA&pid=Api&P=0&h=180";
  const googleStore = "https://tse1.mm.bing.net/th?id=OIP.fn_qr7uzdYZfa8zVcFbNYgHaCj&pid=Api&rs=1&c=1&qlt=95&w=312&h=107";
  return (
    <Container>
      <Text>
        for the best experience use inshorts app on smartphone

      </Text>
      <Box style={{display: "flex", height:"8vh"}}>
        <Image src={appleStore} alt="applestore" />
        <Image src={googleStore} alt="googles" /> 
      </Box>
    </Container>
  )
}

export default InfoHeader
