// const db = require("../models/index.js");
// const Equipment = db.equipment;
// const Op = db.Sequelize.Op;
const pool = require("../config/db.config.js").db;

// Create and Save a new Equipment
exports.create = (req, res) => {

    const { equipment_id, name, manufacture_date, display_name, product_family } = req.body;

    pool.query('INSERT INTO equipments (equipment_id,name,manufacture_date,display_name,product_family) VALUES ($1, $2,$3,$4,$5)', [equipment_id, name, manufacture_date, display_name, product_family], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).send(`Equipment added: ${results}`)
    })
};

//Find all equipments...
exports.findAll = (request, response) => {

    pool.query('SELECT * FROM tbl_equipment', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
       // pool.end();
    })
}

//Find a single Equipment with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    pool.query('SELECT * FROM tbl_equipment WHERE equipment_unique_id = $1', [id], (error, results) => {
        if (error) {
            console.log("error"+error);
            throw error
        }
        res.status(200).json(results.rows)
    });
};

// Update a Equipment by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    const { DisplayName, Description , Classification ,IsInstallationNeeded , Type , AccessDescription , BookingBuffer ,Country,IsMovableAsset,LayerParameter,IsBookable,IsScalable,ConditionComment,UsageComment,InstrumentID } = req.body

    pool.query(
        `UPDATE tbl_equipment SET equipment_display_name = $1, equipment_description = $2 , equipment_classification = $3 ,equipment_installation_required=$4,equipment_type=$5,equipment_material_description=$6,equipment_booking_buffer_demo=$7,equipment_home_location=$8,equipment_movable_asset=$9,equipment_layer_of_perimeter=$10,equipment_is_available=$11,equipment_salable=$12,equipment_condition_comments=$13,equipment_usage_comments=$14  WHERE equipment_unique_id = $15`,
        [ DisplayName, Description , Classification ,IsInstallationNeeded , Type , AccessDescription , BookingBuffer ,Country,IsMovableAsset,LayerParameter,IsBookable,IsScalable,ConditionComment,UsageComment,InstrumentID ],
        (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).json(results.rows);
        }
    )
};

// Delete a Equipment with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    pool.query('DELETE FROM equipments WHERE equipment_id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Equipment deleted with ID: ${id}`);
    })
};

