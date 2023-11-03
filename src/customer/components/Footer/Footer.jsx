import React from 'react'
import { Grid, Typography, Button, Link } from "@mui/material";


export default function
    () {
    return (
        <div>
            <Grid className='bg-black text-white text-center mt-10'
                container
                sx={{ bgcolor: "black", color: "white", py: 3 }} >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Company</Typography>

                    <div>
                        <Button className='pb-5' variant='h6'>About</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h6'>Blog</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h6'>Press</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h6'>Jobs</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h6'>Partners</Button>
                    </div>


                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Help</Typography>

                    <div>
                        <Button className='pb-5' variant='h6'>Payments</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h6'>Shipping</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h6'>Cancellaiton & Returns</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h6'>FAQ</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h6'>Report Infrigment</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Consumer policy</Typography>

                    <div>
                        <Button className='pb-5' variant='h6'>Terms & Use</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h6'>Privacy</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h6'>sitemap</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h6'>erp compliance</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h6'>Cancellation & Return</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Social</Typography>

                    <div>
                        <Button className='pb-5' variant='h6'>YoutTube</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h6'>Facebook</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h6'>Instagram</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h6'>Twitter</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h6'>Snapchart</Button>
                    </div>


                </Grid>
                <Grid className='pt-20' item xs={12}>
                    <Typography variant='body2' component="p" align='center'>
                        &copy; 2023 My company. All rights reserves.
                    </Typography>
                    <Typography variant='body2' component="p" align='center'>
                        Made with love by our Team.
                    </Typography>
                    <Typography variant='body2' component="p" align='center'>
                        Icons made by{' '}
                        <Link href="https://www.freepik.com" color="inherit" underline='always'>Freepik
                        </Link>{' '}
                        from{' '}
                        <Link href="https://www.flaticon.com/" color="inherit" underline='always'>
                            www.flaticon.com
                        </Link>
                    </Typography>

                </Grid>
            </Grid>


        </div>
    );
};

