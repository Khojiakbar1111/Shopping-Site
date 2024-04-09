import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const [user, setUser] = useState({
        Name: '',
        email: '',
        subject: '',
        Message: '',
    });

    const data = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const send = async (e) => {
        e.preventDefault();
        const { Name, email, subject, Message } = user;
        try {
            const option = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: {
                    Name, email, subject, Message
                }
            };
            const response = await axios.post("https://khojireact-shopping-default-rtdb.firebaseio.com/Message.json", option);
            if (response) {
                toast.success("Message has been sent", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } catch (error) {
            console.error("Error while sending message:", error);
            toast.error("Failed to send message", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        setUser({
            Name: '',
            email: '',
            subject: '',
            Message: '',
        })
    };

    return (
        <>
            <div className='contact'>
                <div className='container'>
                    <div className='input-form'>
                        <h2>#Contact Us</h2>
                        <form method='POST'>
                            <div className='box'>
                                <div className='label'>
                                    <h4>Name</h4>
                                </div>
                                <div className='input'>
                                    <input type="text" placeholder='Name' value={user.Name} name="Name" onChange={data}/>
                                </div>
                            </div>
                            <div className='box'>
                                <div className='label'>
                                    <h4>E-mail</h4>
                                </div>
                                <div className='input'>
                                    <input type="email" placeholder='E-mail' value={user.email} name="email" onChange={data}/>
                                </div>
                            </div>
                            <div className='box'>
                                <div className='label'>
                                    <h4>Subject</h4>
                                </div>
                                <div className='input'>
                                    <input type="text" placeholder='subject' value={user.subject} name="subject" onChange={data}/>
                                </div>
                            </div>
                            <div className='box'>
                                <div className='label'>
                                    <h4>Message</h4>
                                </div>
                                <div className='input'>
                                    <textarea name="Message" placeholder="Message" value={user.Message} onChange={data}></textarea>
                                </div>
                            </div>
                            <button type="submit" onClick={send}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default Contact;
