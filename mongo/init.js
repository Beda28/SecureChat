db.createUser({
  user: "admin",
  pwd: "adm!nro0t", 
  roles: [
    {
      role: "readWrite",
      db: "SecureChat",
    },
  ],
});
