//Css
import './introduction.css'

const Introduction = () => {

    return(
        <section className="container" id="introduction-container">

            <h2 className="text-center">Apresentação</h2>

            <p>
                <span className="text-highlight">Seja muito bem-vindo(a).</span>
                <br /><br />
                Prazer, eu sou o <span className="text-highlight">Wendell</span>. Comecei a estudar sobre <span className="text-highlight">desenvolvimento web</span> no início de 2021, e desde lá estudo por conta própria.
                Em um futuro próximo pretendo cursar Sistemas para Internet ou algum outro curso equivalente da área. Quero <span className="text-highlight">iniciar minha carreira como desenvolvedor <nobr>front-end</nobr></span> e busco minha primeira oportunidade profissional.
                Acredito já ser capaz de entregar <span className="text-highlight">valor e resultado</span> rapidamente em projetos reais se apoiado e habilitado.
                Aqui no meu portifólio demonstro meus conhecimentos, qualidade técnica e o que sou capaz de realizar.
                Espero que goste do que irá ver e que desperte interesse em <span className="text-highlight">me ter como parte do time da sua organização</span>.
            </p>
        </section>
    )

}

export default Introduction