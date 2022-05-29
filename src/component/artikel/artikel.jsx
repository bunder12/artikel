import React from 'react'
import { Card, CardContent, Grid, Typography, CardMedia } from '@material-ui/core';
import Nft from '../../assets/nft.png'
import useStyles from './styled';

const Artikel = () => {

    const classes = useStyles();

  return (
    // <div className={classes.container}>
        <Grid className={classes.container} container justify='center' spacing={10}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card>
                <CardMedia className={classes.media} 
                image="https://blog.pintu.co.id/wp-content/uploads/2021/09/nft-marketplace-1024x683.jpg" 
                title="nft"/>
                    <CardContent className={classes.cardContent}>
                        <Typography style={{fontWeight: 'bold', cursor: 'pointer', marginBottom: '10px', color: '#F9FAFB'}} variant='h5'>Tips dan Trik Minting NFT</Typography>
                        <Typography style={{color: '#F9FAFB'}} variant='subtitle'>
                            Minting NFT adalah proses pembuatan asset digital NFT yang dimana prosesnya akan dimasukan kedalam blockchain.
                            Blockchain sendiri merupakan wadah atau tempat untuk mencetak asset digital tersebut.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card>
                <CardMedia className={classes.media} 
                image="https://blog.pintu.co.id/wp-content/uploads/2021/09/nft-marketplace-1024x683.jpg" 
                title="nft"/>
                    <CardContent className={classes.cardContent}>
                    <Typography style={{fontWeight: 'bold', cursor: 'pointer', marginBottom: '10px', color: '#F9FAFB'}} variant='h5'>Tips dan Trik Minting NFT</Typography>
                        <Typography style={{color: '#F9FAFB'}} variant='subtitle'>
                            Minting NFT adalah proses pembuatan asset digital NFT yang dimana prosesnya akan dimasukan kedalam blockchain.
                            Blockchain sendiri merupakan wadah atau tempat untuk mencetak asset digital tersebut.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    // </div>
  )
}

export default Artikel