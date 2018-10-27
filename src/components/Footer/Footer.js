import React from 'react';
import { IconContext } from 'react-icons';
import { GoMarkGithub } from 'react-icons/go';
import { FaLinkedin } from 'react-icons/fa';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer flex-container">
                <IconContext.Provider value={{ color: 'white',
                                               size: '3em',
                                            }}>
                    <div className="footer-icon flex-item">
                            <a href="https://github.com/csmick/">
                                <GoMarkGithub />
                            </a>
                    </div>
                    <div className="footer-icon flex-item">
                        <a href="https://www.linkedin.com/in/cameronsmick/">
                            <FaLinkedin />
                        </a>
                    </div>
                </IconContext.Provider>
            </div>
        );
    }
}

export default Footer;
