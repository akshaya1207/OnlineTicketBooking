import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import i1 from './Assets/i1.png';
import i2 from './Assets/i2.jpg';
import i3 from './Assets/i3.jpg';
import i6 from './Assets/i6.jpg';
import i5 from './Assets/i5.jpg';
import i7 from './Assets/i7.jpg';
import i4 from './Assets/i4.jpg';
import i8 from './Assets/i8.jpg';
import './Home.css';

export default function Home() {
  return (
    <div>
    <div className="m">
    <div className='m1'>
    <Card sx={{ maxWidth:250 }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="100"
         image={i1}
         style={{height:"170px",width:"200px"}}

          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize:"20px"}}>
         Leo
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{paddingBottom:"1px"}}>
           Action/Crime ‧ 2h 44m
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    
    <div className="m2">
    <Card sx={{ maxWidth: 200   }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="168"
         image={i2}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize:"20px"}}>
            The Moon
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{paddingTop:"1px"}}>
           Sci-fi/Adventure ‧ 2h 9m
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
   
   </div>
   <div className="m3">
    <Card sx={{ maxWidth: 200   }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="168"
         image={i3}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize:"20px"}}>
             Miss Rawther
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{paddingBottom:"1px"}}>
           Musical/Comedy ‧ 2h 6m
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     </div>
   
    <div className="m4">
    <Card sx={{ maxWidth: 200   }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="170"
          image={i5}
         />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize:"20px"}}>
            Sister Death
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Horror/Mystery ‧ 1h 31m
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>
    <div className="n1">
    <div className="m5">
    <Card sx={{ maxWidth: 200   }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="150"
          image={i8} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize:"20px"}}>
            Wish
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{paddingBottom:"1px"}}>
           Fantasy/Musical ‧ 1h 35m
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    
    <div className="m6">
    <Card sx={{ maxWidth: 200   }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="150"
          image={i6}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize:"20px"}}>
            Witcher
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{paddingBottom:"1px"}}>
          Action/Fantasy/Mystery ‧ 1h 31m
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
   
   
    <div className="m7">
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="150"
          image={i4}
         />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize:"20px"}}>
            Chicken Run
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{paddingBottom:"1px"}}>
          Comedy/Adventure ‧ 1h 41m
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
   
    <div className="m8">
    <Card sx={{ maxWidth: 200   }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="150"
          image={i7}
         />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize:"20px"}}>
          Jigarthanda 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Action/Comedy ‧ 2h 52m
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>
    </div>
  );
}
