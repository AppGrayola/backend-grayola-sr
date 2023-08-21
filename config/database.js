module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', 'containers-us-west-136.railway.app'),
      port: env.int('PGPORT', 8070),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', 'X81s6Ee1rWcuxwxN0GAV'),
      ssl: env.bool(true),
    },
    pool: { min: 0 }
  },
});
