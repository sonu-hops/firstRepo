import { IonButton, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonToolbar } from "@ionic/react"
import { useRef } from "react";
import classes from './Login.module.scss'
import { lockClosed, mail } from "ionicons/icons";
import logo from '../assets/images/Logo.png'
import { Link } from "react-router-dom";
type Props = {}

const Login: React.FC = (props: Props) => {

      return (
            <IonPage>
                  <IonContent className={`${classes.main} ion-padding`}>
                        <form method="post" className={classes.maindiv}>
                              <IonRow className="ion-justify-content-center ion-margin-bottom ">
                                    <img src={logo} alt="" />
                              </IonRow>
                              <IonRow>
                                    <IonCol>
                                          <div className={classes.inputTitle}>
                                                <IonIcon icon={mail} className={classes.icon} />
                                                Email</div>

                                          <IonInput type="email" className={classes.input} />
                                    </IonCol>
                              </IonRow>
                              <IonRow>
                                    <IonCol>
                                          <div className={classes.inputTitle}>
                                                <IonIcon icon={lockClosed} className={classes.icon} />
                                                Password</div>
                                          <IonInput type="email" className={classes.input} />
                                    </IonCol>
                              </IonRow>
                              <IonRow className="ion-justify-content-center">
                                    <IonButton type="submit" expand="block" className={classes.login} >Login</IonButton>
                              </IonRow>
                              <IonRow className="ion-justify-content-center">
                                    <Link to='/signup' className={classes.createAc}>
                                          Don't have an account?
                                          <span className={classes.link}>
                                                &nbsp; Signup
                                          </span>
                                    </Link>

                              </IonRow>

                        </form>
                  </IonContent>
                  <IonFooter
                        color="primary"
                        class="ion-no-border"
                        className={classes.footer}
                  >
                        (C) MDOfficeManager LLC | Privacy Policy
                  </IonFooter>
            </IonPage >
      )
}

export default Login