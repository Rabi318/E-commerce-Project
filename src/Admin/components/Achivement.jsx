import { Button, Card, CardContent, Typography, styled } from '@mui/material'
import React from 'react'


const TriangleImg = styled("img")({
  right:0,
  bottom:0,
  height:170,
  position:"absolute",
})

const TrophyImg = styled("img")({
  right:30,
  bottom:20,
  height:98,
  position:"absolute",
})

const Achivement = () => {
  return (
    <Card sx={{position:"relative", bgcolor:"#242B2E", color:"white"}}>
    <CardContent>
      <Typography variant='h6' sx={{letterSpacing:" .25px"}}>
        Easy Shopping
      </Typography>
      <Typography variant='body2'>Congratulations 🥳</Typography>
      <Typography variant='h5' sx={{my:3.1}}>500.00k</Typography>
      <Button size='small' variant='contained'>View sales</Button>
      <TriangleImg src=''></TriangleImg>
      <TrophyImg src='https://img.freepik.com/free-vector/golden-trophy-design_1355-4.jpg?size=626&ext=jpg&ga=GA1.1.257603148.1694112768&semt=ais'/>
    </CardContent>
  </Card>
  )
}

export default Achivement