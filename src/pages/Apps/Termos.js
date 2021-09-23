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
                                        <h3 className="card-title info-bar">Descrição do aplicativo</h3>
                                        <p className="">
                                            O Update é um aplicativo de atualização médica que traz informações científicas, análise de artigos e discussões de tópicos relevantes à prática clínica. Esse aplicativo não se destina a substituir a formação médica nem deve ser utilizado como única fonte de informação ou consulta para decisões sobre qualquer tipo de procedimento ou diagnóstico, seja a título gratuito ou oneroso.
                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">Aplicação dos termos de uso</h3>
                                        <p className="">
                                            Os produtos e serviços Update são fornecidos pela Lifesavers Cursos e Consultoria Ltda. com sede no Município de São Paulo, Estado de São Paulo, com seus atos constitutivos registrados perante a Junta Comercial do Estado de São Paulo, inscrita perante o Cadastro Nacional da Pessoa Jurídica (CNPJ) sob o nº 10.535.504/0001-60 (“Lifesavers”, “nós”) aos usuários (“usuário”, “você”). Os presentes Termos de Uso (“Termos”) regem o uso do aplicativo, do site associado e dos produtos e serviços disponibilizados (“Serviços”). Por isso, recomendamos que você leia atentamente as regras a seguir e, em caso de dúvida, entre em contato conosco.
                                            <br />
                                            <br />
                                            Ao usar nossos Serviços, você reconhece seu pleno entendimento e concorda em ficar vinculado por estes Termos. Como alguns de nossos Serviços podem ser software baixado em seu computador, telefone, tablet ou outro dispositivo, você concorda que possamos atualizar automaticamente este software e que estes Termos se aplicarão também a essas atualizações.
                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">Condições de Elegibilidade para uso de nossos Serviços</h3>
                                        <p className="">
                                            Para utilizar os Serviços, você deverá criar uma conta. Ao fazê-lo, você nos assegura que (i) é maior de 18 anos e (ii) está em pleno exercício de suas capacidades legais. Para a criação da sua conta e para a utilização de certos recursos, você deverá fornecer informações precisas e completas. Ao utilizar os Serviços, você concorda em manter tais informações sempre precisas e atualizadas. O usuário é responsável pela segurança de sua conta e senha. A Lifesavers considerará qualquer ação efetuada por meio da conta como sendo a de seu respectivo usuário. A Lifesavers não será responsabilizada por qualquer dano ou perda pela incapacidade do usuário de manter sua conta segura. Todos os seus dados que você venha a nos fornecer são protegidos conforme a legislação aplicável e nossa política de privacidade
                                        </p>
                                    </CardBody>
                                    {/* <CardBody>
                                        <h3 className="card-title info-bar">VALORES</h3>
                                        <ul className="sobre-list">
                                            <li><span style={{color:'green', fontWeight:'bold'}}>{' > '}</span> Busca constante pela atualização. </li>
                                            <li><span style={{color:'green', fontWeight:'bold'}}>{' > '}</span> Pensamento crítico e independente. </li>
                                            <li><span style={{color:'green', fontWeight:'bold'}}>{' > '}</span> Visão pragmática e livre de viés. </li>
                                            <li><span style={{color:'green', fontWeight:'bold'}}>{' > '}</span> Comunicação assertiva e objetiva. </li>
                                            <li><span style={{color:'green', fontWeight:'bold'}}>{' > '}</span> Perseguir a excelência. </li>
                                            <li><span style={{color:'green', fontWeight:'bold'}}>{' > '}</span> Paixão pelo que faz. </li>
                                        </ul>
                                    </CardBody> */}
                                    <CardBody>
                                        <h3 className="card-title info-bar">Conteúdo licenciado e uso dos Serviços</h3>
                                        <p className="">
                                            Materiais proprietários. Os Serviços pertencem e são operados pela Lifesavers. As interfaces visuais, gráficos, design, compilação, informações, código de computador (incluindo código fonte ou código objeto), serviços, conteúdo, vídeos, marcas (comerciais, de serviços ou outras), e todos os outros elementos dos Serviços são protegidos pelas leis brasileiras e internacionais de direitos autorais, patentes e marcas comerciais, convenções internacionais e outras leis aplicáveis que regem a propriedade intelectual e os direitos de propriedade. Conteúdo Educacional Licenciado. A Lifesavers pode disponibilizar nos Serviços determinados vídeos educacionais e materiais complementares relacionados, de propriedade da Lifesavers ou de seus licenciadores externos (o "Conteúdo Licenciado"). Nós concedemos a você o direito não exclusivo e intransferível de acessar e usar o Conteúdo Licenciado, apenas para seus fins pessoais e não comerciais. A presente licença não autoriza você baixar, gravar, reproduzir, distribuir, vender, arrendar, modificar ou fornecer acesso ao Conteúdo Licenciado a terceiros. Exclusões do Conteúdo Licenciado. Exceto quando expressamente determinado em contrário, o Conteúdo Licenciado refere-se somente à análise realizada pela Lifesavers. Em nenhum momento, asseguramos o acesso aos artigos-objeto de tais análises, que continuam a ser protegidos nos termos da legislação aplicável. Nesse sentido, você concorda em observar todos os direitos dos titulares de tais artigos. Utilizações não admissíveis. Apenas a título exemplificativo, sem representar qualquer limitação às restrições expostas, são apresentados a seguir os tipos de usos que nós definimos expressamente como estando fora dos usos permitidos: i. a venda ou aluguel de (1) qualquer parte do Conteúdo Educacional Licenciado, (2) qualquer trabalho derivado baseado, pelo menos em parte, no Conteúdo Educacional Licenciado ou (3) qualquer trabalho coletivo que inclua qualquer parte do Conteúdo Educacional Licenciado; ii. fornecer treinamento, suporte ou serviços editoriais que usam ou referenciam o Conteúdo Educacional Licenciado; e iii. a venda de anúncios, patrocínios ou promoções colocados no Conteúdo Educacional Licenciado, ou qualquer parte dele, ou a venda de anúncios, patrocínios ou promoções em qualquer site ou blog que contenha qualquer parte do Material Educacional Licenciado, incluindo, sem limitação, qualquer "anúncios pop-up "; iv. qualquer compartilhamento de acesso ao Conteúdo Licenciado ou aos serviços, seja por meio do compartilhamento de dispositivos físicos ou de dados de acesso (usuário e senha); v. usar os Serviços de qualquer maneira que seja prejudicial ao funcionamento do aplicativo ou sua reputação ou de qualquer maneira que viole as regras desses Termos; vi. personificar qualquer pessoa ou entidade, reivindicar falsamente uma afiliação com qualquer pessoa ou entidade, ou acessar as contas de Serviços de terceiros, ou realizar qualquer outra atividade fraudulenta; vii. excluir os avisos de direitos autorais ou outros direitos de propriedade dos Serviços ou de qualquer Conteúdo Licenciado; viii. usar os Serviços para qualquer finalidade ilegal ou em violação de qualquer lei local, estadual, nacional ou internacional, incluindo, sem limitação, leis que regem a propriedade intelectual e outros direitos de propriedade, proteção de dados e privacidade; ix. difamar, assediar, abusar, ameaçar ou fraudar Usuários dos Serviços, ou coletar ou tentar coletar informações pessoais sobre Usuários ou terceiros sem seu consentimento; x. remover, contornar, desativar, danificar ou interferir com os recursos relacionados à segurança dos Serviços, Conteúdo Educacional Licenciado, Código Educacional Licenciado ou Conteúdo do Usuário, recursos que impedem ou restringem o uso ou a cópia de qualquer conteúdo acessível através dos Serviços, ou recursos que imponham limitações no uso dos Serviços, Conteúdo Educacional Licenciado, Código Educacional Licenciado ou Conteúdo do Usuário; xi. realizar ou tentar realizar engenharia reversa, descompilação, desmonte ou de qualquer outra forma tentar descobrir o código-fonte dos Serviços ou qualquer parte dele; xii. modificar, adaptar, traduzir ou criar trabalhos derivados com base nos Serviços ou em qualquer parte dele, exceto e somente na extensão expressamente permitida pela Lifesavers neste documento ou na medida em que a restrição acima seja expressamente proibida pela lei aplicável; ou xiii. interferir intencionalmente ou danificar a operação dos Serviços ou o gozo de qualquer usuário, por qualquer meio, incluindo, sem limitação, a participação em ataques do tipo negação de serviço ou o upload ou disseminação de vírus, adware, spyware, worms ou outro código malicioso.
                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">Conteúdo de terceiros</h3>
                                        <p className="">
                                            Os Serviços podem incluir links ou referências a outros sites ou serviços apenas como uma conveniência para os Usuários ("Sites de Referência"). Todavia, nós não garantimos (i) acesso gratuito a tais Sites de Referência, que podem exigir pagamentos adicionais para a disponibilização de seu conteúdo e (ii) tampouco podemos garantir a segurança do acesso, informações, materiais, produtos ou serviços contidos ou acessíveis através dos Sites de Referência, inclusive a segurança contra qualquer código malicioso que possa danificar seus aparelhos ou os correspondentes arquivos. O ACESSO E O USO DE SITES DE REFERÊNCIA, INCLUINDO AS INFORMAÇÕES, MATERIAIS, PRODUTOS E SERVIÇOS OU DISPONIBILIZADOS NOS SITES DE REFERÊNCIA, É FEITO EXCLUSIVAMENTE POR SUA CONTA E RISCO.                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">Cobrança recorrente</h3>
                                        <p className="">
                                            A assinatura será cobrada mensalmente na data de assinatura, e a cada mês a partir de então, a menos e até que o usuário cancele de sua assinatura. Faturaremos automaticamente o pagamento pelo método selecionado todos os meses no mesmo dia do mês correspondente ao início da assinatura. Nós reservamos o direito de alterar o momento de nossa cobrança se seu pagamento não tiver sido concluído com êxito. Caso sua assinatura tenha sido paga em um dia não contido em um determinado mês, poderemos efetuar a cobrança em um outro dia do mês que considerarmos apropriado. Por exemplo, se você iniciou sua assinatura em 31 de março, é provável que sua próxima data de pagamento seja 30 de abril.                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">Ressalvas</h3>
                                        <p className="">
                                            OS SERVIÇOS E TODO O CONTEÚDO INCLUÍDO SÃO FORNECIDOS NO ESTADO ATUAL, SEM GARANTIA DE QUALQUER TIPO, EXPRESSA OU IMPLÍCITA. ESPECIFICAMENTE, A LIFESAVERS DISPONIBILIZA CONTÉUDO QUE PODE COMPREENDER ANÁLISES E OPINIÕES PESSOAIS. EM NENHUM CASO, A LIFESAVERS GARANTE QUE TAIS INFORMAÇÕES SERÃO FORNECIDAS DE MANEIRA ININTERRUPTA, NEM LIVRE DE ERROS OU DE OPINIÕES PESSOAIS QUE POSSAM DIVERGIR DE ORIENTAÇÕES, RECOMENDAÇÕES OU PROTOCOLOS OFICIAIS. O CONTEÚDO FOI CONCEBIDO PARA CORRESPONDER À UMA ANÁLISE CRÍTICA DE ÂMBITO ACADÊMICO E NÃO COMO RECOMENDAÇÃO OU ORIENTAÇÃO PARA A TOMADA DE DECISÕES MÉDICAS PRÁTICAS, QUE DEVEM LEVAR EM CONTA, ENTRE OUTROS ELEMENTOS, OS PROTOCOLOS E ORIENTAÇÕES VIGENTES, BEM COMO AS PARTICULARIDADES DE CADA PACIENTE.                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">Limitação de responsabilidade</h3>
                                        <p className="">
                                            ATÉ O MÁXIMO PERMITIDO POR LEI, A LIFESAVERS E SUAS PARCEIRAS NÃO SERÃO RESPONSÁVEIS POR QUALQUER DANO INDIRETO, INCIDENTAL, ESPECIAL, CONSEQÜENCIAL OU PUNITIVO, ASSIM COMO QUALQUER PERDA DE DADOS, PERDA DE LUCROS OU RECEITAS, INCORRIDAS DIRETA OU INDIRETAMENTE, PERDAS DE FUNDOS DE COMÉRCIO (“GOODWILL”) OU OUTRAS PERDAS INTANGÍVEIS, RESULTANTES DO USO, ACESSO OU INABILIDADE DE ACESSAR OU USAR OS SERVIÇOS DISPONIBILIZADOS. EM NENHUM CASO, A RESPONSABILIDADE AGREGADA DA LIFESAVERS POR TODAS AS RECLAMAÇÕES RELACIONADAS COM OS SERVIÇOS EXCEDERÁ O VALOR TOTAL RECEBIDO NOS ÚLTIMOS SEIS MESES DO USUÁRIO. VOCÊ RECONHECE E CONCORDA QUE AS ISENÇÕES DE RESPONSABILIDADE E AS LIMITAÇÕES DE RESPONSABILIDADE ESTABELECIDAS NESTE TERMO DE USO REFLETEM UMA ALOCAÇÃO RAZOÁVEL E JUSTA DE RISCO ENTRE VOCÊ, A LIFESAVERS, E SUAS PARCEIRAS, E QUE ESSAS LIMITAÇÕES SÃO UMA BASE ESSENCIAL PARA QUE OS SERVIÇOS SEJAM DISPONIBILIZADOS PARA O USUÁRIO DE UMA FORMA ECONOMICAMENTE VIÁVEL.
                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">Modificações ou encerramento dos serviços</h3>
                                        <p className="">
                                            Estamos constantemente mudando e melhorando nossos serviços. Podemos adicionar ou remover funções, recursos ou requisitos, e podemos suspender ou interromper parte de nossos Serviços por completo. Nesse caso, garantimos o acesso até o final do período contratado ou um reembolso, conforme o acordado entre as partes. Nós reservamos o direito de ajustar ou alterar os preços de nossos serviços, ou de quaisquer partes destes, de acordo com os critérios da Lifesavers, a qualquer momento que assim determinarmos necessário. Salvo disposição expressa em contrário nestes Termos, qualquer alteração de preço dos serviços entrará em vigor após notificação aos usuários por e-mail. Podemos não ser capazes de fornecer os Serviços para determinadas regiões ou países por vários motivos, inclusive devido a requisitos de controle de exportação aplicáveis ou limitações e restrições de acesso à Internet por parte dos governos. Nesse caso, não teremos nenhuma responsabilidade perante você por qualquer ação desse tipo.
                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">Encerramento por parte do usuário</h3>
                                        <p className="">
                                            O usuário pode encerrar o uso de nossos serviços a qualquer momento, embora lamentemos sua saída. Nesse caso, seu acesso será permitido até o último dia do período para o qual a assinatura tiver sido contratada, mas nenhum reembolso será devido.                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">Encerramento por violações aos Termos</h3>
                                        <p className="">
                                            Caso constatemos que o usuário tenha violado qualquer elemento dos presentes Termos, poderemos suspender o acesso ao aplicativo imediatamente, encerrando o contrato imediatamente. Nesse caso, os valores pagos não serão devolvidos a título de multa não compensatória, e o acesso será suspenso no período remanescente, sem prejuízo das demais medidas indenizatórias cabíveis. Nos casos de violações particularmente graves, reservamo-nos ao direito de não permitir acessos subsequentes ao mesmo usuário no futuro.
                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">Revisão dos termos</h3>
                                        <p className="">
                                            Reservamos o direito de revisar os Termos, a nosso critério, a qualquer momento. Quaisquer revisões dos Termos entrarão em vigor imediatamente após a publicação. Para quaisquer alterações materiais nos Termos, tomaremos medidas razoáveis para notificar os usuários sobre essas alterações. Em todos os casos, o uso continuado dos Serviços após a publicação de tais alterações, com ou sem notificação, constitui aceitação vinculante aos Termos revisados.
                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">Divisibilidade das disposições e ausência de renúncia</h3>
                                        <p className="">
                                            Se alguma disposição destes Termos for considerada inaplicável, isso não afetará as outras disposições. Se você não cumprir estes Termos e não tomarmos medidas imediatas, isso não indica que renunciaremos a quaisquer direitos que possamos ter (como agir no futuro).
                                        </p>
                                    </CardBody>
                                    <CardBody>
                                        <h3 className="card-title info-bar">Cessão do contrato</h3>
                                        <p className="">
                                            Os Termos, assim como as licenças associadas para acesso ao correspondente conteúdo, não poderão ser transferidas ou cedidas pelo usuário a quaisquer terceiros, exceto com a autorização prévia e escrita da Lifesavers; entretanto, você concorda que a Lifesavers poderá ceder sua posição contratual sem qualquer restrição e sem a necessidade do consentimento expresso do usuário.
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
