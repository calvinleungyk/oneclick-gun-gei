var pg = require('pg');

pg.defaults.ssl = true;
pg.connect('postgres://oxqqosrsnrulvv:zfz0to6dNR5d90eQ_EDNPBSIR_@ec2-54-221-226-72.compute-1.amazonaws.com:5432/dcq5jqlfj1rvr7', function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});