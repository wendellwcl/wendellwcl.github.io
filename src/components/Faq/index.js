import './faq.css'

const Faq = () => {

    return(
        <section id="faq-container" className="container-fluid">

            <div className="container">

                <h2 className="text-center">Mais sobre mim</h2>

                <details open className="mb-5">
                    <summary>Experiência profissional em uma Multinacional</summary>
                    <p>
                        Participei do time de uma <span className="text-highlight">Multinacional de grande porte, Ericsson</span>, durante 2 anos.
                        Tal experiência foi bastante positiva, sendo uma ótima escola para minha formação como profissional.
                    </p>
                </details>

                <details open className="mb-5">
                    <summary>Habilidades complementares - Design</summary>
                    <p>
                        Possuo conhecimentos sobre <span className="text-highlight">Design e Motion Design</span>, que me permitem ter uma boa compreensão sobre aspectos estéticos e funcionais relacionados a área visual.
                    </p>
                </details>

            </div>
        </section>
    )

}

export default Faq