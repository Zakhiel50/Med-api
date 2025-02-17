const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Rdv = sequelize.define('RendezVous', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        praticienId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Praticiens',
                key: 'id',
            },
            onDelete: 'CASCADE'
        },
        patientId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Patients',
                key: 'id',
            },
            onDelete: 'CASCADE'
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'rendezVous'
      });

    Rdv.associate = (models) => {
        Rdv.belongsTo(models.Praticien, { foreignKey: 'praticienId', as: 'praticien' });
        Rdv.belongsTo(models.Patient, { foreignKey: 'patientId', as: 'patient' });
    };

    return Rdv;
};
