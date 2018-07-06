var app = app || {};

app.group = {
    datas : {},

    init : () => {
        console.log('Appel script : group.js');
        app.group.loadDatas();
    },

    loadDatas : (res) => {
      if( res === undefined) {
          app.api.get('group', app.group.loadDatas, sessionStorage.getItem('token'), app.group.loadDatas);
      } else {
          app.group.datas = res;
      }
    }

}

app.group.init();
