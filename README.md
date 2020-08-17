# Facebook login libraty

## Installation

Using npm:
```shell
$ npm i -g npm
$ npm i --save facebookLogin
```

Using yarn: 
```shell
$ yarn add facebookLogin
```

Options: 
```js
{
  appId: "your-app-id",
  cookie: true,
  version: "v7.0"
}
// example
import facebookLogin from "facebookLogin";

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
  import facebookLogin from "facebookLogin";

  export default {
    name: "App",
    components: {},
    computed: {},
    methods: {
      facebookButtonHandler(){
        fcb.logInWithFacebook().then(res=>{
          console.log(res);
        });
      }
    },
    created() {
      const fcb = facebookLogin({
        appId: "your-app-id",
        cookie: true,
        version: "v7.0"
      });

      fcb.init();
    }
  };
</script>
```