import react from 'react';

import './ContactMe.css';


const ContactMe = () => {
    return (
        <>
            <h1 className='contact-me'> Contact Me</h1>
            <div className='Container'>
                <form>

                    <input className='input' placeholder='Name' />
                    <input className='input' placeholder='Address' />
                    <input type="time" className='input' />
                    <div class="dropdown">
                        <button class="dropbtn">Services</button>
                        <div class="dropdown-content">
                            <a href="#">Mowing $50 front</a>
                            <a href="#">Mowing $50 back</a>
                            <a href="#">Complete Service $100</a>
                        </div>
                    </div>
                    <button className='input'> Request Call </button>
                </form>
            </div>
        </>
    )
}
export default ContactMe;