import React from 'react'
import Logo from "@/assets/Logo.png"
import { SelectedPage } from '../../shared/types';

type Props = {
    setSelectedPage: (value:SelectedPage) => void
}

const Footer = ({setSelectedPage:SelectedPage}: Props) => {
  return (
    <div className='bg-primary-100 py-16'>
        <div className="justify-content mx-auto gap-16 md:flex w-5/6"  >
        <div className='mt-16 basis-1/2 md:mt-0'>
            <img src={Logo} alt="logo" />
            <p className='my-5'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore dolore suscipit laboriosam, voluptate, deserunt fugit consequatur dolores atque animi, nihil earum quas perferendis sequi aspernatur!
            </p>
            <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
        <h4 className="font-bold">Links</h4>
        <p className='my-5'>Massa orci senectus</p>
        <p className='my-5'>Et gravida id et etiam</p>
        <p>Ullamcorper vivamus</p>
        </div>
         <div className='mt-16 basis-1/4 md:mt-0'>
        <h4 className="font-bold">Contact Us</h4>
        <p className='my-5'>Massa orci senectus</p>
         <p className='my-5'>Massa orci senectus</p>
        <p className='my-5'>Et gravida id et etiam</p>
        <p>Ullamcorper vivamus</p>

        </div>
        </div>

    </div>
  )
}

export default Footer