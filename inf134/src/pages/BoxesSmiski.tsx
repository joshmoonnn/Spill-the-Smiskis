import { IonContent, IonHeader, IonLabel, IonPage, IonSearchbar, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import './BoxesSmiski.css';

const BoxesSmiski: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="ion-no-border">
          <IonTitle size="large">Smiski Hub</IonTitle>
        </IonToolbar>

        <IonToolbar class="ion-no-border">
          <IonSearchbar color="light" placeholder="Search for a Smiski"></IonSearchbar>
        </IonToolbar>

      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default BoxesSmiski;
