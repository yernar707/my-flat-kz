import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useState } from "react"
import Index from "../pages/index"

class BottomHeader extends React.Component {
  state = {
    modal: false,
    sent: false
  }
  

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){ 
    event.preventDefault();
    fetch('https://my--flat.herokuapp.com/api/v1/request/new', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      mode: 'cors',
      body: JSON.stringify({
      "name": this.name.value,
      "phoneNumber" : this.phone.value,
      "message" : this.msg.value,
      })
    }).then(
      this.setState({sent:true})
    )
    .catch((err) => console.log(err));
  };

  render() {
    const siteTitle = this.props
    const { modal, sent } = this.state;
    return (
        <div className="bottom-header">
            <div className="container header-container">
                <div className="align-items-center">
                    <div className="row align-items-center">
                    <div className="col-2">

                    </div>
                    <div className="col-8 header-column">
                        <Link className="nav-link active" to="/#second"> О нас </Link>
                        <Link className="nav-link" to="/#houses"> Комплексы </Link>
                        <Link className="nav-link" to="/#houses"> Каталог </Link>
                        <Link
                        to="/"
                        className="nav-link"
                        style={{
                            color: `black`,
                            textDecoration: `none`,
                            display: `flex`,
                            alignItems: `center`,
                            fontWeight: 600,
                        }}
                        >
                        <svg width="33" height="44" viewBox="0 0 33 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.39118 42.108L3.15783 37.4869H4.72131V43.9955H3.65864V39.3278L2.88215 43.9949H1.81882L0.980626 39.3929V43.9949H0V37.4863H1.56349L2.39118 42.108Z" fill="white"/>
                            <path d="M6.59201 41.8385L5.17096 37.4873H6.34653L7.20507 40.4532L8.06361 37.4873H9.13678L7.71573 41.8385V43.9953H6.59201V41.8385Z" fill="white"/>
                            <path d="M10.7101 40.3791H12.1614V41.3088H10.7101V43.9959H9.58643V37.4873H12.5618V38.4188H10.7101V40.3791Z" fill="white"/>
                            <path d="M13.1019 37.4873H14.2263V43.0656H16.076V43.9953H13.1019V37.4873Z" fill="white"/>
                            <path d="M20.2047 43.9949H19.0704L18.8735 42.8144H17.4951L17.2982 43.9949H16.2703L17.415 37.4863H19.0599L20.2047 43.9949ZM17.6395 41.9313H18.7232L18.181 38.64L17.6395 41.9313Z" fill="white"/>
                            <path d="M20.3989 37.4873H23.8737V38.4188H22.6988V43.9971H21.5744V38.4188H20.3989V37.4873Z" fill="white"/>
                            <path d="M24.8359 43.0098V43.995H23.751V43.0098H24.8359Z" fill="white"/>
                            <path d="M27.1235 41.4044L26.7762 42.0015V44.0001H25.6519V37.4915H26.7762V40.3272L28.2492 37.4873H29.3735L27.8087 40.3893L29.3722 43.9965H28.217L27.1235 41.4044Z" fill="white"/>
                            <path d="M33 37.4873V38.3985L30.8642 43.0656H33V43.9953H29.7096V43.0847L31.8454 38.4188H29.8107V37.4873H33Z" fill="white"/>
                            <path d="M9.96973 17.9442V18.0571L13.1879 20.2718L16.5 22.5504L19.8003 24.8218L28.0135 30.473L33 33.904V24.8045L26.4126 20.2718L23.0303 17.9442L19.8003 15.7224L16.5 13.4509L13.1958 15.7248L9.96973 17.9442Z" fill="#C09716"/>
                            <path d="M19.6618 11.2758L22.9621 13.5466L23.0303 13.4994V13.5932L28.0135 17.023L33 20.4535V11.354L26.2735 6.72632L23.0303 8.95775L21.8055 9.79969L19.6618 11.2758Z" fill="#E3BB2C"/>
                            <path d="M0 11.3536V20.4531L4.98322 17.025L9.96973 13.5928V13.5044L10.034 13.5486L13.3383 11.2754L16.5 9.10008L23.0303 4.60677V4.49331L16.5 0L9.96973 4.49331L0 11.3536Z" fill="#D7AF25"/>
                            <path d="M0 24.8043V33.9038L4.98321 30.4751L13.1958 24.824L9.88372 22.5454L6.58346 20.2739L0 24.8043Z" fill="#B48B0F"/>
                            <path d="M6.60193 33.9038H26.3911L16.4962 27.0955L6.60193 33.9038Z" fill="#9C7300"/>
                        </svg>
                        </Link>
                        <Link className="nav-link" to="/#services"> Услуги </Link>
                        <Link className="nav-link" to="/#smi"> СМИ о нас</Link>
                        <Link className="nav-link" to="/#footer"> Контакты </Link>
                    </div>
                    <div className="col-2">
                        <div className="order-button">
                            <button onClick={() => this.setState({modal:true})}>
                            Оставить заявку
                            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.7558 5.26581L15.7742 0.304076C15.5358 0.00717338 15.1775 -0.081629 14.8661 0.0790655C14.5548 0.23976 14.3517 0.618316 14.3517 1.03826V4.1827C14.3517 4.32608 14.2584 4.44232 14.1433 4.44232H1.25C0.559644 4.44232 0 5.13972 0 6C0 6.86028 0.559644 7.55768 1.25 7.55768H14.1433C14.2584 7.55768 14.3517 7.67391 14.3517 7.8173V10.9617C14.3517 11.3817 14.5548 11.7602 14.8661 11.9209C15.1775 12.0816 15.5358 11.9928 15.7742 11.6959L19.7558 6.73419C20.0811 6.32867 20.0811 5.67133 19.7558 5.26581Z" fill="#141B2D"/>
                            </svg>
                            </button>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
        { modal && (<div className="modal-order dark-bck" 
            >
            
                <form onSubmit={this.handleSubmit} style={{position: `relative`}} >
                    <span onClick={() => this.setState({modal:false})} style={{position: `absolute`, cursor: `pointer`, fontSize: 24, top: 15, right: 20, color: `#FFF`}}>×</span>
                    { !sent &&
                    <div>
                        <h3>Оставить заявку</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td><input required ref={(ref) => {this.name = ref}} type="text" placeholder="Имя" name="name"></input></td>
                                </tr>
                                <tr>
                                    <td><input required ref={(ref) => {this.phone = ref}} type="text" placeholder="Номер телефона" name="phone"></input></td>
                                </tr>
                                <tr>
                                    <td><textarea required ref={(ref) => {this.msg = ref}} placeholder="Сообщение" rows={5} name="message"></textarea></td>
                                </tr>
                                <tr>
                                    <td><input type="submit"></input></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    }
                    { sent &&
                        <div className="thank-you-msg">
                            <h3>Спасибо! Ваша заявка отправлена</h3>
                            <button onClick={() => this.setState({sent:false, modal: false})}>Хорошо</button>
                        </div>
                    }
                </form>
            </div>)}
        </div>
    )
    
    }
}


export default BottomHeader
