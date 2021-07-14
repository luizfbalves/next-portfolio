import { useEffect, useState } from 'react'
import Styles from './portfolio.module.scss'
import Card from '@components/card'
import Header from '@components/header'
import Tags from '@components/tags'
import Portfolio from '@public/images/portfolio.png'
import Puby from '@public/images/puby.png'
import Modal from '@components/modal'
import TsFrontSvg from '../../../public/images/tsfront.png'
import { useAppContext } from '@ctx/state'

export default function Contact() {
  const ctx = useAppContext()

  const [portfolio, setPortfolio] = useState(false)
  const [puby, setPuby] = useState(false)
  const [tsfront, setTsFront] = useState(false)

  useEffect(() => {
    if (ctx.modal.isOpen === false) {
      setPortfolio(false)
      setPuby(false)
      setTsFront(false)
    }
  }, [ctx.modal.isOpen])

  return (
    <>
      <div className={Styles.Container}>
        <Header />
        <div className={Styles.Content}>
          <h1>Recent Projects</h1>
          <div className="animate__animated animate__slideInUp">
            <div className={Styles.Body}>
              <Card
                title="Portfolio"
                image={Portfolio}
                onClick={() => setPortfolio(true)}
                description={`Este próprio projeto feito por mim utilizando next-js, scss, typescript...`}
                tags={
                  <>
                    <Tags
                      description="typescript"
                      background="#1066bf"
                      fontColor="whitesmoke"
                    />
                    <Tags
                      description="next-js"
                      background="#000000"
                      fontColor="whitesmoke"
                    />
                    <Tags
                      description="scss"
                      background="hsl(330deg 51% 61%)"
                      fontColor="whitesmoke"
                    />
                  </>
                }
              />
              <Modal isOpen={portfolio}>
                <>
                  <h1 id={Styles.title}>Sobre o Portfólio</h1>
                  <div>
                    {`Desenvolvi esse projeto no meu tempo livre, para estudar e
                     também ter minha própria página com algumas coisas que posso fazer. 
                     Você pode verificar o repositório no github `}
                    <a href="https://github.com/LuizzBanndera/next-portfolio">
                      aqui.
                    </a>
                  </div>
                  <h1>Tecnologias</h1>
                  <ul>
                    <li>
                      <strong>Typescritpt: </strong>
                      {`O projeto possui as práticas de tipagem mais utilizadas.`}
                    </li>
                    <br />
                    <li>
                      <strong>Next-js: </strong>
                      {`Next-js é um dos frameworks mais populares para
                       projetos SEO, usar next para um projeto de portfólio é essencial
                       uma vez que esse tipo de página precisa ser facilmente indexada por
                       mecanismos de pesquisa.`}
                    </li>
                    <br />
                    <li>
                      <strong>Sass: </strong>
                      {`Uma alternativa mais completa ao css que permite mais facilidade 
                      na estilização das paginas.`}
                    </li>
                  </ul>
                </>
              </Modal>
              <Card
                title="Puby"
                image={Puby}
                onClick={() => setPuby(true)}
                description={`App de delivery que para fazer pedidos em uma página web...`}
                tags={
                  <>
                    <Tags
                      description="typescript"
                      background="#1066bf"
                      fontColor="whitesmoke"
                    />
                    <Tags
                      description="redux"
                      background="#764abc"
                      fontColor="whitesmoke"
                    />
                    <Tags
                      description="cognito"
                      background="#ec912d"
                      fontColor="whitesmoke"
                    />
                  </>
                }
              />
              <Modal isOpen={puby}>
                <>
                  <h1 id={Styles.title}>Sobre o Puby</h1>
                  <div>
                    {`App de delivery que permite ao usuário fazer pedidos em uma página web por meio
                     de um link que o estabelecimento envia via whatsapp. O estabelecimento possui uma página web que mostra os 
                     pedidos recebidos em tempo real.`}
                  </div>
                  <h1>Tecnologias</h1>
                  <ul>
                    <li>
                      <strong>Typescritpt: </strong>
                      {`O projeto possui as práticas de tipagem mais utilizadas.`}
                    </li>
                    <br />
                    <li>
                      <strong>Redux: </strong>
                      {`Trabalhei pela primeira vez com essa lib que para projetos medio/grande porte 
                      é quase obrigatoria.`}
                    </li>
                    <br />
                    <li>
                      <strong>Sass: </strong>
                      {`Uma alternativa mais completa ao css que permite mais facilidade 
                      na estilização das paginas.`}
                    </li>
                  </ul>
                </>
              </Modal>
              <Card
                title="TS-Front"
                image={TsFrontSvg}
                onClick={() => setTsFront(true)}
                description={`Template para dashboard que ja pré-configurado...`}
                tags={
                  <>
                    <Tags
                      description="typescript"
                      background="#1066bf"
                      fontColor="whitesmoke"
                    />
                    <Tags
                      description="styled"
                      background="#764abc"
                      fontColor="whitesmoke"
                    />
                  </>
                }
              />
              <Modal isOpen={tsfront}>
                <>
                  <h1 id={Styles.title}>Sobre o TS-Front</h1>
                  <div>
                    {`A idéia era desenvolver um template simples para dashboard que ja vem pré-configurado para que você so precise 
                informar as rotas das paginas que criar e os icones que deseja para cada item do menu.
                Utilizei typescript e styled-components para todos os elementos. Você pode verificar o repositório `}
                    <a href="https://github.com/LuizzBanndera/ts-front">
                      aqui.
                    </a>
                  </div>
                  <h1>Tecnologias</h1>
                  <ul>
                    <li>
                      <strong>Typescritpt: </strong>
                      {`O projeto possui as práticas de tipagem mais utilizadas.`}
                    </li>
                    <br />
                    <li>
                      <strong>Styled: </strong>
                      {`Utilizei styled-components em todo o projeto com um unico arquivo para componente e estilização.`}
                    </li>
                  </ul>
                </>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
