class FbAuthenticated{
  constructor(initOptions) {
    this.initOptions = initOptions;
  }
  logInWithFacebook() {
    return new Promise(function(resolve){
      window.FB.login((response) => {
        resolve(response)
      });
    }) 
  }
  init(){
    this.loadFacebookSDK(document, "script", "facebook-jssdk");
    this.initFacebook();
  }
  initFacebook() {
    window.fbAsyncInit = ()=> {
      window.FB.init(this.initOptions);
    };
  }
  loadFacebookSDK(d, s, id) {
    let js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }
}


export default function (initOptions){
  return new FbAuthenticated(initOptions);
}
