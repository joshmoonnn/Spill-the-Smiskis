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
                        <IonBackButton default-href="/" ></IonBackButton>
                    </IonButton>
                </IonToolbar>

            </IonHeader>

            <IonContent fullscreen>
                <IonGrid>
                    <IonRow>
                        <IonCol></IonCol>
                        <IonCol><div style={{ width: '222px' }}><IonButton className="moveTitle" shape="round" expand="full" >Moving Series</IonButton></div></IonCol>
                        <IonCol></IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol><div className="centerCard"><IonCard className="move"><img src="/assets/ladder.svg"></img><IonCardHeader><IonCardSubtitle>Carrying Ladder</IonCardSubtitle></IonCardHeader></IonCard></div></IonCol>
                        <IonCol><div className="centerCard"><IonCard className="move"><img className="right" src="/assets/boxes.svg"></img><IonCardHeader><IonCardSubtitle>Balancing Boxes</IonCardSubtitle></IonCardHeader></IonCard></div></IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol><div className="centerCard"><IonCard className="move"><img src="/assets/lamp.svg"></img><IonCardHeader><IonCardSubtitle>Decorating</IonCardSubtitle></IonCardHeader></IonCard></div></IonCol>
                        <IonCol><div className="centerCard"><IonCard className="move"><img className="down" src="/assets/teamwork.svg"></img><IonCardHeader><IonCardSubtitle>Teamwork</IonCardSubtitle></IonCardHeader></IonCard></div></IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol><div className="centerCard"><IonCard className="move"><img src="/assets/cactus.svg"></img><IonCardHeader><IonCardSubtitle>Green Thumb</IonCardSubtitle></IonCardHeader></IonCard></div></IonCol>
                        <IonCol><div className="centerCard"><IonCard className="move"><img className="down" src="/assets/falling.svg"></img><IonCardHeader><IonCardSubtitle>Falling Down</IonCardSubtitle></IonCardHeader></IonCard></div></IonCol>
                        
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default MovingTab;
