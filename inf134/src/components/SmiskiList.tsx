import { IonItem, IonLabel } from '@ionic/react';
import './SmiskiList.css';

interface ContainerProps {
  name: string;
}

const SmiskiList: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <IonItem>
        <IonLabel>{name}</IonLabel>
    </IonItem>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

export default SmiskiList;
