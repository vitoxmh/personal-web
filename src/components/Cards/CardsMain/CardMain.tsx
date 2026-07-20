import "./CardMain.scss"
import Button from "../../Button/Button"

export default function CardMain() {


  return (
     <article className="cardMain">
        <div className="cardMain-info">
            <p className="cardMain__sub-title">Digital Architect & Developer</p>
            <h1 className="cardMain__title">Building elegant systems with precision and artistic intent.</h1>
            <p className="cardMain__text">I specialize in translating complex logic into minimalist, performant, and beautifully structured interfaces. Welcome to my digital gallery.</p>
            <div>
                <Button text="Ver proyectos" clase="" type="" link="/home/"/>
                <Button text="Ver Blog" clase="btn-white" type="" link="/home/"/>
            </div>
        </div>
        <div className="cardMain__img">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwGJOehu9JFtdnLXO1l-D_eEKa3tnGFTWTm-yso0o46Lu18mbg_HOQyOO875xiqIyWgBZPwx2R9kerxIFkyR-o2uSMWBw9ehGQRDQ7sIKIo-pRuecqRqe1KCnpgN1iL0L9pIsKENEQ-5LTS9AUKtx1_6M7Gh9vZW3FfVJSvymAp8yUCYHOUDHPTs3-3uJcq4RVEHxYSupLwu7p0w-d70NUXK1G_FOZWgseaN3ExIW4_NbjM4KJj9X46RrSRgwKI-DzptvWbLcST1-b"></img>
        </div>
     </article>
    )
}
