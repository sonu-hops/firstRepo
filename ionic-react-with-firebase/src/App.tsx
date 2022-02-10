import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonButton, IonContent, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Splash';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useEffect, useState } from 'react';
import Dashboard from './pages/Dashboard';
import { Protectedroute } from './Router/ProtectedRoute';

setupIonicReact();

const App: React.FC = () => {



  return (
    <IonApp>
      <IonReactRouter>
        {/* <IonRouterOutlet> */}
        {/* <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route> */}
        {/* </IonRouterOutlet> */}
        <Protectedroute />
      </IonReactRouter>
    </IonApp>
  )

};

export default App;
