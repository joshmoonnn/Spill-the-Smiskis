import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  IonFab,
  IonFabButton,
  IonNav
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import MovingTab from './pages/MovingTab';
import LivingTab from './pages/LivingTab';

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

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
/*import '@ionic/react/css/palettes/dark.system.css';*/

/* Theme variables */
import './theme/variables.css';



setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>

      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
          <Route exact path="/movingtab">
            <MovingTab />
          </Route>
          <Route exact path="/livingtab">
            <LivingTab />
          </Route>
        </IonRouterOutlet>

        <IonNav root={() => <Tab1 />}></IonNav>


        <IonTabBar slot="bottom">

          <IonTabButton tab="tab1" className="inner-left-btn" href="/tab1">
            <IonIcon aria-hidden="true" src="/assets/home.svg" />
          </IonTabButton>

          <IonTabButton tab="tab3" className="inner-right-btn">
            <IonIcon aria-hidden="true" src="/assets/person.svg" />
          </IonTabButton>

        </IonTabBar>
      </IonTabs>

      <IonFab vertical="bottom" horizontal="center" className="inner-center-fab">
        <IonFabButton color="transparent" className="inner-center-btn" href="/tab2">
          <img className="smi" src="/assets/smi.svg"></img>
        </IonFabButton>
      </IonFab>

    </IonReactRouter>
  </IonApp>
);

export default App;
