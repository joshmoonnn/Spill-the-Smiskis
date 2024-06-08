import { IonButton, IonCheckbox, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonPage, IonRange, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large">Smiski Identifier</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>


        <IonList>
          <IonItem>
            <IonSelect className="seriesSelector" aria-label="series" shape="round" fill="outline" interface="popover" placeholder="Select a Series">
              <IonSelectOption value="movingSeries">Moving Series</IonSelectOption>
              <IonSelectOption value="livingSeries">Living Series</IonSelectOption>
              <IonSelectOption value="workSeries">Work Series</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonGrid>
              <IonRow><IonRange labelPlacement="stacked" label="Side to Side Shake ↔" aria-label="sideshake" ticks={true} snaps={true} min={0} max={3}></IonRange></IonRow>
              <IonRow><IonCol size="4">N/A</IonCol><IonCol size="3">Low</IonCol><IonCol size="3">Medium</IonCol><IonCol>High</IonCol></IonRow>
            </IonGrid>
          </IonItem>

          <IonItem>
            <IonGrid>
              <IonRow><IonRange labelPlacement="stacked" label="Up & Down Shake ↕" aria-label="vertshake" ticks={true} snaps={true} min={0} max={3}></IonRange></IonRow>
              <IonRow><IonCol size="4">N/A</IonCol><IonCol size="3">Low</IonCol><IonCol size="3">Medium</IonCol><IonCol>High</IonCol></IonRow>
            </IonGrid>
          </IonItem>

          <IonItem>
            <IonGrid>
              <IonRow><IonRange labelPlacement="stacked" label="Weight" aria-label="weight" ticks={true} snaps={true} min={0} max={2}></IonRange></IonRow>
              <IonRow><IonCol size="5">Light</IonCol><IonCol size="5">Medium</IonCol><IonCol>Heavy</IonCol></IonRow>
            </IonGrid>
          </IonItem>

          <IonItem>
            <IonGrid>
              <IonRow><IonLabel className="thick">Thickness</IonLabel></IonRow>
              <IonRow><IonCol><IonCheckbox>Thick on Sides</IonCheckbox></IonCol><IonCol><IonCheckbox>Poking on a Side</IonCheckbox></IonCol></IonRow>
              <IonRow><IonCol><IonCheckbox>Thick on Bottom</IonCheckbox></IonCol><IonCol><IonCheckbox>Poking on Top</IonCheckbox></IonCol></IonRow>
            </IonGrid>
          </IonItem>

          <IonGrid>
              <IonRow>
                <IonCol><IonButton></IonButton></IonCol>
                <IonCol><IonButton></IonButton></IonCol>
              </IonRow>
            </IonGrid>

        </IonList>






      </IonContent>
    </IonPage>
  );
};

export default Tab2;
