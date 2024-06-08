import { IonButton, IonCheckbox, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonPage, IonRange, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Tab2: React.FC = () => {
  const [series, setSeries] = useState<string | null>(null);
  const [sideShake, setSideShake] = useState<number>(0);
  const [vertShake, setVertShake] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [thickSides, setThickSides] = useState<boolean>(false);
  const [pokingSide, setPokingSide] = useState<boolean>(false);
  const [thickBottom, setThickBottom] = useState<boolean>(false);
  const [pokingTop, setPokingTop] = useState<boolean>(false);

  const history = useHistory();

  const reset = () => {
    setSeries(null);
    setSideShake(0);
    setVertShake(0);
    setWeight(0);
    setThickSides(false);
    setPokingSide(false);
    setThickBottom(false);
    setPokingTop(false);
  }

  const submit = () => {
    console.log("submit");
    if (series === 'movingSeries' && sideShake === 1 && vertShake === 2 && weight === 0 && thickSides === true && pokingSide === true) {
      history.push('/laddersmiskitab');
    }
  }

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
            <IonSelect className="seriesSelector" aria-label="series" shape="round" fill="outline" interface="popover" placeholder="Select a Series" value={series} onIonChange={e => setSeries(e.detail.value)}>
              <IonSelectOption value="movingSeries">Moving Series</IonSelectOption>
              <IonSelectOption value="livingSeries">Living Series</IonSelectOption>
              <IonSelectOption value="workSeries">Work Series</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonGrid>
              <IonRow><IonRange labelPlacement="stacked" label="Side to Side Shake ↔" aria-label="sideshake" ticks={true} snaps={true} min={0} max={3} value={sideShake} onIonChange={e => setSideShake(e.detail.value as number)}></IonRange></IonRow>
              <IonRow><IonCol size="4">N/A</IonCol><IonCol size="3">Low</IonCol><IonCol size="3">Medium</IonCol><IonCol>High</IonCol></IonRow>
            </IonGrid>
          </IonItem>

          <IonItem>
            <IonGrid>
              <IonRow><IonRange labelPlacement="stacked" label="Up & Down Shake ↕" aria-label="vertshake" ticks={true} snaps={true} min={0} max={3} value={vertShake} onIonChange={e => setVertShake(e.detail.value as number)}></IonRange></IonRow>
              <IonRow><IonCol size="4">N/A</IonCol><IonCol size="3">Low</IonCol><IonCol size="3">Medium</IonCol><IonCol>High</IonCol></IonRow>
            </IonGrid>
          </IonItem>

          <IonItem>
            <IonGrid>
              <IonRow><IonRange labelPlacement="stacked" label="Weight" aria-label="weight" ticks={true} snaps={true} min={0} max={2} value={weight} onIonChange={e => setWeight(e.detail.value as number)}></IonRange></IonRow>
              <IonRow><IonCol size="5">Light</IonCol><IonCol size="5">Medium</IonCol><IonCol>Heavy</IonCol></IonRow>
            </IonGrid>
          </IonItem>

          <IonItem>
            <IonGrid>
              <IonRow><IonLabel className="thick">Thickness</IonLabel></IonRow>
              <IonRow><IonCol><IonCheckbox checked={thickSides} onIonChange={e => setThickSides(e.detail.checked)}>Thick on Sides</IonCheckbox></IonCol>
                <IonCol><IonCheckbox checked={pokingSide} onIonChange={e => setPokingSide(e.detail.checked)}>Poking on a Side</IonCheckbox></IonCol></IonRow>
              <IonRow><IonCol><IonCheckbox checked={thickBottom} onIonChange={e => setThickBottom(e.detail.checked)}>Thick on Bottom</IonCheckbox></IonCol>
                <IonCol><IonCheckbox checked={pokingTop} onIonChange={e => setPokingTop(e.detail.checked)}>Poking on Top</IonCheckbox></IonCol></IonRow>
            </IonGrid>
          </IonItem>

          <IonItem>
            <IonGrid>
              <IonRow>
                <IonCol size="8"><IonButton className="reset" onClick={reset}>Reset</IonButton></IonCol>
                <IonCol><IonButton className="submit" onClick={submit}>Show Results</IonButton></IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>

        </IonList>


      </IonContent>
    </IonPage>
  );
};

export default Tab2;
