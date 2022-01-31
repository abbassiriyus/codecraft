import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Navbarr from './js/Navbarr';

export default class App extends Component {
  render() {
    return <div>
      <Helmet>‍
        <meta name="description" content="Find all the best quality products your pet may need" /> 
               <meta name="twitter:card" content="summary_large_image" />  
                     <meta name="twitter:site" content="@user" />  
                           <meta name="twitter:creator" content="@user" /> 
                                  <meta name="twitter:title" content="Pets - Products" />
                                          <meta name="twitter:description" content="Best Products for your pet" />  
                                                <meta name="twitter:image" content="url_to_image"/>
                                                        <meta property="og:title" content="Pets - Products" />      
                                                          <meta property="og:description" content="Best Products for your pet" />
        <meta property="og:url" content="codecraft.uz" />
        <meta property="og:site_name" content="CodeCraft.uz" />
        <meta property="og:locale" content="en_uz" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>‍    
     <Navbarr/>
    </div>;
  }
}
