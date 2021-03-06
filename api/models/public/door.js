module.exports = function (sequelize, DataTypes) {
    const Door = sequelize.define('Door', {
        id : {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        }
    },
    {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    Door.associate = _associate;
    return Door;
}

// INTERNAL

function _associate(models) {
  models.Door.hasMany(models.Schedule, {
    as : 'schedule'
  });

  models.Door.belongsTo(models.Device, {
    as : 'device'
  });
}
