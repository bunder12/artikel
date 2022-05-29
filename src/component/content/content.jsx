import React from 'react'
import { Typography, Link, Grid, Card, CardContent, CardMedia, Button } from '@material-ui/core';
import AnimateButton from '../ui-component/extended/AnimateButton';

import useStyles from './styled'

const Content = () => {

    const classes = useStyles();

  return (
    <div className={classes.container}>
        <div className={classes.areaContent}>
        <Typography className={classes.title} variant='h1'>
        Tips dan Trik Minting NFT
      </Typography>
      <Typography className={classes.text} variant='subtitle1'>
        NFT (non-fungible token) merupakan asset digital yang bisa digunakan sebagai bukti kepemilikan barang yang dapat dibeli dengan mata uang kripto. NFT meliputi berbagai bidang karya seni, contohnya musik, game, foto, video klip dan lain-lain.
      </Typography>
      <Typography className={classes.title2} variant='h2'>Apa itu Minting NFT?</Typography>
      <Typography className={classes.text} variant='subtitle1'>
      Minting NFT adalah proses pembuatan asset digital NFT yang dimana prosesnya akan dimasukan kedalam blockchain.
      Blockchain sendiri merupakan wadah atau tempat untuk mencetak asset digital tersebut.
      </Typography>
      <Typography className={classes.title2} variant='h2'>Tips Pertama</Typography>
      <Typography className={classes.text} variant='subtitle1'>
        Pemilihan Blockchain, pilih Blockchain NFT yang mendukung transfer dan penjualan NFT di Blockchain lain agar dapat menghemat biaya percetakan dan memastikan keuntungan yang diperoleh.
        Untuk saat ini ada banyak blockchain popular untuk minting NFT, salah satunya solana, solana sendiri adalah blockchain nft yang populer dan biaya gas feenya lebih murah dari blockchain popular lainnya.
      </Typography>
      <Typography className={classes.title2} variant='h2'>Tips Kedua</Typography>
      <Typography className={classes.text} variant='subtitle1'>
        Memilih Marketplace, Pembeli NFT harus memilih marketplace NFT yang tepat sebelum melakukan Minting NFT. Beberapa marketplace NFT pada Blockhain Solana yang popular yaitu ada Magic Eden, Solsea, solanart dan lain-lain.
        selain itu salah satu marketplace yang populer di blockchain etherium yaitu OpenSea sekarang juga sudah support blockchain solana. dimana pada marketplace tersebut anda dapat memilih nft yang berada pada blockchain Etherium ataupun solana dan lain-lain.
        Selain Marketplace anda juga dapat melakukan minting NFT di Situs Launchpad, Launchpad sendiri adalah website Minting yang dilakukan awal meluncurnya NFT dari project tersebut. 
      </Typography>
      <Typography className={classes.title2} variant='h2'>Tips Ketiga</Typography>
      <Typography className={classes.text} variant='subtitle1'>
      Analisis Project NFT, Sebelum melakukan minting atau membeli nft lihat terlebih dahulu project NFT yang akan di beli, karena banyak terdapat project scam, dimana anda akan rugi dalam membeli nft tersebut karena tidak adanya utilitas yang didapatkan dari NFT tersebut.
      ada beberapa analisis Project NFT yang dapat anda lakukan, yang pertama yaitu melihat roadmap kejelasan dari project NFT tersebut, apakah team dari project NFT tersebut melakukan sesuai dengan roadmap yang sudah mereka lakukan dan tidak melibihi batas waktu yang sudah mereka tentukan. 
      yang kedua anda dapat melihat discord dari team project tersebut apakah team mereka selalu aktif dan banyak member yang join di discord komunitas dari project tersebut.
      yang ketiga anda dapat melihat social media salah satunya Twitter dari project tersebut apakah selalu aktif dan update tentang informasi dari project NFT mereka.
      </Typography>
        </div>
    </div>
  )
}

export default Content