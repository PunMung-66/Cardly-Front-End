import { styled } from '@mui/material/styles';
import { Box,Card} from '@mui/material';


export const GrowingCard = styled(Card)(({ theme }) => ({
    maxWidth: 345,
    margin: 23,
    borderRadius: 30,
    height:"410px",
    width:'320px',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',  // Increases size by 5% on hover
      boxShadow: theme.shadows[10]  // Optional: adds more shadow on hover
      
    }
  }));

  export const CardHeader = styled(Box)({
    background: 'none', // Ensures no background
    color: 'black',
    padding: '18px 20px',
    fontWeight: 'bold',
    fontSize: '27px',
    textAlign: 'center',
  
  
  
    
  });