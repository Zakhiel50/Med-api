const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Facture = sequelize.define('Facture', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        coast: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        surname: {
            type: DataTypes.STRING,
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
        }
    }, {
        tableName: 'Factures',
        updatedAt: false
      })
    Facture.associate = (models) => {
        Facture.belongsTo(models.Praticien, { foreignKey: 'praticienId', as: 'praticien' });
        Facture.belongsTo(models.Patient, { foreignKey: 'patientId', as: 'patient' });
    };
    return Facture
}