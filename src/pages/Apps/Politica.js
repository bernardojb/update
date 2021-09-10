// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, CardBody, Card } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import components
// import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";
import PageBreadcrumb from "../../components/Shared/PageBreadcrumb";

class Politica extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathItems: [
                //id must required
                { id: 1, name: "HOME", link: "/" },
                { id: 2, name: "POLÍTICA DE PRIVACIDADE", link: "/politica-de-privacidade" },
            ],
        };
    }
    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById("topnav").classList.add("nav-sticky");
        } else {
            document.getElementById("topnav").classList.remove("nav-sticky");
        }
    };

    render() {
        return (
            <React.Fragment>
                {/* breadcrumb */}
                <PageBreadcrumb pathItems={this.state.pathItems}>
                    <h1>POLÍTICA DE PRIVACIDADE E TRATAMENTO DE DADOS</h1>
                </PageBreadcrumb>

                <div className="position-relative">
                    <div className="shape overflow-hidden text-white">
                        <svg
                            viewBox="0 0 2880 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </div>
                </div>

                <section className="section">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={9}>
                                <Card className="card shadow rounded border-0">
                                    <CardBody>
                                        <h3 className="card-title info-bar">Descrição</h3>
                                        <p className="">
                                            Estas Políticas de Privacidade e Tratamento de Dados (“Políticas”) aplicam-se à coleta e tratamento de dados pela Lifesavers Cursos e Consultoria Ltda., sociedade limitada com sede no Município de São Paulo, Estado de São Paulo, com seus atos constitutivos registrados perante a Junta Comercial do Estado de São Paulo, inscrita perante o Cadastro Nacional da Pessoa Jurídica (CNPJ) sob o no. 10.535.504/0001-60 (“Lifesavers”), por meio do seu aplicativo digital Update.
                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">Item n°1: a coleta de dados</h3>
                                        <h3 className="card-title info-bar">Definições</h3>
                                        <p className="">
                                            Dados pessoais: Um dado pessoal é uma informação sobre uma pessoa natural identificada ou que pode ser identificada, direta ou indiretamente, por referência a um número de identificação ou a um ou vários elementos que lhe são próprios (nome, sobrenome, endereço, número de telefone, dados de localização, etc.). Tratamento: toda operação realizada com dados pessoais, como as que se referem a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração.
                                            <br />
                                            Controlador: Entidade que determina as finalidades e os meios de tratamento.
                                            <br />
                                            Subcontratado: Entidade que trata os dados por conta do responsável pelo tratamento. Dados coletados
                                            <br />
                                            <br />
                                            Para lhe garantir o melhor serviço possível, e para assegurar a gestão da relação com o cliente, a Lifesavers necessita recolher os dados pessoais (tais como nome, sobrenome, o endereço, endereço de e-mail, número de telefone, data de nascimento, CPF, dados de cartão de crédito e/ou pagamento) que o cliente lhe comunicar ou que a Lifesavers obtiver do cliente durante as suas compras.
                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">Responsáveis pelos processamentos de dados</h3>
                                        <p className="">
                                            A Lifesavers é controladora da maior parte dos dados pessoais que você fornecer. Em alguns casos, funções específicas podem ser contratadas com terceiros. Em todos os casos, Lifesavers envidará os melhores esforços para escolher processadores competentes e reconhecidos no mercado para realizar tais funções, sempre com o propósito de manter suas informações protegidas, nos termos descritos a seguir.
                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">Fundamentos legais do tratamento dos seus dados</h3>
                                        <p className="">
                                            A Lifesavers realiza diferentes tratamentos sobre os seus dados. Segue abaixo uma lista dos diferentes fundamentos que permitem à Lifesavers realizá-los: Tratamento decorrente dos fundamentos legais de execução e obrigação contratual da Lifesavers seja pela própria Lifesavers ou mediante terceiros contratados pela Lifesavers e localizados dentro ou fora do Brasil:
                                            <br />
                                            <br />
                                            Contratação dos Serviços pelos clientes A gestão da assinatura do cliente, assim como a cobrança Colocação de cookies para melhorar a sua experiência na plataforma, propor-lhe conteúdos orientados Gestão dos inadimplentes Envio de ofertas comerciais por email, sms ou outro tipo de notificação push Serviços referentes à tecnologia da informação e administração do Aplicativo Update; Enriquecimento do banco de dados da Lifesavers com dados de parceiros (no caso de ter dado seu consentimento ao parceiro). Tratamentos efetuados com base no interesse legítimo buscado pela Lifesavers
                                            <br />
                                            <br />
                                            Criação de uma conta de cliente Gestão da relação comercial com o cliente Medir a satisfação do cliente em nossos serviços e produtos Medidas de segurança e processamento de pagamento Tratamentos realizados com base nas obrigações legais da Lifesavers                                        </p>
                                    </CardBody>

                                    <CardBody>
                                        <h3 className="card-title info-bar">Gestão do exercício dos direitos dos clientes</h3>
                                        <p className="">
                                            Manutenção das informações (pagamento, acesso e dados pessoais) dentro dos prazos legais e/ou contratuais Análises de preferências: a Lifesavers pode recomendar ofertas relacionadas com os seus assuntos de interesse e com as suas necessidades. A tecnologia de recomendação baseia-se nos seus dados de navegação e/ou no seu histórico de assinaturas. Todas as nossas ofertas e conteúdos continuam, no entanto, acessíveis nos nossos sites e plataformas onlines por ocasião da sua navegação.
                                        </p>
                                    </CardBody>

                                    <CardBody>
                                        <h3 className="card-title info-bar">Principais momentos da coleta de dados</h3>
                                        <p className="">Principais momentos da coleta de dados</p>
                                        <ul className="sobre-list">
                                            <li>
                                                <p style={{ fontWeight: 'bold' }}><span style={{ color: 'green', fontWeight: 'bold' }}>{' > '}</span> Coleta por meio da assinatura do aplicativo: </p>
                                                <p>Para se inscrever no aplicativo Update, o cliente deve nos fornecer informações pessoais. Essas informações são obrigatórias, incluindo o nome, sobrenome, data de nascimento, formas e contatos de pagamento/cobrança. Outras informações são facultativas, como o endereço de e-mail, informações de como souberam de nossos serviços, etc.</p>
                                            </li>
                                            <li>
                                                <p style={{ fontWeight: 'bold' }}><span style={{ color: 'green', fontWeight: 'bold' }}>{' > '}</span> Coleta indireta: </p>
                                                <p>A Lifesavers pode ser levada a coletar alguns dos seus dados de maneira indireta. Estes dados provêm de parceiros da Lifesavers aos quais deu o seu acordo para que os seus dados sejam transferidos para a Lifesavers e a fim de receber as newsletters.</p>
                                            </li>
                                            <li>
                                                <p style={{ fontWeight: 'bold' }}><span style={{ color: 'green', fontWeight: 'bold' }}>{' > '}</span> Site de Terceiros: </p>
                                                <p>A Lifesavers poderá incluir links para Sites de terceiros (“Sites de Terceiros”) em seu site e aplicativo. Você será responsável por avaliar se deseja ou não acessar ou utilizar um Site de Terceiro. Você deverá examinar todos os termos aplicáveis ou a política de privacidade de um Site de Terceiro antes de utilizá-lo ou de compartilhar informações com ele, uma vez que você poderá conceder permissão a terceiros para utilizar as suas informações. A Lifesavers não recomenda nem se responsabiliza por nenhum recurso, conteúdo, publicidade, produto ou outros materiais constantes em Sites de Terceiros, ou disponibilizados por meio deles. Consequentemente, se você decidir acessar Sites de Terceiros, você o fará a seu próprio risco, assim como aceitará que os presentes “Termos de Uso” não se aplicam à sua utilização de nenhum Site de Terceiro. Neste sentido, sugerimos que o usuário se informe sobre a política de privacidade dos Sites de Terceiros antes de fornecer qualquer tipo de informação. O USUÁRIO expressamente reconhece e concorda que a LIFESAVERS não será responsável, direta ou indiretamente, por quaisquer perdas e danos que sejam efetiva ou alegadamente causados por, ou em conexão, Sites de terceiros.</p>
                                            </li>
                                        </ul>
                                    </CardBody>

                                    <CardBody>
                                        <h3 className="card-title info-bar">Item n°2: utilização dos dados</h3>
                                        <h3 className="card-title info-bar">Segurança no armazenamento dos dados</h3>
                                        <p className="">A Lifesavers toma todas as precauções razoáveis para preservar a segurança dos seus dados a fim de, especificamente, impedir a sua divulgação a pessoas não autorizadas. A este título, a Lifesavers estabelece todas as medidas razoáveis para assegurar os seus próprios dispositivos informáticos e aquela dos seus subcontratados.</p>
                                    </CardBody>

                                    <CardBody>
                                        <h3 className="card-title info-bar">Nossa utilização</h3>
                                        <ul className="sobre-list">
                                            <li>
                                                <p style={{ fontWeight: 'bold' }}><span style={{ color: 'green', fontWeight: 'bold' }}>{' > '}</span> Duração de armazenamento de dados: </p>
                                                <p>Seus dados serão mantidos por um período de 3 anos a partir do final do relacionamento comercial ou de seu último contato com a Lifesavers. No entanto, eles podem ser mantidos por um período mais extenso, se assim for necessário, a fim de cumprir uma obrigação legal.</p>
                                            </li>
                                            <li>
                                                <p style={{ fontWeight: 'bold' }}><span style={{ color: 'green', fontWeight: 'bold' }}>{' > '}</span> As destinações de seus dados: </p>
                                                <p>- Subcontratados </p>
                                                <p> Podemos ter que transmitir seus dados aos subcontratados para realizar os serviços propostos. Nesse caso, a Lifesavers permanece responsável pelo uso de seus dados a serem feitos pelos subcontratados e garante sua conformidade com a estrutura contratual e regulatória. Em particular, a Lifesavers faz todos os esforços para garantir que eles estejam em conformidade com os padrões de segurança.</p>
                                                <br />
                                                <br />
                                                <p>- Os Parceiros</p>
                                                <p>Os Parceiros A Lifesavers pode transmitir seus dados para parceiros nos seguintes casos:
                                                    <br />
                                                    • Como parte de nossa atividade, para garantir-lhe os melhores serviços, como por exemplo formas de pagamento.
                                                    <br />
                                                    • No caso de uma autoridade administrativa ou judicial competente o solicitar.
                                                </p>
                                            </li>
                                        </ul>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">Item n°3: comunicação na lifesavers</h3>
                                        <h3 className="card-title info-bar">E-mail e sms</h3>
                                        <p className="">Há a possibilidade de se aplicar como interessado em receber ofertas da Lifesavers inscrevendo-se na nossa newsletter Lifesavers, para que efetuemos o envio de e-mails ou de SMS. Solicitamos-lhe sempre a sua autorização da seguinte forma:
                                            <br />
                                            <br />
                                            E-mail: Desejo receber as novidades da minha loja e as ofertas especiais da Lifesavers por e-mail Pode, a qualquer momento, retirar a sua autorização para receber estas ofertas:
                                            <br />
                                            <br />
                                            Clicando no link contido no rodapé do e-mail “Para cancelar a assinatura, clique aqui.” 
                                            <br/>
                                            Visitando o seu espaço de cliente no item "{'Minha conta > Assinatura'}" 
                                            <br />
                                            Contatando o Serviço de Atendimento ao Cliente por e-mail em [contato@updateanestesia.com.br] 
                                            <br />
                                            A Lifesavers pode igualmente contatar-lhe por e-mail ou SMS por outras razões que não sejam o envio de ofertas comerciais.</p>
                                    </CardBody>

                                    <CardBody>
                                        <h3 className="card-title info-bar">Notificação push</h3>
                                        <p className="">Quando baixar o aplicativo Update, o usuário pode receber notificações no seu celular (por exemplo, a disponibilidade da assinatura para um curso ou um artigo que possa o interessar). Pode optar por não receber notificações, recusando-as quando instala o aplicativo Update, no momento da primeira utilização na aba “configurações” ou pode, a qualquer momento, desativar as notificações nas configurações do seu celular ou tablet.</p>
                                    </CardBody>

                                    <CardBody>
                                        <h3 className="card-title info-bar">Item n°4: seus direitos</h3>
                                        <h3 className="card-title info-bar">Informações sobre os seus direitos</h3>
                                        <p className="">Direito de acesso: Trata-se do direito do usuário ter acesso e ser comunicado sobre todas as suas informações que são detidas pela Lifesavers. Direito de retificação: Trata-se do direito do usuário de retificar as suas informações inexatas detidas pela Lifesavers. Direito a ser esquecido: Trata-se do direito do usuário de requerer a extinção de suas informações pessoais detidas pela Lifesavers. Direito de oposição: Trata-se do direito de se opor ao tratamento dos seus dados. Em certos casos, o exercício do seu direito de oposição poderá tornar impossível a continuação da sua relação com a Lifesavers. Por exemplo, caso se oponha a que os seus dados sejam tratados no âmbito da gestão da relação com o cliente, então, você deixará de poder usufruir dos serviços prestados pela Lifesavers. Em matéria de prospeção comercial, você pode, a qualquer momento, opor-se a que os seus dados sejam difundidos, transmitidos ou conservados. Este direito pode execer-se sem ter de apresentar um motivo legítimo. Direito de limitação do tratamento: Trata-se do direito de suspender um tratamento enquanto se faz uma verificação (verificar a exatidão dos dados pessoais, verificar se os motivos legítimos fornecidos pela pessoa prevalecem sobre os do responsável pelo tratamento no caso de um pedido de oposição, etc.) Direito à portabilidade: Trata-se do direito de conseguir que os seus dados pessoais sejam transmitidos num formato estruturado diretamente de um responsável pelo tratamento para outro, sempre que tal seja tecnicamente possível.</p>
                                    </CardBody>

                                    <CardBody>
                                        <h3 className="card-title info-bar">Exercício dos seus direitos</h3>
                                        <p className="">Para exercer os seus direitos, você deve enviar uma mensagem dentro de nosso aplicativo Update, estando logado para confirmar sua autenticidade. Em alguns casos, poderemos solicitar comprovações adicionais, de forma a garantir que estamos realmente tratando com o titular da conta. Sem esta comprovação, com o objetivo de proteger as informações pessoais do usuário, é impossível para a Lifesavers divulgá-las ou modificá-las. Você pode exercer os seus direitos de acesso e de retificação por meio de envio de comunicação dentro do próprio aplicativo Update. Uma resposta será enviada no prazo de 1 mês a contar da recepção do pedido.</p>
                                    </CardBody>

                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default Politica;
