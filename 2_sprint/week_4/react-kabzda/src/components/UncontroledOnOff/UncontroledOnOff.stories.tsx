import { UncontrolledOnOff } from './UnconroledOnOff';

export default {
  title: 'UncontrolledOnOff stories',
  component: UncontrolledOnOff,
};

export const onMode = () => <UncontrolledOnOff defaultOn={true}/>
export const offMode = () => <UncontrolledOnOff defaultOn={false}/>


