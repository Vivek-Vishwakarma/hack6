import React from 'react';
import "react-bootstrap";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <footer class="bg-dark text-center text-white">
            <div class="container p-4 pb-0">

                <section class="mb-4">

                    <a
                        class="btn btn-primary btn-floating m-1"
                        style={{ "background-color": "#3b5998" }}
                        href="#!"
                        role="button"
                    ><FacebookIcon></FacebookIcon>
                    </a>

                    <a
                        class="btn btn-primary btn-floating m-1"
                        style={{ "background-color": "#55acee" }}
                        href="#!"
                        role="button"
                    ><TwitterIcon></TwitterIcon>
                    </a>

                    <a
                        class="btn btn-primary btn-floating m-1"
                        style={{ "background-color": "#dd4b39" }}
                        href="#!"
                        role="button"
                    ><GoogleIcon></GoogleIcon>
                    </a>

                    <a
                        class="btn btn-primary btn-floating m-1"
                        style={{ "background-color": "#ac2bac;" }}
                        href="#!"
                        role="button"
                    ><InstagramIcon></InstagramIcon>
                    </a>


                    <a
                        class="btn btn-primary btn-floating m-1"
                        style={{ "background-color": "#0082ca" }}
                        href="#!"
                        role="button"
                    ><LinkedInIcon></LinkedInIcon>
                    </a>

                    <a
                        class="btn btn-primary btn-floating m-1"
                        style={{ "background-color": "#333333" }}
                        href="#!"
                        role="button"
                    ><GitHubIcon></GitHubIcon>
                    </a>
                </section>

            </div>

            <div class="text-center p-3">
                © {new Date().getFullYear()} Copyright:
                <span class="ms-2">Health Buddy</span>
            </div>
        </footer>
    )
}

export default Footer