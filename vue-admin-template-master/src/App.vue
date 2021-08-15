<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}

// app.all('*', function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Origin,Accept,X-Requested-With');
//   res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS.PUT,PATCH,DELETE');
//   res.header('X-Powered-By', '3.2.1');
//   res.header('Content-Type', 'application/json;charset=utf-8');
//   next();
// });
</script>
