
import { faAddressBook, faRectangleList, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import Overview from './design-system/Components/Overview/Overview.js';


function App() {
  return (
    <div className="App">
      <Overview 
      icon={faUserGroup} 
      title="Title1"
      desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum"
      />
      <Overview 
      icon={faAddressBook} 
      title="Title2"
      desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum"
      />
      <Overview 
      icon={faRectangleList} 
      title="Title3"
      desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum"
      />      
    </div>
  );
}

export default App;
