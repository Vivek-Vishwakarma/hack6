import React from 'react'
import MyCarousel from './MyCarousel'
import "../App.css"
import { Typography } from '@mui/material'
const Doctors = () => {
  return (
    <>
        <Typography className="heading" variant="h4">Our Doctors</Typography>
        <MyCarousel />
    </>
  )
}

export default Doctors