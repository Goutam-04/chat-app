import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider
import { homeLight } from "../theme"; // Import your homeLight theme

function Home() {
  return (
    // <ThemeProvider theme={homeLight}> {/* Apply the homeLight theme */}
      <Grid container spacing={2} style={{ height: '90vh', backgroundColor:'#abd1c6', padding: '20px',paddingRight:'15vw',paddingLeft:'10vw' }}>
        
        <Grid item xs={12} md={4} style={{ display: 'flex', alignItems: 'center' }}>

          <Grid elevation={3} style={{ padding: '20px', height: '90%' }}>
            <Grid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <Typography variant="h6" align="flex-start" style={{color:'#001e1d',fontWeight: 'bold',fontSize:'36px',}}>Speak Freely</Typography>
              <Typography align="flex-start" style={{color:'#0f3433'}}>
                Say "hello" to a different messaging experience. An unexpected focus on privacy, combined with all of the features you expect.
              </Typography>
              <Button variant="contained" size='large' elevation='6' style={{ marginTop: '16px',backgroundColor:'#0f3433',color:'#abd1c6' }}>Message</Button>
            </Grid>
          </Grid>

        </Grid>
        
        {/* Image */}
        <Grid item xs={12} md={8}>
          <Grid elevation={0} style={{ backgroundImage: 'url("/2.png")', backgroundSize: 'cover', height: '150%' }}>
            
          </Grid>
        </Grid>
      </Grid>
    //  </ThemeProvider>
  );
}

export default Home;


