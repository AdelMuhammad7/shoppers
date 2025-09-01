import React from 'react'
import { Link } from 'react-router-dom'

function FormCheck() {
  return (
    <form >
        <div className='d-flex justify-content-between'>
            <b className='h3'>Contact</b>
            <Link>log in</Link>
        </div>

        <input type="text" className='w-100 p-1 ps-2 my-3 rounded' style={{border: "1px solid"}}  placeholder='Email or mobile phone number'/>

        <div className='d-flex align-items-center gap-2 '>
            <input type="checkbox"  id="d"  style={{cursor: "pointer"}}/>
            <label htmlFor="d" style={{cursor: "pointer"}}>Email me with news and offers</label>
        </div>

        <b className='h3 my-2 d-block'>Delivery</b>

        <select className='input-group p-1 my-3'>
            <option >United States</option>
            <option >India</option>
            <option >Australia</option>
            <option >Canada</option>
        </select>

        <div className='d-flex my-2 gap-2'>
            <input type="text" className='w-50 p-1 rounded ' style={{border: "1px solid"}} placeholder='First name' />
            <input type="text" className='w-50 p-1 rounded' style={{border: "1px solid"}} placeholder='Last name (optional)' />
        </div>

        <input type="text" className='p-1 w-100 my-2 rounded' style={{border: "1px solid"}}  placeholder='Address' />
        <input type="text" className='p-1 w-100 my-2 rounded' style={{border: "1px solid"}}  placeholder='Apartment, suite, etc (optional)' />

        <div className='my-2 d-flex gap-2' >
            <input type="text" className='w-25 p-1 rounded' style={{border: "1px solid"}}  placeholder='city'/>
            <input type="text" className='w-25 p-1 rounded' style={{border: "1px solid"}}  placeholder='state'/>
            <input type="text" className='w-50 p-1 rounded'  style={{border: "1px solid"}} placeholder='postcode'/>
        </div>

        <div className='d-flex align-items-center gap-2 '>
            <input type="checkbox"  id="x"  style={{cursor: "pointer"}}/>
            <label htmlFor="x" style={{cursor: "pointer"}}>Save this information for next time</label>
        </div>

    </form>
  )
}

export default FormCheck