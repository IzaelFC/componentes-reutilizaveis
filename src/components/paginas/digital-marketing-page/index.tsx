import { MdArrowOutward } from "react-icons/md"

import logo from './assets/logo.webp'
import um from './assets/1.webp'
import dois from './assets/2.webp'
import tres from './assets/3.webp'
import quatro from './assets/4.webp'
import cinco from './assets/5.webp'
import seis from './assets/6.webp'

import amazon from './assets/Amazon Black.svg'
import notion from './assets/Notion.svg'
import hubspot from './assets/HubSpot.webp'
import netflix from './assets/Netflix Black.svg'
import dribbble from './assets/Dribbble.webp'
import zoom from './assets/Zoom.svg'

import './index.scss'

export function DigitalMarketing() {
    return (
        <div id='digital-marketing'>
            <header>
                <img src={logo} alt="Logo" />

                <section>
                    <div className='navigation'>
                        <a href="#about-us">About Us</a>
                        <a href="#services">Services</a>
                        <a href="#use-cases">Use Cases</a>
                        <a href="#pricing">Pricing</a>
                        <a href="#blog">Blog</a>
                    </div>

                    <button>Request a quote</button>
                </section>
            </header>

            <main>
                <section id="about-us">
                    <div>
                        <h1>Navigating the digital landscape for success</h1>
                        <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                        <button>Book a consultation</button>
                    </div>

                    <img src={ um } alt="" />
                </section>

                <section id="services">
                    <img src={ amazon } alt="" />
                    <img className=' h-full py-6' src={ dribbble } alt="" />
                    <img className='py-6' src={ hubspot } alt="" />
                    <img src={ notion } alt="" />
                    <img src={ netflix } alt="" />
                    <img src={ zoom } alt="" />
                </section>

                <section id="use-cases">
                    <div>
                        <h1>Services</h1>
                        <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
                    </div>

                    <div className='cards'>
                        <section>
                            <div>
                                <h1 className='title'>
                                    <span>Search engine</span>
                                    <span>optimization</span>
                                </h1>
                                <button>
                                    <span>
                                        <MdArrowOutward />
                                    </span>
                                    Learn more
                                </button>
                            </div>

                            <img src={dois} alt="" />
                        </section>

                        <section>
                            <div>
                                <h1 className='title'>
                                    <span>Pay per click</span>
                                    <span>advertising</span>
                                </h1>
                                <button>
                                    <span>
                                        <MdArrowOutward />
                                    </span>
                                    Learn more
                                </button>
                            </div>

                            <img src={tres} alt="" />
                        </section>

                        <section>
                            <div>
                                <h1 className='title'>
                                    <span>Social media</span>
                                    <span>marketing</span>
                                </h1>
                                <button>
                                    <span>
                                        <MdArrowOutward />
                                    </span>
                                    Learn more
                                </button>
                            </div>

                            <img src={quatro} alt="" />
                        </section>

                        <section>
                            <div>
                                <h1 className='title'>
                                    <span>E-mail</span>
                                    <span>marketing</span>
                                </h1>
                                <button>
                                    <span>
                                        <MdArrowOutward />
                                    </span>
                                    Learn more
                                </button>
                            </div>

                            <img src={cinco} alt="" />
                        </section>
                    </div>
                </section>

                <section id="pricing">
                    <div>
                        <h1>Let's make things happen</h1>
                        <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                        <button>Get your free a proposal</button>
                    </div>
                    <img src={ seis } alt="" />
                </section>

                <section id="blog">
                    <div>
                        <h1>Case study</h1>
                        <p>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
                    </div>

                    <div className="blog">
                        <section>
                            <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                            <button>
                                Learn more
                                <MdArrowOutward />
                            </button>
                        </section>

                        <div className="separate"></div>

                        <section>
                            <p>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
                            <button>
                                Learn more
                                <MdArrowOutward />
                            </button>
                        </section>

                        <div className="separate"></div>

                        <section>
                            <p>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
                            <button>
                                Learn more
                                <MdArrowOutward />
                            </button>
                        </section>
                    </div>
                </section>
            </main>
        </div>
    )
}

// https://br.pinterest.com/pin/1688918604561895/

// Para as imagens da página, tire prints e transforme em vetores para manter a qualidade
// https://svgconverter.app/ - Use esse site para isso e salve na pasta assets da própria página
// https://www.autotracer.org/ - Esse é melhor