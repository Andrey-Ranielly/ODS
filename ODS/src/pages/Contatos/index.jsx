import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Container from '../../components/Container'

function Contatos() {
    return (
<>
      <Header />
        <Container>
          <section className='container'>
            <figure>
              <img className='img-minha' src="https://avatars.githubusercontent.com/u/76213189?v=4" alt="Imagem de Andrey Ranielly" />
            </figure>
            <h3>Minhas redes sociais: </h3> 
            <h3> <a href='https://www.linkedin.com/in/andrey-ranielly/'>Linkedin</a>  <a href='https://github.com/Andrey-Ranielly/'>Github</a>  <a href='https://www.instagram.com/andrey_ranielly//'>Instagram</a> </h3>
            <h6></h6>
          </section>
        </Container>
      <Footer />
        </> 
    )
}

export default Contatos