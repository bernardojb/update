// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, CardBody, Card } from "reactstrap";
import {Helmet} from "react-helmet";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import components
// import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";
import PageBreadcrumb from "../../components/Shared/PageBreadcrumb";

class Termos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathItems: [
                //id must required
                { id: 1, name: "HOME", link: "/" },
                { id: 2, name: "TERMOS DE USO", link: "/sobre" },
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
                 <Helmet>
                <meta charSet="utf-8" />
                <title>Termos de Uso | Update Anestesiologia</title>
                <link rel="canonical" href="https://www.grupoupdate.com.br/termos-de-uso" />
                </Helmet>
                {/* breadcrumb */}
                <PageBreadcrumb pathItems={this.state.pathItems}>
                    <h1>TERMOS DE USO</h1>
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
                                        <h3 className="card-title info-bar">Descri????o do aplicativo</h3>
                                        <p className="">
                                            O Update ?? um aplicativo de atualiza????o m??dica que traz informa????es cient??ficas, an??lise de artigos e discuss??es de t??picos relevantes ?? pr??tica cl??nica. Esse aplicativo n??o se destina a substituir a forma????o m??dica nem deve ser utilizado como ??nica fonte de informa????o ou consulta para decis??es sobre qualquer tipo de procedimento ou diagn??stico, seja a t??tulo gratuito ou oneroso.
                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">Aplica????o dos termos de uso</h3>
                                        <p className="">
                                            Os produtos e servi??os Update s??o fornecidos pela Lifesavers Cursos e Consultoria Ltda. com sede no Munic??pio de S??o Paulo, Estado de S??o Paulo, com seus atos constitutivos registrados perante a Junta Comercial do Estado de S??o Paulo, inscrita perante o Cadastro Nacional da Pessoa Jur??dica (CNPJ) sob o n?? 10.535.504/0001-60 (???Lifesavers???, ???n??s???) aos usu??rios (???usu??rio???, ???voc?????). Os presentes Termos de Uso (???Termos???) regem o uso do aplicativo, do site associado e dos produtos e servi??os disponibilizados (???Servi??os???). Por isso, recomendamos que voc?? leia atentamente as regras a seguir e, em caso de d??vida, entre em contato conosco.
                                            <br />
                                            <br />
                                            Ao usar nossos Servi??os, voc?? reconhece seu pleno entendimento e concorda em ficar vinculado por estes Termos. Como alguns de nossos Servi??os podem ser software baixado em seu computador, telefone, tablet ou outro dispositivo, voc?? concorda que possamos atualizar automaticamente este software e que estes Termos se aplicar??o tamb??m a essas atualiza????es.
                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">Condi????es de Elegibilidade para uso de nossos Servi??os</h3>
                                        <p className="">
                                            Para utilizar os Servi??os, voc?? dever?? criar uma conta. Ao faz??-lo, voc?? nos assegura que (i) ?? maior de 18 anos e (ii) est?? em pleno exerc??cio de suas capacidades legais. Para a cria????o da sua conta e para a utiliza????o de certos recursos, voc?? dever?? fornecer informa????es precisas e completas. Ao utilizar os Servi??os, voc?? concorda em manter tais informa????es sempre precisas e atualizadas. O usu??rio ?? respons??vel pela seguran??a de sua conta e senha. A Lifesavers considerar?? qualquer a????o efetuada por meio da conta como sendo a de seu respectivo usu??rio. A Lifesavers n??o ser?? responsabilizada por qualquer dano ou perda pela incapacidade do usu??rio de manter sua conta segura. Todos os seus dados que voc?? venha a nos fornecer s??o protegidos conforme a legisla????o aplic??vel e nossa pol??tica de privacidade
                                        </p>
                                    </CardBody>
                                    {/* <CardBody>
                                        <h3 className="card-title info-bar">VALORES</h3>
                                        <ul className="sobre-list">
                                            <li><span style={{color:'green', fontWeight:'bold'}}>{' > '}</span> Busca constante pela atualiza????o. </li>
                                            <li><span style={{color:'green', fontWeight:'bold'}}>{' > '}</span> Pensamento cr??tico e independente. </li>
                                            <li><span style={{color:'green', fontWeight:'bold'}}>{' > '}</span> Vis??o pragm??tica e livre de vi??s. </li>
                                            <li><span style={{color:'green', fontWeight:'bold'}}>{' > '}</span> Comunica????o assertiva e objetiva. </li>
                                            <li><span style={{color:'green', fontWeight:'bold'}}>{' > '}</span> Perseguir a excel??ncia. </li>
                                            <li><span style={{color:'green', fontWeight:'bold'}}>{' > '}</span> Paix??o pelo que faz. </li>
                                        </ul>
                                    </CardBody> */}
                                    <CardBody>
                                        <h3 className="card-title info-bar">Conte??do licenciado e uso dos Servi??os</h3>
                                        <p className="">
                                            Materiais propriet??rios. Os Servi??os pertencem e s??o operados pela Lifesavers. As interfaces visuais, gr??ficos, design, compila????o, informa????es, c??digo de computador (incluindo c??digo fonte ou c??digo objeto), servi??os, conte??do, v??deos, marcas (comerciais, de servi??os ou outras), e todos os outros elementos dos Servi??os s??o protegidos pelas leis brasileiras e internacionais de direitos autorais, patentes e marcas comerciais, conven????es internacionais e outras leis aplic??veis que regem a propriedade intelectual e os direitos de propriedade. Conte??do Educacional Licenciado. A Lifesavers pode disponibilizar nos Servi??os determinados v??deos educacionais e materiais complementares relacionados, de propriedade da Lifesavers ou de seus licenciadores externos (o "Conte??do Licenciado"). N??s concedemos a voc?? o direito n??o exclusivo e intransfer??vel de acessar e usar o Conte??do Licenciado, apenas para seus fins pessoais e n??o comerciais. A presente licen??a n??o autoriza voc?? baixar, gravar, reproduzir, distribuir, vender, arrendar, modificar ou fornecer acesso ao Conte??do Licenciado a terceiros. Exclus??es do Conte??do Licenciado. Exceto quando expressamente determinado em contr??rio, o Conte??do Licenciado refere-se somente ?? an??lise realizada pela Lifesavers. Em nenhum momento, asseguramos o acesso aos artigos-objeto de tais an??lises, que continuam a ser protegidos nos termos da legisla????o aplic??vel. Nesse sentido, voc?? concorda em observar todos os direitos dos titulares de tais artigos. Utiliza????es n??o admiss??veis. Apenas a t??tulo exemplificativo, sem representar qualquer limita????o ??s restri????es expostas, s??o apresentados a seguir os tipos de usos que n??s definimos expressamente como estando fora dos usos permitidos: i. a venda ou aluguel de (1) qualquer parte do Conte??do Educacional Licenciado, (2) qualquer trabalho derivado baseado, pelo menos em parte, no Conte??do Educacional Licenciado ou (3) qualquer trabalho coletivo que inclua qualquer parte do Conte??do Educacional Licenciado; ii. fornecer treinamento, suporte ou servi??os editoriais que usam ou referenciam o Conte??do Educacional Licenciado; e iii. a venda de an??ncios, patroc??nios ou promo????es colocados no Conte??do Educacional Licenciado, ou qualquer parte dele, ou a venda de an??ncios, patroc??nios ou promo????es em qualquer site ou blog que contenha qualquer parte do Material Educacional Licenciado, incluindo, sem limita????o, qualquer "an??ncios pop-up "; iv. qualquer compartilhamento de acesso ao Conte??do Licenciado ou aos servi??os, seja por meio do compartilhamento de dispositivos f??sicos ou de dados de acesso (usu??rio e senha); v. usar os Servi??os de qualquer maneira que seja prejudicial ao funcionamento do aplicativo ou sua reputa????o ou de qualquer maneira que viole as regras desses Termos; vi. personificar qualquer pessoa ou entidade, reivindicar falsamente uma afilia????o com qualquer pessoa ou entidade, ou acessar as contas de Servi??os de terceiros, ou realizar qualquer outra atividade fraudulenta; vii. excluir os avisos de direitos autorais ou outros direitos de propriedade dos Servi??os ou de qualquer Conte??do Licenciado; viii. usar os Servi??os para qualquer finalidade ilegal ou em viola????o de qualquer lei local, estadual, nacional ou internacional, incluindo, sem limita????o, leis que regem a propriedade intelectual e outros direitos de propriedade, prote????o de dados e privacidade; ix. difamar, assediar, abusar, amea??ar ou fraudar Usu??rios dos Servi??os, ou coletar ou tentar coletar informa????es pessoais sobre Usu??rios ou terceiros sem seu consentimento; x. remover, contornar, desativar, danificar ou interferir com os recursos relacionados ?? seguran??a dos Servi??os, Conte??do Educacional Licenciado, C??digo Educacional Licenciado ou Conte??do do Usu??rio, recursos que impedem ou restringem o uso ou a c??pia de qualquer conte??do acess??vel atrav??s dos Servi??os, ou recursos que imponham limita????es no uso dos Servi??os, Conte??do Educacional Licenciado, C??digo Educacional Licenciado ou Conte??do do Usu??rio; xi. realizar ou tentar realizar engenharia reversa, descompila????o, desmonte ou de qualquer outra forma tentar descobrir o c??digo-fonte dos Servi??os ou qualquer parte dele; xii. modificar, adaptar, traduzir ou criar trabalhos derivados com base nos Servi??os ou em qualquer parte dele, exceto e somente na extens??o expressamente permitida pela Lifesavers neste documento ou na medida em que a restri????o acima seja expressamente proibida pela lei aplic??vel; ou xiii. interferir intencionalmente ou danificar a opera????o dos Servi??os ou o gozo de qualquer usu??rio, por qualquer meio, incluindo, sem limita????o, a participa????o em ataques do tipo nega????o de servi??o ou o upload ou dissemina????o de v??rus, adware, spyware, worms ou outro c??digo malicioso.
                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">Conte??do de terceiros</h3>
                                        <p className="">
                                            Os Servi??os podem incluir links ou refer??ncias a outros sites ou servi??os apenas como uma conveni??ncia para os Usu??rios ("Sites de Refer??ncia"). Todavia, n??s n??o garantimos (i) acesso gratuito a tais Sites de Refer??ncia, que podem exigir pagamentos adicionais para a disponibiliza????o de seu conte??do e (ii) tampouco podemos garantir a seguran??a do acesso, informa????es, materiais, produtos ou servi??os contidos ou acess??veis atrav??s dos Sites de Refer??ncia, inclusive a seguran??a contra qualquer c??digo malicioso que possa danificar seus aparelhos ou os correspondentes arquivos. O ACESSO E O USO DE SITES DE REFER??NCIA, INCLUINDO AS INFORMA????ES, MATERIAIS, PRODUTOS E SERVI??OS OU DISPONIBILIZADOS NOS SITES DE REFER??NCIA, ?? FEITO EXCLUSIVAMENTE POR SUA CONTA E RISCO.                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">Cobran??a recorrente</h3>
                                        <p className="">
                                            A assinatura ser?? cobrada mensalmente na data de assinatura, e a cada m??s a partir de ent??o, a menos e at?? que o usu??rio cancele de sua assinatura. Faturaremos automaticamente o pagamento pelo m??todo selecionado todos os meses no mesmo dia do m??s correspondente ao in??cio da assinatura. N??s reservamos o direito de alterar o momento de nossa cobran??a se seu pagamento n??o tiver sido conclu??do com ??xito. Caso sua assinatura tenha sido paga em um dia n??o contido em um determinado m??s, poderemos efetuar a cobran??a em um outro dia do m??s que considerarmos apropriado. Por exemplo, se voc?? iniciou sua assinatura em 31 de mar??o, ?? prov??vel que sua pr??xima data de pagamento seja 30 de abril.                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">Ressalvas</h3>
                                        <p className="">
                                            OS SERVI??OS E TODO O CONTE??DO INCLU??DO S??O FORNECIDOS NO ESTADO ATUAL, SEM GARANTIA DE QUALQUER TIPO, EXPRESSA OU IMPL??CITA. ESPECIFICAMENTE, A LIFESAVERS DISPONIBILIZA CONT??UDO QUE PODE COMPREENDER AN??LISES E OPINI??ES PESSOAIS. EM NENHUM CASO, A LIFESAVERS GARANTE QUE TAIS INFORMA????ES SER??O FORNECIDAS DE MANEIRA ININTERRUPTA, NEM LIVRE DE ERROS OU DE OPINI??ES PESSOAIS QUE POSSAM DIVERGIR DE ORIENTA????ES, RECOMENDA????ES OU PROTOCOLOS OFICIAIS. O CONTE??DO FOI CONCEBIDO PARA CORRESPONDER ?? UMA AN??LISE CR??TICA DE ??MBITO ACAD??MICO E N??O COMO RECOMENDA????O OU ORIENTA????O PARA A TOMADA DE DECIS??ES M??DICAS PR??TICAS, QUE DEVEM LEVAR EM CONTA, ENTRE OUTROS ELEMENTOS, OS PROTOCOLOS E ORIENTA????ES VIGENTES, BEM COMO AS PARTICULARIDADES DE CADA PACIENTE.                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">Limita????o de responsabilidade</h3>
                                        <p className="">
                                            AT?? O M??XIMO PERMITIDO POR LEI, A LIFESAVERS E SUAS PARCEIRAS N??O SER??O RESPONS??VEIS POR QUALQUER DANO INDIRETO, INCIDENTAL, ESPECIAL, CONSEQ??ENCIAL OU PUNITIVO, ASSIM COMO QUALQUER PERDA DE DADOS, PERDA DE LUCROS OU RECEITAS, INCORRIDAS DIRETA OU INDIRETAMENTE, PERDAS DE FUNDOS DE COM??RCIO (???GOODWILL???) OU OUTRAS PERDAS INTANG??VEIS, RESULTANTES DO USO, ACESSO OU INABILIDADE DE ACESSAR OU USAR OS SERVI??OS DISPONIBILIZADOS. EM NENHUM CASO, A RESPONSABILIDADE AGREGADA DA LIFESAVERS POR TODAS AS RECLAMA????ES RELACIONADAS COM OS SERVI??OS EXCEDER?? O VALOR TOTAL RECEBIDO NOS ??LTIMOS SEIS MESES DO USU??RIO. VOC?? RECONHECE E CONCORDA QUE AS ISEN????ES DE RESPONSABILIDADE E AS LIMITA????ES DE RESPONSABILIDADE ESTABELECIDAS NESTE TERMO DE USO REFLETEM UMA ALOCA????O RAZO??VEL E JUSTA DE RISCO ENTRE VOC??, A LIFESAVERS, E SUAS PARCEIRAS, E QUE ESSAS LIMITA????ES S??O UMA BASE ESSENCIAL PARA QUE OS SERVI??OS SEJAM DISPONIBILIZADOS PARA O USU??RIO DE UMA FORMA ECONOMICAMENTE VI??VEL.
                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">Modifica????es ou encerramento dos servi??os</h3>
                                        <p className="">
                                            Estamos constantemente mudando e melhorando nossos servi??os. Podemos adicionar ou remover fun????es, recursos ou requisitos, e podemos suspender ou interromper parte de nossos Servi??os por completo. Nesse caso, garantimos o acesso at?? o final do per??odo contratado ou um reembolso, conforme o acordado entre as partes. N??s reservamos o direito de ajustar ou alterar os pre??os de nossos servi??os, ou de quaisquer partes destes, de acordo com os crit??rios da Lifesavers, a qualquer momento que assim determinarmos necess??rio. Salvo disposi????o expressa em contr??rio nestes Termos, qualquer altera????o de pre??o dos servi??os entrar?? em vigor ap??s notifica????o aos usu??rios por e-mail. Podemos n??o ser capazes de fornecer os Servi??os para determinadas regi??es ou pa??ses por v??rios motivos, inclusive devido a requisitos de controle de exporta????o aplic??veis ou limita????es e restri????es de acesso ?? Internet por parte dos governos. Nesse caso, n??o teremos nenhuma responsabilidade perante voc?? por qualquer a????o desse tipo.
                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">Encerramento por parte do usu??rio</h3>
                                        <p className="">
                                            O usu??rio pode encerrar o uso de nossos servi??os a qualquer momento, embora lamentemos sua sa??da. Nesse caso, seu acesso ser?? permitido at?? o ??ltimo dia do per??odo para o qual a assinatura tiver sido contratada, mas nenhum reembolso ser?? devido.                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">Encerramento por viola????es aos Termos</h3>
                                        <p className="">
                                            Caso constatemos que o usu??rio tenha violado qualquer elemento dos presentes Termos, poderemos suspender o acesso ao aplicativo imediatamente, encerrando o contrato imediatamente. Nesse caso, os valores pagos n??o ser??o devolvidos a t??tulo de multa n??o compensat??ria, e o acesso ser?? suspenso no per??odo remanescente, sem preju??zo das demais medidas indenizat??rias cab??veis. Nos casos de viola????es particularmente graves, reservamo-nos ao direito de n??o permitir acessos subsequentes ao mesmo usu??rio no futuro.
                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">Revis??o dos termos</h3>
                                        <p className="">
                                            Reservamos o direito de revisar os Termos, a nosso crit??rio, a qualquer momento. Quaisquer revis??es dos Termos entrar??o em vigor imediatamente ap??s a publica????o. Para quaisquer altera????es materiais nos Termos, tomaremos medidas razo??veis para notificar os usu??rios sobre essas altera????es. Em todos os casos, o uso continuado dos Servi??os ap??s a publica????o de tais altera????es, com ou sem notifica????o, constitui aceita????o vinculante aos Termos revisados.
                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">Divisibilidade das disposi????es e aus??ncia de ren??ncia</h3>
                                        <p className="">
                                            Se alguma disposi????o destes Termos for considerada inaplic??vel, isso n??o afetar?? as outras disposi????es. Se voc?? n??o cumprir estes Termos e n??o tomarmos medidas imediatas, isso n??o indica que renunciaremos a quaisquer direitos que possamos ter (como agir no futuro).
                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">Cess??o do contrato</h3>
                                        <p className="">
                                            Os Termos, assim como as licen??as associadas para acesso ao correspondente conte??do, n??o poder??o ser transferidas ou cedidas pelo usu??rio a quaisquer terceiros, exceto com a autoriza????o pr??via e escrita da Lifesavers; entretanto, voc?? concorda que a Lifesavers poder?? ceder sua posi????o contratual sem qualquer restri????o e sem a necessidade do consentimento expresso do usu??rio.
                                        </p>
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
export default Termos;
