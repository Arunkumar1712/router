import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export  function MultiActionAreaCard( {img,Title,Description,date,duration}) {
  return (
    
    <Card sx={{ maxWidth: 340 , maxHeight:500}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="110"
          image ={img}
          
          alt="course img"
          sx={{height:"200px"}}
          className='img'
        />
        <CardContent>
          <Typography  variant="h5" component="div" sx={{textAlign:"left"}} >
           {Title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{textAlign:"left"}}>
            {Description}
          </Typography>
        
        <CardActions>
        <Button size="small" color="success" style={{fontWeight:"bold",fontSize:"14px",marginLeft:"-10px" }}>
          Read more
        </Button>
      </CardActions>
      
      <Typography className='footercard'>
      <p style={{fontSize:"15px",fontWeight:"100px"}}>{date}</p>
      <p>{duration}</p>
      </Typography></CardContent>
      </CardActionArea>
     
    </Card>
  );
}