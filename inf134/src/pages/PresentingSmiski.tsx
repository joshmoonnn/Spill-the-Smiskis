import { IonBackButton, IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonPage, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import './MovingTab.css';

const MovingTab: React.FC = () => {
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
                        <IonBackButton defaultHref="/MovingTab"></IonBackButton>
                    </IonButton>
                </IonToolbar>

            </IonHeader>

            <IonContent fullscreen>
                <IonGrid>
                    <IonRow>
                        <IonCol></IonCol>
                        <IonCol><div style={{ width: '222px' }}><IonButton className="moveTitle" shape="round" expand="full">SMISKI Carrying Ladder</IonButton></div></IonCol>
                        <IonCol></IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol></IonCol>
                        <IonCol><div><IonCard className="move"><img src="/assets/ladder.svg"></img></IonCard></div></IonCol>
                        <IonCol></IonCol>
                    </IonRow>
                    <IonRow>
                    <IonLabel className="header">Series: </IonLabel>
                    <IonLabel className="detail">Moving</IonLabel>
                    </IonRow>
                    <IonRow>
                        <IonLabel className="header">Side to Side Shake: </IonLabel>
                        <IonLabel className="detail">Low</IonLabel>
                    </IonRow>
                    <IonRow>
                        <IonLabel className="header">Up & Down Shake: </IonLabel>
                        <IonLabel className="detail">Medium</IonLabel>
                    </IonRow>
                    <IonRow>
                        <IonLabel className="header">Weight: </IonLabel>
                        <IonLabel className="detail">39 | Light</IonLabel>
                    </IonRow>
                    <IonRow>
                        <IonLabel className="header">Thickness: </IonLabel>
                        <IonLabel className="detail">Poking on a Side, Thick on Sides</IonLabel>
                    </IonRow>
                </IonGrid>

            </IonContent>
        </IonPage>
    );
};

export default MovingTab;
