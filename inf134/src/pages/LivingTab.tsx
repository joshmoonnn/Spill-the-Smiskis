import { IonBackButton, IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonPage, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import './LivingTab.css';

const LivingTab: React.FC = () => {
    return (
        <IonPage>

            <IonHeader>
                <IonToolbar class="ion-no-border">
                    <IonTitle size="large">Smiski Hub</IonTitle>
                </IonToolbar>

                <IonToolbar class="ion-no-border">
                    <IonSearchbar color="light" placeholder="Search for a Smiski"></IonSearchbar>
                </IonToolbar>

                <IonToolbar>
                    <IonButton className="back" slot="start" shape="round">
                        <IonBackButton default-href="/" ></IonBackButton>
                    </IonButton>
                </IonToolbar>

            </IonHeader>

            <IonContent fullscreen>
                <IonGrid>
                    <IonRow>
                        <IonCol></IonCol>
                        <IonCol><div style={{ width: '222px' }}><IonButton className="liveTitle" shape="round" expand="full" >Living Series</IonButton></div></IonCol>
                        <IonCol></IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol><div className="centerCard"><IonCard className="live"><img className="right"src="/assets/dream.svg"></img><IonCardHeader><IonCardSubtitle>Daydreaming</IonCardSubtitle></IonCardHeader></IonCard></div></IonCol>
                        <IonCol><div className="centerCard"><IonCard className="live"><img className="down" src="/assets/lift.svg"></img><IonCardHeader><IonCardSubtitle>Lifting</IonCardSubtitle></IonCardHeader></IonCard></div></IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol><div className="centerCard"><IonCard className="live"><img className="right" src="/assets/hide.svg"></img><IonCardHeader><IonCardSubtitle>Hiding</IonCardSubtitle></IonCardHeader></IonCard></div></IonCol>
                        <IonCol><div className="centerCard"><IonCard className="live"><img className="right" src="/assets/think.svg"></img><IonCardHeader><IonCardSubtitle>Thinking</IonCardSubtitle></IonCardHeader></IonCard></div></IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol><div className="centerCard"><IonCard className="live"><img src="/assets/flute.svg"></img><IonCardHeader><IonCardSubtitle>Playing</IonCardSubtitle></IonCardHeader></IonCard></div></IonCol>
                        <IonCol><div className="centerCard"><IonCard className="live"><img className="down" src="/assets/nap.svg"></img><IonCardHeader><IonCardSubtitle>Nap Time</IonCardSubtitle></IonCardHeader></IonCard></div></IonCol>
                        
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default LivingTab;
