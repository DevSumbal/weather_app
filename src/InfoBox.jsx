import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import './InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}){
    const INIT_URL="https://plus.unsplash.com/premium_photo-1733317236155-b0e1a2930f37?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; //initial image url for the card
    const HOT_URL="https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1612119276551-be9efb8ea36a?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1518803194621-27188ba362c9?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return(
    <div className="InfoBox">
        
        <div className="cardContainer">
        <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL :COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {info.city}
            {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon/>  :<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temprature={info.temp}°C</p>
          <p>Humidity={info.humidity}°C</p>
             <p>Min Temp={info.tempMin}°C</p>
               <p>Max Temp={info.tempMax}°C</p>
                <p> The Weather can describe as {info.weather} and Feels Like={info.feelsLike}°C</p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
    </div>
  )
}