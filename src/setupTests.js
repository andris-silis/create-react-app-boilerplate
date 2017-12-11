import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';


configure({ adapter: new Adapter() });
global.expect.addSnapshotSerializer(
  createSerializer({ mode: 'deep' }),
);

global.mount = mount;
global.shallow = shallow;
