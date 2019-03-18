const setTimestamp = schema => {
  schema.add({
    createdAt: Date,
    updateAt: Date
  });

   
  schema.pre("save", function(next){
    const now = Date.now();
      this.updateAt = now;

    if (!this.createdAt) this.createdAt = now;

    next();
  });
};


module.exports = setTimestamp
