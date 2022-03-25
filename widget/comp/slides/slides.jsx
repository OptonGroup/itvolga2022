import React from "react";
import Anim from '../animate/animate.jsx'
import './slides.css'

// slide 0
import pick from "./img/slide0/pick0.webp"
// slide 1
import womStyle from "./img/slide1/womenStyle.svg"
import menStyle from "./img/slide1/menStyle.svg"
// slide 2
import eyeglasses from "./img/slide2/eyeglasses.svg"
import sunglasses from "./img/slide2/sunglasses.svg"
import eyecat from "./img/slide2/cateye.svg"
import suncat from "./img/slide2/suncateye.svg"
// slide 4
import sizes from "./img/slide4/sizes.webp"
// slide 5
import darkshade from "./img/slide5/darkshade.svg"
import liteshade from "./img/slide5/liteshade.svg"
import transitioningshade from "./img/slide5/transitioningshade.svg"
// slide 6
import ovalmen1 from "./img/slide6/ovalmen1.svg"
import roundmen from "./img/slide6/roundmen.svg"
import ovalmen2 from "./img/slide6/ovalmen2.svg"
import ovalwomen from "./img/slide6/ovalwomen.svg"
import roundwomen from "./img/slide6/roundwomen.svg"
import roundwomen2 from "./img/slide6/roundwomen2.svg"
import twofaces1 from "./img/slide6/twofaces1.svg"
import twofaces2 from "./img/slide6/twofaces2.svg"
import twofaces3 from "./img/slide6/twofaces3.svg"
// slide 8
import Aviator from "./img/slide8/Aviator.webp"
import Browline from "./img/slide8/Browline.webp"
import CatEye from "./img/slide8/CatEye.webp"
import Geometic from "./img/slide8/Geometric.webp"
import Oval from "./img/slide8/Oval.webp"
import Oversized from "./img/slide8/Oversized.webp"
import Rectangle from "./img/slide8/Rectangle.webp"
import Rimless from "./img/slide8/Rimless.webp"
import Round from "./img/slide8/Round.webp"
import Square from "./img/slide8/Square.webp"
import Wayframe from "./img/slide8/Wayframe.webp"
import Wrap from "./img/slide8/Wrap.webp"
// slide 10
import ArmaniExchange from "./img/slide10/ArmaniExchange.svg"
import Burberry from "./img/slide10/Burberry.svg"
import Coach from "./img/slide10/Coach.svg"
import Gucci from "./img/slide10/Gucci.svg"
import HilaryDuff from "./img/slide10/HilaryDuff.svg"
import MichaelKros from "./img/slide10/MichaelKors.svg"
import Oakley from "./img/slide10/Oakley.svg"
import Prada from "./img/slide10/Prada.svg"
import RayBan from "./img/slide10/RayBan.svg"
import ToryBurch from "./img/slide10/ToryBurch.svg"
import Versace from "./img/slide10/Versace.svg"
import Vogue from "./img/slide10/Vogue.svg"
// slide 11
import gift from "./img/slide11/gift.svg"

const Slides = function({slide, nextSlide, chooseParam, params}){
    switch (slide){
        case 0:
        default:
            return ( 
                <div className="slide-0">
                    <img src={pick} className='glasses' alt=''/>
                    <p className="firstAttention">Let’s find your perfect pair!</p>
                    <p className="secondAttention">Take the quiz to easily discover your perfect fit from thousands of styles</p>
                    <span className="confirm" onClick={nextSlide}>
                        <p className="buttonText">Start Now</p>
                    </span>
                </div>
            );
        case 1:
            return ( 
                <div className="slide-1">
                    <p className="thirdAttention">You are looking for</p>
                    <div className="card" onClick={() => chooseParam(4)}>
                        <img src={womStyle} alt=''/>
                        <p className="secondAttention">Women's Styles</p>
                    </div>
                    <div className="card" onClick={() => chooseParam(5)}>
                        <img src={menStyle} alt=''/>
                        <p className="secondAttention">Men's Styles</p>
                    </div>
                    <p className="bottomText" onClick={() => chooseParam(null)}>I'd like to see both</p>
                </div>
            );
        case 2:
            if(Math.random() > 0.5){
                return ( 
                    <div className="slide-2">
                        <p className="thirdAttention">What type of glasses are you looking for?</p>
                        <div className="card" onClick={() => chooseParam(210)}>
                            <img src={eyeglasses} alt=''/>
                            <p className="secondAttention">Eyeglasses</p>
                        </div>
                        <div className="card" onClick={() => chooseParam(211)}>
                            <img src={sunglasses} alt=''/>
                            <p className="secondAttention">Sunglasses</p>
                        </div>
                        <p className="bottomText" onClick={() => chooseParam(null)}>I want to see both</p>
                    </div>
                );
            }else{
                return ( 
                    <div className="slide-2">
                        <p className="thirdAttention">What type of glasses are you looking for?</p>
                        <div className="card" onClick={() => chooseParam(210)}>
                            <img src={eyecat} alt=''/>
                            <p className="secondAttention">Eyeglasses</p>
                        </div>
                        <div className="card" onClick={() => chooseParam(211)}>
                            <img src={suncat} alt=''/>
                            <p className="secondAttention">Sunglasses</p>
                        </div>
                        <p className="bottomText" onClick={() => chooseParam(null)}>I want to see both</p>
                    </div>
                );
            }
        case 3:
            function changeSlide3(){
                if (slide !== 3) return;
                if (document.getElementById("slideS") != null)
                    document.getElementById("slideS").classList.remove("d-none");
                if (document.getElementById("slideF") != null)
                    document.getElementById("slideF").classList.add("d-none");
            }
            setTimeout(function(){
                if (slide !== 3) return;
                if (document.getElementsByClassName("anim").length)
                    document.getElementsByClassName("anim")[0].classList.add("d-none");
                if (document.getElementById("slideF") != null)
                    document.getElementById("slideF").classList.remove("d-none")
            }, 2000);

            if (document.getElementsByClassName("anim").length)
                    document.getElementsByClassName("anim")[0].classList.remove("d-none");
            if (document.getElementById("slideF") != null)
                    document.getElementById("slideF").classList.add("d-none");
            if (document.getElementById("slideS") != null)
                document.getElementById("slideS").classList.add("d-none");
            
            return ( 
                <div className="slide-3">
                    <Anim text="Let's get to know you!"/>

                    <div id="slideF" data-testid="slideF" className="d-none">
                        <p className="thirdAttention">Do you need vision correction?</p>
                        <div className="card" onClick={changeSlide3}>
                            <p className="secondAttention">Yes</p>
                        </div>
                        <div className="card" onClick={() => chooseParam(null)}>
                            <p className="secondAttention">No</p>
                        </div>
                        <p className="bottomText" onClick={() => chooseParam(null)}>Skip</p>
                    </div>

                    <div id="slideS" data-testid="slideS" className="d-none">
                        <p className="thirdAttention">What do you need your glasses for?</p>
                        <div className="card" onClick={() => chooseParam(6)}>
                            <p className="secondAttention">Near Vision</p>
                        </div>
                        <div className="card" onClick={() => chooseParam(6)}>
                            <p className="secondAttention">Distance Vision</p>
                        </div>
                        <div className="card" onClick={() => chooseParam(7)}>
                            <p className="secondAttention">Multifocal / Progressive</p>
                        </div>
                        <p className="bottomText" onClick={() => chooseParam(null)}>Skip</p>
                    </div>
                </div>
            );
        case 4:
            function changeSlide41(){
                if (slide !== 4) return;
                if (document.getElementsByClassName("anim").length)
                    document.getElementsByClassName("anim")[0].classList.remove("d-none");
                if (document.getElementById("slideF") != null)
                    document.getElementById("slideF").classList.add("d-none");
                setTimeout(function(){
                    if (slide !== 4) return;
                    if (document.getElementsByClassName("anim").length)
                        document.getElementsByClassName("anim")[0].classList.add("d-none");
                    if (document.getElementById("slideS") != null)
                        document.getElementById("slideS").classList.remove("d-none")
                }, 2000)
            }
            function changeSlide42(){
                if (slide !== 4) return;
                if (document.getElementById("slideS") != null)
                    document.getElementById("slideS").classList.remove("d-none");
                if (document.getElementById("slideF") != null)
                    document.getElementById("slideF").classList.add("d-none");
            }
            if (document.getElementById("slideF") != null)
                document.getElementById("slideF").classList.remove("d-none");
            if (document.getElementsByClassName("anim").length)
                document.getElementsByClassName("anim")[0].classList.add("d-none");
            if (document.getElementById("slideS") != null)
                document.getElementById("slideS").classList.add("d-none");
            
            return ( 
                <div className="slide-4">
                    <div id="slideF" data-testid="slideF" >
                        <p className="thirdAttention">What’s your current frame size?</p>
                        <img src={sizes} alt=""></img>
                        <div className="card" onClick={function(event){chooseParam(66, false);changeSlide41();}}>
                            <p className="name">Small</p>
                            <p className="mm">42-48 mm</p>
                        </div>
                        <div className="card" onClick={function(event){chooseParam(67, false);changeSlide41();}}>
                            <p className="name">Medium</p>
                            <p className="mm">49-53 mm</p>
                        </div>
                        <div className="card" onClick={function(event){chooseParam(66, false);changeSlide41();}}>
                            <p className="name">Large</p>
                            <p className="mm">54-58 mm</p>
                        </div>
                        <p className="bottomText" onClick={changeSlide42}>I don’t know</p>
                    </div>

                    <Anim classN="d-none" text="No worries, we’ve got you!"/>

                    <div id="slideS" data-testid="slideS" className="d-none">
                        <p className="thirdAttention">How wide would you say your face is?</p>
                        <div className="card" onClick={() => chooseParam(66)}>
                            <p className="secondAttention">Wider Than Average</p>
                        </div>
                        <div className="card" onClick={() => chooseParam(67)}>
                            <p className="secondAttention">Average</p>
                        </div>
                        <div className="card" onClick={() => chooseParam(68)}>
                            <p className="secondAttention">Narrower Than Average</p>
                        </div>
                        <p className="bottomText" onClick={() => chooseParam(null)}>I’m not sure</p>
                    </div>
                </div>
            );
        case 5:
            function changeSlide5(){
                if (slide !== 5) return;
                if (document.getElementById("slideS") != null)
                    document.getElementById("slideS").classList.remove("d-none");
                if (document.getElementById("slideF") != null)
                    document.getElementById("slideF").classList.add("d-none");
            }
            if (document.getElementById("slideS") != null)
                document.getElementById("slideS").classList.remove("d-none");
            if (document.getElementById("slideF") != null)
                document.getElementById("slideF").classList.remove("d-none");

            if (params[1][0] === 211){
                if (document.getElementById("slideS") != null)
                    document.getElementById("slideS").classList.remove("d-none");
                return ( 
                    <div className="slide-5">
                        <div id="slideS" data-testid="slideS">
                                <p className="thirdAttention">When you’re out and about, which shade of lenses do you prefer?</p>
                                <div className="card" onClick={() => chooseParam("dark")}>
                                    <img src={darkshade} alt=""></img>
                                    <span></span>
                                    <p className="secondAttention">Dark Shade</p>
                                </div>
                                <div className="card" onClick={() => chooseParam("light")}>
                                    <img src={liteshade} alt=""></img>
                                    <span></span>
                                    <p className="secondAttention">Light Shade</p>
                                </div>
                                <div className="card" onClick={() => chooseParam("transition")}>
                                    <img src={transitioningshade} alt=""></img>
                                    <span></span>
                                    <p className="secondAttention">Transitioning Shade</p>
                                </div>
                            </div>
                    </div>
                );
            }else if(params[1][0] === 210){
                if (document.getElementById("slideF") != null)
                    document.getElementById("slideF").classList.remove("d-none");
                return ( 
                    <div className="slide-5">
                        <div id="slideF" data-testid="slideF">
                            <p className="thirdAttention">Would you like to protect your eyes from light emanating from screens?</p>
                            <div className="card" onClick={() => chooseParam(true)}>
                                <p className="secondAttention">Yes</p>
                            </div>
                            <div className="card" onClick={() => chooseParam(false)}>
                                <p className="secondAttention">No</p>
                            </div>
                        </div>
                    </div>
                );
            }else{
                if (document.getElementById("slideS") != null)
                    document.getElementById("slideF").classList.remove("d-none");
                if (document.getElementById("slideS") != null)
                    document.getElementById("slideS").classList.add("d-none");
                return ( 
                    <div className="slide-5">
                        <div id="slideF" data-testid="slideF" >
                            <p className="thirdAttention">Would you like to protect your eyes from light emanating from screens?</p>
                            <div className="card" onClick={function(event){chooseParam(true, false);changeSlide5();}}>
                                <p className="secondAttention">Yes</p>
                            </div>
                            <div className="card" onClick={function(event){chooseParam(false, false);changeSlide5();}}>
                                <p className="secondAttention">No</p>
                            </div>
                        </div>

                        <div id="slideS" data-testid="slideS" className="d-none">
                            <p className="thirdAttention">When you’re out and about, which shade of lenses do you prefer?</p>
                            <div className="card" onClick={() => chooseParam("dark")}>
                                <img src={darkshade} alt=""></img>
                                <span></span>
                                <p className="secondAttention">Dark Shade</p>
                            </div>
                            <div className="card" onClick={() => chooseParam("light")}>
                                <img src={liteshade} alt=""></img>
                                <span></span>
                                <p className="secondAttention">Light Shade</p>
                            </div>
                            <div className="card" onClick={() => chooseParam("transition")}>
                                <img src={transitioningshade} alt=""></img>
                                <span></span>
                                <p className="secondAttention">Transitioning Shade</p>
                            </div>
                        </div>
                    </div>
                );
            }
        case 6:    
            if (params[0][0] === 5){
                return ( 
                    <div className="slide-6">
                        <p className="thirdAttention">Every face shape has a perfect fit. What’s yours?</p>
                        <div className="card" onClick={() => chooseParam("long")}>
                            <img src={ovalmen1} className="one" alt="long face men"></img>
                            <span></span>
                            <p className="secondAttention">I have a long face</p>
                        </div>
                        <div className="card" onClick={() => chooseParam("round")}>
                            <img src={roundmen} className="one" alt="round face men"></img>
                            <span></span>
                            <p className="secondAttention">I have a round face</p>
                        </div>
                        <div className="card" onClick={() => chooseParam("between")}>
                            <img src={ovalmen2} className="one" alt="between long and round face men"></img>
                            <span></span>
                            <p className="secondAttention">In between</p>
                        </div>
                        <p className="bottomText" onClick={() => chooseParam(null)}>I don’t know</p>
                    </div>
                );
            }else if(params[0][0] === 4){
                return ( 
                    <div className="slide-6">
                        <p className="thirdAttention">Every face shape has a perfect fit. What’s yours?</p>
                        <div className="card" onClick={() => chooseParam("long")}>
                            <img src={ovalwomen} className="one" alt="long face women"></img>
                            <span></span>
                            <p className="secondAttention">I have a long face</p>
                        </div>
                        <div className="card" onClick={() => chooseParam("round")}>
                            <img src={roundwomen} className="one" alt="round face women"></img>
                            <span></span>
                            <p className="secondAttention">I have a round face</p>
                        </div>
                        <div className="card" onClick={() => chooseParam("between")}>
                            <img src={roundwomen2} className="one" alt="between long and round face women"></img>
                            <span></span>
                            <p className="secondAttention">In between</p>
                        </div>
                        <p className="bottomText" onClick={() => chooseParam(null)}>I don’t know</p>
                    </div>
                );
            }else{
                return ( 
                    <div className="slide-6">
                        <p className="thirdAttention">Every face shape has a perfect fit. What’s yours?</p>
                        <div className="card" onClick={() => chooseParam("long")}>
                            <img src={twofaces1} className="two" alt="long face men, women"></img>
                            <span></span>
                            <p className="secondAttention">I have a long face</p>
                        </div>
                        <div className="card" onClick={() => chooseParam("round")}>
                            <img src={twofaces2} className="two" alt="round face men, women"></img>
                            <span></span>
                            <p className="secondAttention">I have a round face</p>
                        </div>
                        <div className="card" onClick={() => chooseParam("between")}>
                            <img src={twofaces3} className="two" alt="between long and round face men, women"></img>
                            <span></span>
                            <p className="secondAttention">In between</p>
                        </div>
                        <p className="bottomText" onClick={() => chooseParam(null)}>I don’t know</p>
                    </div>
                );
            }
        case 7:
            return(
                <div className="slide-7">
                    <p className="thirdAttention">How would you define your facial features?</p>
                    <div className="card" onClick={() => chooseParam("sharp")}>
                        <p className="secondAttention">Sharp</p>
                    </div>
                    <div className="card" onClick={() => chooseParam("rounded")}>
                        <p className="secondAttention">Rounded</p>
                    </div>
                    <div className="card" onClick={() => chooseParam("between")}>
                        <p className="secondAttention">In between</p>
                    </div>
                    <p className="bottomText" onClick={() => chooseParam(null)}>I don’t know</p>
                </div>
            );
        case 8:
            var types = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            var names = ["rectangle", "browline", "aviator", "geometic", "wayframe", "round",
                         "oval", "oversized", "cat_eye", "rimless", "square", "wrap"];
            function chooseType(ind){
                types[ind] = (types[ind]+1)%2;
                if (types[ind])
                    document.getElementsByClassName("card")[ind].classList.add("active");
                else
                    document.getElementsByClassName("card")[ind].classList.remove("active");
                var s = 0;
                for (var i = 0; i < types.length; i++)
                   s += types[i]
                if (s)
                    document.getElementsByClassName("confirm")[0].classList.remove("notActive");
                else 
                    document.getElementsByClassName("confirm")[0].classList.add("notActive");
            }
            function slide8choose(){
                if (document.getElementsByClassName("confirm")[0].classList.length === 1){
                    var out = [];
                    types.forEach(function(type, ind){
                        if (types[ind])
                            out.push(names[ind]);
                    })
                    chooseParam(out);
                }
            }
            return(
                <div className="slide-8">
                    <p className="thirdAttention">Which frame style are you looking for?</p>
                    <p className="pickMore">You can pick more than one.</p>
                    <div className="typeGlasses">
                        <div className="row">
                            <div className="card" onClick={() => chooseType(0)}>
                                <img src={Rectangle} alt=""></img>
                                <p className="secondAttention">Rectangle</p>
                            </div>
                            <div className="card" onClick={() => chooseType(1)}>
                                <img src={Browline} alt=""></img>
                                <p className="secondAttention">Browline</p>
                            </div>
                            <div className="card" onClick={() => chooseType(2)}>
                                <img src={Aviator} alt=""></img>
                                <p className="secondAttention">Aviator</p>
                            </div>
                            <div className="card" onClick={() => chooseType(3)}>
                                <img src={Geometic} alt=""></img>
                                <p className="secondAttention">Geometic</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card" onClick={() => chooseType(4)}>
                                <img src={Wayframe} alt=""></img>
                                <p className="secondAttention">Wayframe</p>
                            </div>
                            <div className="card" onClick={() => chooseType(5)}>
                                <img src={Round} alt=""></img>
                                <p className="secondAttention">Round</p>
                            </div>
                            <div className="card" onClick={() => chooseType(6)}>
                                <img src={Oval} alt=""></img>
                                <p className="secondAttention">Oval</p>
                            </div>
                            <div className="card" onClick={() => chooseType(7)}>
                                <img src={Oversized} alt=""></img>
                                <p className="secondAttention">Oversized</p>
                            </div>
                        </div> 
                        <div className="row">
                            <div className="card" onClick={() => chooseType(8)}>
                                <img src={CatEye} alt=""></img>
                                <p className="secondAttention">Cat Eye</p>
                            </div>
                            <div className="card" onClick={() => chooseType(9)}>
                                <img src={Rimless} alt=""></img>
                                <p className="secondAttention">Rimless</p>
                            </div>
                            <div className="card" onClick={() => chooseType(10)}>
                                <img src={Square} alt=""></img>
                                <p className="secondAttention">Square</p>
                            </div>
                            <div className="card" onClick={() => chooseType(11)}>
                                <img src={Wrap} alt=""></img>
                                <p className="secondAttention">Wrap</p>
                            </div>
                        </div> 
                    </div>

                    <span className="confirm notActive" onClick={slide8choose}>
                        <p className="buttonText">Continue</p>
                    </span>
                </div>
            );
        case 9:
            return(
                <div className="slide-9">
                    <p className="thirdAttention">Are you looking for any particular eyewear brands?</p>
                    <div className="card" onClick={nextSlide}>
                        <p className="secondAttention">Yes, I have some in mind</p>
                    </div>
                    <div className="card" onClick={() => nextSlide(2)}>
                        <p className="secondAttention">No, brand isn't important</p>
                    </div>
                </div>
            );
        case 10:
            var types2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            var names2 = ["ray_ban", "oakley", "gucci", "armani_exchange", "hilary_duff", "prada",
                         "versace", "vogue", "michael_kros", "coach", "tory_burch", "burberry"];
            function chooseType2(ind){
                types2[ind] = (types2[ind]+1)%2;
                if (types2[ind])
                    document.getElementsByClassName("card")[ind].classList.add("active");
                else
                    document.getElementsByClassName("card")[ind].classList.remove("active");
                var s = 0;
                for (var i = 0; i < types2.length; i++)
                   s += types2[i]
                if (s)
                    document.getElementsByClassName("confirm")[0].classList.remove("notActive");
                else 
                    document.getElementsByClassName("confirm")[0].classList.add("notActive");
            }
            function slide10choose(){
                if (document.getElementsByClassName("confirm")[0].classList.length === 1){
                    var out = [];
                    types2.forEach(function(type, ind){
                        if (types2[ind])
                            out.push(names2[ind]);
                    })
                    chooseParam(out);
                }
            }
            return(
                <div className="slide-10">
                    <p className="thirdAttention">Choose your favorite brands</p>
                    <p className="pickMore">You can pick more than one.</p>
                    <div className="typeGlasses">
                        <div className="row">
                            <div className="card" onClick={() => chooseType2(0)}>
                                <img src={RayBan} alt=""></img>
                            </div>
                            <div className="card" onClick={() => chooseType2(1)}>
                                <img src={Oakley} alt=""></img>
                            </div>
                            <div className="card" onClick={() => chooseType2(2)}>
                                <img src={Gucci} alt=""></img>
                            </div>
                            <div className="card" onClick={() => chooseType2(3)}>
                                <img src={ArmaniExchange} alt=""></img>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card" onClick={() => chooseType2(4)}>
                                <img src={HilaryDuff} alt=""></img>
                            </div>
                            <div className="card" onClick={() => chooseType2(5)}>
                                <img src={Prada} alt=""></img>
                            </div>
                            <div className="card" onClick={() => chooseType2(6)}>
                                <img src={Versace} alt=""></img>
                            </div>
                            <div className="card" onClick={() => chooseType2(7)}>
                                <img src={Vogue} alt=""></img>
                            </div>
                        </div> 
                        <div className="row">
                            <div className="card" onClick={() => chooseType2(8)}>
                                <img src={MichaelKros} alt=""></img>
                            </div>
                            <div className="card" onClick={() => chooseType2(9)}>
                                <img src={Coach} alt=""></img>
                            </div>
                            <div className="card" onClick={() => chooseType2(10)}>
                                <img src={ToryBurch} alt=""></img>
                            </div>
                            <div className="card" onClick={() => chooseType2(11)}>
                                <img src={Burberry} alt=""></img>
                            </div>
                        </div> 
                    </div>

                    <span className="confirm notActive" onClick={slide10choose}>
                        <p className="buttonText">Continue</p>
                    </span>
                </div>
            );
        case 11:
            return ( 
                <div className="slide-11">
                    <div className='circle'>
                        <img src={gift} alt=''></img>
                    </div>
                    <p className="firstAttention">We've found some awesome frames for you!</p>
                    <p className="secondAttention">Send the results to your email to receive special discounts.</p>
                    <span className="confirm" onClick={nextSlide}>
                        <p className="buttonText">Send</p>
                    </span>
                    <p className="termsOfUse">By clicking ‘Send’ you agree to our Terms of Use & Privacy Policy and receiving promotion emails</p>
                </div>
            );
    }
}

export default Slides;