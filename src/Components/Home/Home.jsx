import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

import { ThemeProvider } from '@mui/material/styles';
import { homeLight } from "../theme";

function Home() {
  return (
    
        <ThemeProvider theme={homeLight}> {/* Wrap your component with ThemeProvider */}
          <Grid container spacing={2} style={{ height: '90vh', backgroundColor: 'lightblue', padding: '20px' }}>
            {/* Content */}
            <Grid item xs={12} md={4} style={{ display: 'flex', alignItems: 'center' }}>
              <Paper elevation={3} style={{ padding: '20px', height: '90%' }}>
                <Grid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <Typography variant="h6" align="center">Speak Freely</Typography>
                  <Typography align="flex-start">
                    Say "hello" to a different messaging experience. An unexpected focus on privacy, combined with all of the features you expect.
                  </Typography>
                  <Button variant="contained" size='large' style={{ marginTop: '16px' }}>Message</Button>
                </Grid>
              </Paper>
            </Grid>
            
            {/* Image */}
            <Grid item xs={12} md={8}>
              <Paper elevation={0} style={{ backgroundImage: 'url("/path-to-your-image.jpg")', backgroundSize: 'cover', height: '100%' }}>
                {/* Empty Paper element with background image */}
              </Paper>
            </Grid>
          </Grid>
        </ThemeProvider>
  );
}

export default Home;


