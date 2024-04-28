import React from 'react';

const ContactMe = () => {
    return (
        <div id="contact" className="contact">
            <h2 className="text-center">Contact Me</h2>
            <form>
                <ul>
                    <li>
                        <label className="text-right" htmlFor="name">Name:</label>
                        <input type="text" id="name" name="user-name" />
                    </li>
                    <li>
                        <label className="text-right" htmlFor="email">Email:</label>
                        <input type="text" id="email" name="user-email" />
                    </li>
                </ul>
                <div className="text-center">
                    <button type="submit">SEND</button>
                </div>
            </form>
        </div>
    );
};

export default ContactMe;
