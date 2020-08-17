# Facebook login libraty

## Installation

Using npm:
```shell
$ npm i -g npm
$ npm i --save facebookloginlibrary
```

Using yarn: 
```shell
$ yarn add facebookloginlibrary
```

Options: 
```js
{
  appId: "your-app-id",
  cookie: true,
  version: "v7.0"
}
// example
import facebookLogin from "facebookloginlibrary";

const fcb = facebookLogin({
  appId: "your-app-id",
  cookie: true,
  version: "v7.0"
});

fcb.init();

document.getElementById('facebook-button').addEventListener('click', async ()=> {
  const loginResponse = await fcb.logInWithFacebook();
});

```

In Vue.js:
```js
<script>
  import facebookLogin from "facebookloginlibrary";

  export default {
    name: "App",
    data: function(){
      return {
        fcb: null
      }
    },
    components: {},
    computed: {},
    methods: {
      facebookButtonHandler(){
        this.fcb.logInWithFacebook().then(res=>{
          console.log(res);
        });
      }
    },
    created() {
      this.fcb = facebookLogin({
        appId: "your-app-id",
        cookie: true,
        version: "v7.0"
      });

      this.fcb.init();
    }
  };
</script>
```