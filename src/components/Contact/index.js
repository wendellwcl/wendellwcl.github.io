import './contact.css'

const Contact = () => {

    return(
        <section id="contact-container" className="container-fluid">

            <div className="container text-center">

                <h2>Entre em Contato</h2>

                <p>
                    Interesse em contar com meu trabalho ou alguma duvida para esclarecer?
                    <br />
                    Por favor entre em contato por alguma das opções abaixo:
                </p>

                <div className="row">

                    <div className="col-12 mb-4" id="email">
                        <i class="bi bi-envelope-fill"></i>
                        wendell.wcl19@gmail.com
                    </div>

                    <div className="col-12">
                        <a href="https://www.linkedin.com/in/wendell-corr%C3%AAa-lima-8a4312191/" target="blank" role="button"><i class="bi bi-linkedin"></i>Linkedin</a>
                        <a href="https://github.com/wendellwcl" target="blank" role="button"><i class="bi bi-github"></i>Github</a>
                    </div>

                </div>
            </div>
        </section>
    )

}

export default Contact