import CardMain from "../components/Cards/CardsMain/CardMain";
import CardBlog from "../components/Cards/CardBlog/CardBlog";


export default function Home() {

    return (
        <>
            <section>
                <div className="section-container">
                    <CardMain />
                </div>
            </section>
            
            <section className="section-gris">
                <div className="section-container">
                    <CardBlog />
                </div>
            </section>
        </>
    );

}