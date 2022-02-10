import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import classes from './Splash.module.scss';
import logo from '../assets/images/Logo.png'
import { useEffect } from 'react';
import { useHistory } from 'react-router';

const Splash: React.FC = () => {

  const history = useHistory()

  useEffect(() => {
    setTimeout(() => {
      history.replace("/login")
    }, 2000);
  }, [])

  return (
    <IonPage>
      <IonContent fullscreen className={classes.main}>
        <div className={classes.mainDiv}>
          <img src={logo} alt="" className={classes.demoContent} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Splash;
