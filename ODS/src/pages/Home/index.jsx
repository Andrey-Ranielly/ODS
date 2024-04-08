import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Container from '../../components/Container'


function Home() {
    return (
<>
      <Header />
        <Container>
          <section className='container'>
            <div className='apresentacao'>
              <h4>Olá, eu sou Andrey Ranielly, um estudante do Embarque Digital na Universidade Católica de Pernambuco. <br></br>
              Tenho 21 anos e estou criando este site para exibir um pouco do meu Projeto Integrador,<br></br>
              mas farei isto outra hora (podem me cobrar nas redes sociais da página de contatos)</h4>
            </div>

            <figure>
              <img className='img-porto-digital' src="https://oil.portodigital.org/wp-content/uploads/2022/06/Marca_Porto_Digital_2019-300x86.png" alt="Imagem da logo do Porto Digital" />

              <img className='img-unicap' src="https://seeklogo.com/images/U/unicap-logo-36B4682030-seeklogo.com.png" alt="Imagem da logo da Unicap" />

              <img className='img-embarque-digital' src="https://educ.rec.br/educarecife/embarquedigital/assets/imagens/logo_embarque_medio.png" alt="Imagem da logo do Embarque Digital" />
            </figure>
            
        


          </section>
        </Container>
      <Footer />
        </> 
    )
}

export default Home