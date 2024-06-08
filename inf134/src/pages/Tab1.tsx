import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonLabel, IonSegment, IonSegmentButton, IonButton, IonGrid, IonCol, IonRow, IonNav, IonNavLink, IonRouterLink } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useState } from 'react';

import MovingTab from './MovingTab';

const Tab1: React.FC = () => {
  const [lView, lViewActive] = useState(true);

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar class="ion-no-border">
          <IonTitle size="large">Smiski Hub</IonTitle>
        </IonToolbar>

        <IonToolbar class="ion-no-border">
          <IonSearchbar color="light" placeholder="Search for a Smiski"></IonSearchbar>
        </IonToolbar>

        <IonSegment value={lView ? "list" : "house"}>
          <IonSegmentButton value="list" onClick={() => { lViewActive(true); }}>
            <IonLabel>List View</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="house" onClick={() => { lViewActive(false); }}>
            <IonLabel>House View</IonLabel>
          </IonSegmentButton>
        </IonSegment>

      </IonHeader>


      <IonContent fullscreen>
        {lView ? (
          <IonGrid>

<IonRow>
            <IonCol><img src="/assets/move.svg"></img></IonCol>
            <IonCol><div style={{ width: '222px' }}><IonRouterLink href="/movingtab"><IonButton className="moving" shape="round" expand="full">Moving Series</IonButton></IonRouterLink></div></IonCol>
            <IonCol></IonCol>
          </IonRow>

          <IonRow>
            <IonCol></IonCol>
            <IonCol><div style={{ width: '222px' }}><IonRouterLink href="/livingtab"><IonButton className="living" shape="round" expand="full">Living Series</IonButton></IonRouterLink></div></IonCol>
            <IonCol><img src="/assets/cat.svg"></img></IonCol>
          </IonRow>

          <IonRow>
            <IonCol><img src="/assets/lap.svg"></img></IonCol>
            <IonCol><div style={{ width: '222px' }}><IonButton className="work" shape="round" expand="full">Work Series</IonButton></div></IonCol>
            <IonCol></IonCol>
          </IonRow>

          <IonRow>
            <IonCol></IonCol>
            <IonCol><div style={{ width: '222px' }}><IonButton className="dress" shape="round" expand="full">Dressing Series</IonButton></div></IonCol>
            <IonCol><img src="/assets/sweater.svg"></img></IonCol>
          </IonRow>

          <IonRow>
            <IonCol><img src="/assets/pom.svg"></img></IonCol>
            <IonCol><div style={{ width: '222px' }}><IonButton className="cheer" shape="round" expand="full">Cheer Series</IonButton></div></IonCol>
            <IonCol></IonCol>
          </IonRow>

          <IonRow>
            <IonCol></IonCol>
            <IonCol><div style={{ width: '222px' }}><IonButton className="exercise" shape="round" expand="full">Exercising Series</IonButton></div></IonCol>
            <IonCol><img src="/assets/hula.svg"></img></IonCol>
          </IonRow>

          <IonRow>
            <IonCol><img src="/assets/meditate.svg"></img></IonCol>
            <IonCol><div style={{ width: '222px' }}><IonButton className="yoga" shape="round" expand="full">Yoga Series</IonButton></div></IonCol>
            <IonCol></IonCol>
          </IonRow>

        </IonGrid>
        ) : (
          <img className="smiHouse" src="/assets/house.png"></img>
        )}

        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
