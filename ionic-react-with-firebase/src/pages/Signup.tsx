import { IonButton, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonText, IonToolbar } from "@ionic/react"
import { useEffect, useRef, useState } from "react";
import classes from './Signup.module.scss';
import { lockClosed, mail, personSharp } from "ionicons/icons";
import logo from '../assets/images/Logo.png'
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

type Props = {}

const SignUp: React.FC = (props: Props) => {


      const [data, setData] = useState({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
      });

      const { register, handleSubmit, getValues, formState: { errors, isDirty, isValid } } = useForm({
            mode: "onTouched",
            reValidateMode: 'onChange',
            defaultValues: {
                  username: "",
                  email: "",
                  password: "",
                  confirmPassword: ""
            },

      });



      const onSubmit = (data: any) => {

            console.log("sdfsdf", data.confirmPassword);

            console.log("data", JSON.stringify(data, null, 2));

      }

      useEffect(() => {
            console.log(getValues("confirmPassword"));
      }, [getValues("confirmPassword")])

      console.log(!isValid);

      return (
            <IonPage>
                  <IonContent className={`${classes.main} ion-padding`}>
                        <form className={classes.maindiv} onSubmit={handleSubmit(onSubmit)}>
                              <IonRow className={`ion-justify-content-center ${classes.heading} `}>
                                    <img src={logo} alt="" />
                              </IonRow>
                              <IonRow>
                                    <IonCol>
                                          <div className={classes.inputTitle}>
                                                <IonIcon icon={personSharp} className={classes.icon} />
                                                Username</div>
                                          <IonInput {...register("username", { required: "username is required", maxLength: 10 })} className={classes.input} />
                                          <IonText color="danger" class="ion-padding-start">{errors.username?.message}</IonText>
                                    </IonCol>
                              </IonRow>
                              <IonRow>
                                    <IonCol>
                                          <div className={classes.inputTitle}>
                                                <IonIcon icon={mail} className={classes.icon} />
                                                Email</div>
                                          <IonInput inputmode="email"  {...register("email", {
                                                required: "email is required",
                                                pattern: {
                                                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                      message: "invalid email address",
                                                }
                                          })} inputMode="email" className={classes.input} />
                                          <IonText color="danger" class="ion-padding-start">{errors.email?.message}</IonText>
                                    </IonCol>
                              </IonRow>
                              <IonRow>
                                    <IonCol>
                                          <div className={classes.inputTitle}>
                                                <IonIcon icon={lockClosed} className={classes.icon} />
                                                Password</div>
                                          <IonInput {...register("password", { required: "password is required", })} type="password" className={classes.input} />
                                          <IonText color="danger" class="ion-padding-start">{errors.password?.message}</IonText>
                                    </IonCol>
                              </IonRow>
                              <IonRow>
                                    <IonCol>
                                          <div className={classes.inputTitle}>
                                                <IonIcon icon={lockClosed} className={classes.icon} />
                                                Confirm Password</div>
                                          <IonInput type="password" {...register("confirmPassword", { required: "confirm password is required", })} className={classes.input} />
                                          <IonText color="danger" class="ion-padding-start">{errors.confirmPassword?.message}</IonText>
                                    </IonCol>
                              </IonRow>


                              <IonRow className="ion-justify-content-center">
                                    {/* onClick={submithandler} */}
                                    <IonButton disabled={!isValid} type="submit" expand="block" className={classes.signup} >Sign up</IonButton>
                              </IonRow>
                              <IonRow className={`ion-justify-content-center ${classes.createAc}`}>
                                    <Link to='/login' className={classes.createAc}>
                                          Already have an account?
                                          <span className={classes.link}>
                                                &nbsp; Login
                                          </span>
                                    </Link>
                              </IonRow>
                        </form>
                  </IonContent>
            </IonPage >
      )
}

export default SignUp