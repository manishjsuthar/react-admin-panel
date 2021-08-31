import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from './components/Main';
import '@material-ui/core';
import Bulksms from './components/Bulksms';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RequestsenderId from './components/requestsenderid';
import Addsenderid from './components/Addsenderid';
import Ipwhitelist from './components/Ipwhitelist'
import Addwhitelist from './components/Addwhitelist'
import Advancedbulksms from './components/Advancedbulksms'
import Importsms from './components/Importsms'
import Importsmsusingtemplate from './components/Importsmsusingtemplate'
import Grouplist from './components/Grouplist'
import Newgroup from './components/Newgroup'
import Importgroupcontact from './components/Importgroupcontact'
import Addcontact from './components/Addcontact'
import Dlttemplate from './components/Dlttemplate'
import Managekey from './components/Managekey';
import Smstemplate from './components/Smstemplate'
import Newmessagetemplate from './components/Newmessagetemplate'

function App() {
    return (
      <Router>
      <Sidebar/>
      <Navbar/>
      <Switch>
      <Route path="/" exact>{Main}</Route>
      <Route path="/bulksms">{Bulksms}</Route>
      <Route path="/requestsenderid">{RequestsenderId}</Route>
      <Route path="/ipwhitelist">{Ipwhitelist}</Route>
      <Route path="/addwhitelist">{Addwhitelist}</Route>
      <Route path="/addsenderid">{Addsenderid}</Route>
      <Route path="/advancedbulksms">{Advancedbulksms}</Route>
      <Route path="/importsms">{Importsms}</Route>
      <Route path="/importsmsusingtemplate">{Importsmsusingtemplate}</Route>
      <Route path="/grouplist">{Grouplist}</Route>
      <Route path="/newgroup">{Newgroup}</Route>
      <Route path="/importgroupcontact">{Importgroupcontact}</Route>
      <Route path="/addcontact">{Addcontact}</Route>
      <Route path="/dlttemplate">{Dlttemplate}</Route>
      <Route path="/managekey">{Managekey}</Route>
      <Route path="/smstemplate">{Smstemplate}</Route>
      <Route path="/newmessagetemplate">{Newmessagetemplate}</Route>
      </Switch>
      <Footer/>
    </Router>
    )
  }

export default App
