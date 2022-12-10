import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { SvgIcon } from '@mui/material';

const FooterSlide = ({nm}) => {
  return (
    <div className='flex justify-between'>
        <h3 className='text-white'>{nm}</h3>
        <SvgIcon className='text-white' component={KeyboardArrowDownIcon}></SvgIcon>
    </div>
  )
}

export default FooterSlide