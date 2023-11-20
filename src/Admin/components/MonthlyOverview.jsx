import { AccountCircleOutlined, TrendingUp } from '@mui/icons-material'
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import React from 'react'

const salesData = [
  {
    stats:'250k',
    title:"Sales",
    color:"primary",
    icon:<TrendingUp sx={{fontSize:"1.75rem"}}/>
  },
  {
    stats:'155k',
    title:"Customers",
    color:"success",
    icon:<AccountCircleOutlined sx={{fontSize:"1.75rem"}}/>
  },
  {
    stats:'3.58k',
    title:"Products",
    color:"warning",
    icon:<DevicesOutlinedIcon sx={{fontSize:"1.75rem"}}/>
  },
  {
    stats:'367k',
    title:"Revenue",
    color:"info",
    icon:<PaidOutlinedIcon sx={{fontSize:"1.75rem"}}/>
  },
]

const renderStats = () => {
  return salesData.map((item, index) => (
    <Grid item xs={12} sm={3} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          variant='rounded'
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: 'common.white',
            backgroundColor: `${item.color}.main`
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='caption'>{item.title}</Typography>
          <Typography variant='h6'>{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}


const MonthlyOverview = () => {
  return (
    <div>
      <Card sx={{bgcolor:"#242B2E", color:"white"}}>
        <CardHeader title="Monthly Overview" action={
          <IconButton size='small'>
            <MoreVertOutlinedIcon/>
          </IconButton>
        }
        subheader={
          <Typography variant='body2'>
            <Box component="span" sx={{fontWeight:600, mx:1}}>
              Total 51.4% growth
            </Box>
            🥂 in this month

          </Typography>
        }
        titleTypographyProps={{
          sx:{
            mb:2.5,
            lineHeight:"2rem !important",
            letterSpacing:'.15px !important'
          }
        }}
        />
        <CardContent sx={{pt:theme=>`${theme.spacing(3)} !important`}}>
          <Grid container spacing={[5,0]}>
            {renderStats()}

          </Grid>

        </CardContent>

       
      </Card>

    </div>
  )
}

export default MonthlyOverview